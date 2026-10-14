/**
 * Privacy guard for The Family Album, run in CI on every push and pull request.
 *
 * Fails when:
 *  - an image carries EXIF or XMP metadata (camera, location, or author fields),
 *  - text contains an email address other than the project's public one, a phone number,
 *    or a link to a host outside the allowlist,
 *  - the book data no longer parses into the shape the reader expects.
 *
 * No dependencies: run it with `node scripts/check-privacy.mjs`.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const ALLOWED_EMAILS = new Set(['hello@icarianforge.com']);
const ALLOWED_HOSTS = new Set([
  'fonts.googleapis.com', 'fonts.gstatic.com', 'www.icarianforge.com', 'icarianforge.com',
  'github.com', 'img.shields.io', 'www.linkedin.com', 'keepachangelog.com', 'semver.org', 'www.w3.org', 'localhost',
]);
const EMAIL_RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const PHONE_RE = /(?<![\w.-])(?:\+?\d{1,3}[\s.-]?)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}(?![\w-])/g;
const URL_RE = /https?:\/\/([a-z0-9.-]+)/gi;

const problems = [];
const walk = (dir) => readdirSync(dir).flatMap((name) => {
  if (name === '.git' || name === 'node_modules') return [];
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});
const files = walk(ROOT);

/** Metadata chunks inside a WebP (RIFF) file, by four-character id. */
function webpChunks(buf) {
  const ids = [];
  for (let at = 12; at + 8 <= buf.length;) {
    const id = buf.toString('ascii', at, at + 4);
    const size = buf.readUInt32LE(at + 4);
    ids.push(id);
    at += 8 + size + (size & 1);
  }
  return ids;
}

for (const file of files) {
  const rel = relative(ROOT, file);
  const ext = extname(file).toLowerCase();
  if (ext === '.webp') {
    const meta = webpChunks(readFileSync(file)).filter((id) => id === 'EXIF' || id === 'XMP ');
    if (meta.length) problems.push(`${rel}: image metadata (${meta.join(', ')})`);
  } else if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
    problems.push(`${rel}: use WebP without metadata for images`);
  } else if (['.html', '.js', '.mjs', '.md', '.svg', '.json', '.yml'].includes(ext)) {
    const text = readFileSync(file, 'utf8');
    for (const email of text.match(EMAIL_RE) ?? []) if (!ALLOWED_EMAILS.has(email.toLowerCase())) problems.push(`${rel}: email address`);
    if (PHONE_RE.test(text)) problems.push(`${rel}: phone number`);
    for (const [, host] of text.matchAll(URL_RE)) if (!ALLOWED_HOSTS.has(host.toLowerCase())) problems.push(`${rel}: link to ${host}`);
  }
}

// The reader expects these globals from book/data.js.
try {
  const data = vm.runInNewContext(`${readFileSync(join(ROOT, 'book/data.js'), 'utf8')};({ IMAGES: window.IMAGES, BOOK, IDX, CHAPTERS, IDX_ES })`, { window: {} });
  if (!Array.isArray(data.BOOK) || !data.BOOK.length || !Array.isArray(data.CHAPTERS) || !Array.isArray(data.IDX?.leaves)) problems.push('book/data.js: unexpected shape');
} catch (error) {
  problems.push(`book/data.js: does not parse (${error.message})`);
}

if (problems.length) {
  console.error(`Privacy check failed:\n- ${[...new Set(problems)].join('\n- ')}`);
  process.exit(1);
}
console.log(`Privacy check passed: ${files.length} files.`);
