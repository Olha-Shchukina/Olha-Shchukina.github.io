# Hola Visuals — olha-shchukina.com

Static portfolio site for Olha Shchukina (wedding videographer/photographer, Madrid).
Hosted on GitHub Pages, no build step, no server. GitHub Pages is configured to publish the `main`
branch (checked via the Pages API in Nov 2026), so a push to `main` is live within a minute.
By habit `main` is also merged into `gh-pages` with a pull request to keep the two identical, but
`gh-pages` is not what visitors see.

## Files that matter

- `index.html` — the whole site (Spanish). Hero, photo grid, video thumbnails, contact form (Formspree).
- `main.js` — gallery data (`collections` object: title, description, photo list per collection), modal + fullscreen viewer, lazy loading, contact form submit.
- `style.css` — all styles. See "CSS notes" below.
- `photos/` — ORIGINAL photos, kept on disk only. They are gitignored since Nov 2026 (they were 2.4 GB of
  dead weight in the repo and the site never serves them). Never resize or re-encode these, and never
  delete them: the optimize script needs them to regenerate the WebP copies. Olha keeps the master copies
  outside the repo. Only `photos/web/` and the small PNG icons directly in `photos/` are tracked.
- `photos/web/` — generated WebP copies used by the site (gallery photos, max 2000px long edge, quality 80).
- `photos/web/thumbs/` — generated WebP copies of the homepage thumbnails (max 1200px).
- `tools/optimize-images.js` — regenerates the WebP copies (see below).
- `CNAME` — custom domain.

Everything else (`index-es.html`, `index-es-old.html`, `photos.html`, `videos.html`, `backup*.html`, `*-es.html`)
is old and not linked from `index.html`. Leave it alone unless asked.

## Image rule (always)

Every image the site uses must be a WebP under `photos/web/`, produced by `tools/optimize-images.js`.
Never reference an original (`photos/*.jpg`) from `index.html` or `main.js`, and never commit originals:
they are gitignored and were purged from git history in Nov 2026. When asked to add or change photos,
do the steps below and run the script before committing.

## Adding photos or a new collection

1. Put the originals in `photos/<Collection name>/` (they stay local, git ignores them; only the WebP copies get committed).
2. Add the collection to the `collections` object in `main.js`, referencing `photos/web/<Collection name>/<file>.webp`.
3. Add a tile in the photo grid in `index.html` with `data-collection="<key>"` and
   `data-src="photos/web/thumbs/<path>.webp"` (the grid uses JS lazy loading, keep `class="lazy-img"`).
4. Generate the WebP copies:
   ```
   cd tools && npm install sharp   # once
   node tools/optimize-images.js   # from the repo root
   ```
   The script reads `main.js` and `index.html`, converts every referenced photo that has no up-to-date copy,
   and never touches the originals. Commit the new files under `photos/web/` together with the `main.js` /
   `index.html` changes. The originals are not on the server, so a photo only shows up once its
   WebP copy is generated and pushed.

Video tiles in `index.html` are plain links to YouTube/Vimeo with a local thumbnail; use
`loading="lazy" decoding="async"` and a `photos/web/thumbs/...webp` thumbnail.

## CSS notes

`style.css` grew by pasting the whole stylesheet several times. In Nov 2026 the duplicates were
commented out (not deleted) with these markers:

- `/* DUPLICATE — ... */` a whole block that a later block for the same selector fully overrides.
- `/* DUP (overridden by a later rule for the same selector): ... */` a single declaration.
- `/* FINAL definition (earlier duplicates commented out) */` the block that is actually live.
- `/* stray closing brace removed by cleanup ... */` three stray `}` that made browsers drop the next rule.

When changing a style, edit the `FINAL` block (search for the selector; the last match wins).
The commented blocks can be deleted at any time; they are kept only for reference.

## Performance rules of thumb

- Keep images in WebP from `photos/web/`; a homepage image should be well under 200 KB.
- Anything below the fold gets `loading="lazy"`.
- Do not add YouTube/Vimeo `<iframe>`s to the homepage; they are heavy. The existing ones are in HTML comments on purpose.
- No build tools, no frameworks: the owner publishes by pushing files.
