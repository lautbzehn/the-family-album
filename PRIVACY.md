# How privacy works

The Family Album is a real book that belongs to a private family. The public version exists to show the work, never the family. The standard is simple: no person, and no AI, should be able to identify the family, the poems, or the photos from anything in this repository.

## What is here, and what is not

| In this repository | Never in this repository |
|---|---|
| The reader (`book/index.html`, `book/app.js`) | The real book, its transcriptions, and its translations |
| An anonymized stand-in for the book (`book/data.js`) | Any photograph of the real pages |
| Generated stand-in images for every leaf | Names, places, dates, or any real poem |
| | The anonymization tools, which only run against the private original |

This repository was created fresh with only anonymized files. No earlier version of the content ever existed in its history.

## How the text is anonymized

- **Random, not rearranged.** Every content string (chapter titles, the story, transcriptions, translations, notes, and the leaf index) is replaced with letters drawn from a cryptographic random source. Shuffling the real letters would leave anagrams that a person or an AI could solve, especially short titles and names. Random letters carry nothing to solve.
- **Lengths changed too.** Word lengths are randomly adjusted, so the pattern of word lengths cannot be matched against a published poem.
- **Layout kept.** Capitalization, punctuation, line breaks, and emphasis are kept, so the reader looks and behaves like the real book.
- **Structure kept.** Block types, page numbers, and the reader's own labels stay readable, because they describe the book's shape, not its content.
- **Verified.** Checked against the private original before publishing: of 26,118 words of three letters or more, none equals or rearranges any word in the original.

## How the photos are handled

Every leaf image is a generated stand-in (parchment, wavy lines, and the caption "Photo withheld for privacy"). There is no real handwriting or photograph anywhere in the repository. Images carry no EXIF or XMP metadata, and the CI privacy check enforces that.

## Reporting a concern

If you believe anything here could identify a real person, email hello@icarianforge.com and it will be removed first and discussed second.
