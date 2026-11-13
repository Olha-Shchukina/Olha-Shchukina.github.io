# Hola Visuals — olha-shchukina.com

Static portfolio site for Olha Shchukina (wedding videographer/photographer, Madrid).
Hosted on GitHub Pages, no build step, no server. GitHub Pages is configured to publish the `main`
branch (checked via the Pages API in Nov 2026), so a push to `main` is live within a minute.
By habit `main` is also merged into `gh-pages` with a pull request to keep the two identical, but
`gh-pages` is not what visitors see.

## Two languages rule (always)

The site exists in Spanish (`index.html`) and English (`en.html`). Every change, however small, is made
to both files (and to `collections-en.js` when it touches the gallery data). Never change one without the
other; before committing, check that both pages still have the same structure.

## Publishing rule (always)

Never `git push` (or merge into `gh-pages`) on your own. Commit locally, say "committed, not pushed",
and wait: a push to `main` is live on olha-shchukina.com within a minute and Olha reviews first.
A "push" instruction covers only the changes the owner is looking at, not later ones.

## Files that matter

- `index.html` — the whole site (Spanish). Order: hero (Olha + portrait), bio with "Pide tu fecha" (wa.link),
  "Así trabajo" steps, photo grid, video tiles, contact form (Formspree), footer.
- `en.html` — the English version, a comment-free copy of `index.html` with the texts translated (same ids,
  classes, images and scripts, `lang="en"`). The ES / EN switch is the last item of the nav on both pages.
  There is no build step: when `index.html` changes (text, a tile, a video), mirror the change in `en.html`.
- `collections-en.js` — English title + description for each gallery collection, keyed like `collections`
  in `main.js`. Loaded by `en.html` only; `main.js` uses it when `<html lang="en">`, falling back to the
  Spanish text for a missing key. Add an entry whenever a collection is added. (Photo captions in the
  fullscreen viewer come from the `alt` texts in `main.js` and are not translated.)
- `main.js` — gallery data (`collections` object: title, description, photo list per collection), modal + fullscreen viewer, lazy loading, contact form submit.
  UI strings in `main.js` and `video-lightbox.js` are picked by `document.documentElement.lang` (es / en).
- `style.css` — the original stylesheet (messy, see "CSS notes" below). Still loaded first.
- `redesign.css` — the Nov 2026 redesign, loaded AFTER `style.css` and overriding it. New styling goes
  here; edit `style.css` only to fix something `redesign.css` does not touch (e.g. the gallery modal).
  Palette tokens are at the top (Olha's: beige `--bg`, black `--ink`, red `--accent`, green `--green`).
- `video-lightbox.js` — opens the video tiles in an on-page player (YouTube/Vimeo) with prev/next.
  Falls back to the plain links when the page is opened from `file://` (YouTube refuses embeds
  without a referrer, "Error 153"). Preview with `python3 -m http.server 8765` from the repo root.
- `photos/` — ORIGINAL photos, kept on disk only. They are gitignored since Nov 2026 (they were 2.4 GB of
  dead weight in the repo and the site never serves them). Never resize or re-encode these, and never
  delete them: the optimize script needs them to regenerate the WebP copies. Olha keeps the master copies
  outside the repo. Only `photos/web/` and the small PNG icons directly in `photos/` are tracked.
- `photos/web/` — generated WebP copies used by the site (gallery photos, max 2000px long edge, quality 80).
- `photos/web/thumbs/` — generated WebP copies of the homepage thumbnails (max 1200px).
- `tools/optimize-images.js` — regenerates the WebP copies (see below).
- `CNAME` — custom domain.
- `favicon.ico` + `photos/favicon-*.png` + `photos/apple-touch-icon.png` — the tab icon (red tile, beige
  serif "H"), linked from the head of both pages. Source: a 512px render of the "H" in Cormorant Garamond
  on `--accent`; regenerate all sizes together if the design changes.

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

Two script conventions: a reference ending in `-bw` (e.g. `photos/web/thumbs/me-working-bw.webp`) is
generated as a black-and-white copy of `photos/me-working.jpg`; and `index.html` may reference a
large copy `photos/web/<name>.webp` (max 1500px) when a thumbnail would be upscaled (the intro photo).

Video tiles in `index.html` are plain links to YouTube/Vimeo with a local thumbnail; use
`loading="lazy" decoding="async"` and a `photos/web/thumbs/...webp` thumbnail.
To hide a video without deleting it, add `hidden` to its `.video-item2` div (three Penov Group
tiles are hidden this way since Nov 2026): `video-lightbox.js` and the "show more" batching in
`main.js` skip hidden tiles, and `redesign.css` keeps them `display: none`. The lightbox asks
players for 1080p (`vq=hd1080` on YouTube, `quality=1080p` on Vimeo); YouTube treats it as a hint.

## Links and buttons

- Every WhatsApp link (two buttons/icons under the bio, phone number in the contact section, footer) opens
  the chat with a prefilled message. Spanish page: `http://wa.link/ms8szi`. English page: `https://wa.link/zbuuiu`
  (English text). Do not use `wa.me/...`, and never mix the two links between the pages.
- The "Pide tu fecha" / "Ver mi trabajo" buttons appear once, at the end of "Sobre mí" (Olha asked
  for them to be removed from under the title, Nov 2026).
- The photo tiles show only the collection title: the "Ver colección / View collection" label was removed
  (Olha's request, Nov 2026). Do not add it back.
- On desktop the intro has no "Sobre mí" kicker (the bio starts right after the subtitle); on phones (under
  900px, stacked layout) the kicker is shown. Both are the same markup, toggled in `redesign.css`.
- Olha's green (`--green`) is used for the secondary buttons ("Ver más vídeos", "Enviar mensaje"), the
  social-icon circles and the "Así trabajo" step rules; red stays for primary actions and hovers.
- Social icons are inline SVGs in one stroke style (Instagram, TikTok, LinkedIn); WhatsApp is still
  `photos/whats.png`. Do not reintroduce `photos/tiktok02.png`, it rendered dimmer than the rest.

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
