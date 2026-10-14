# Changelog

Notable changes to The Family Album's public repository. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [1.0.0] · 2026-10-13

### Added
- The bilingual reader (Story, Leaves, and Context views; Spanish or English in one tap; a magnifier on every photo; reading position remembered).
- An anonymized stand-in for the book: every content string is cryptographically random text in the original's layout, verified to share no word, or rearrangement of a word, with the private original.
- Generated stand-in images for every leaf, with no metadata.
- A privacy guard in CI (`scripts/check-privacy.mjs`).
