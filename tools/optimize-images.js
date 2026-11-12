// Creates optimized WebP copies of the site's photos. Originals are never modified.
//
//   photos/<anything>.jpg            ->  photos/web/<anything>.webp         (gallery photos, max 2000px, used by main.js)
//   homepage thumbnails               ->  photos/web/thumbs/<anything>.webp  (max 1200px, used by index.html)
//
// One-time setup (needs Node.js):   cd tools && npm install sharp
// Run after adding new photos:       node tools/optimize-images.js
//
// It reads main.js / index.html, and for every referenced photo (either the final
// photos/web/... .webp path or a legacy photos/... .jpg path) it looks for the
// original under photos/ and converts it when the .webp copy is missing or older
// than the original. Re-running it is cheap.
const fs = require('fs'); const path = require('path');
const sharp = require(path.join(__dirname, 'node_modules', 'sharp'));
const repo = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(repo, f), 'utf8');
const noComments = s => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/<!--[\s\S]*?-->/g, '');
const EXTS = ['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG'];
// "photos/web/thumbs/X.webp" -> "X", "photos/web/X.webp" -> "X", "photos/X.jpg" -> "X"
function inner(ref, sub) {
  const webPrefix = 'photos/' + sub + '/';
  if (ref.startsWith(webPrefix) && ref.endsWith('.webp')) return ref.slice(webPrefix.length, -'.webp'.length);
  if (ref.startsWith('photos/') && !ref.startsWith('photos/web/')) return ref.slice('photos/'.length).replace(/\.[^.]+$/, '');
  return null;
}
const refs = (text, re) => [...new Set([...noComments(text).matchAll(re)].map(m => m[1]))];
const gallery = refs(read('main.js'), /src:\s*'(photos\/[^']+\.(?:jpe?g|JPG|JPEG|png|PNG|webp))'/g).map(r => inner(r, 'web')).filter(Boolean);
const thumbs = refs(read('index.html'), /(?:src|data-src)="(photos\/[^"]+\.(?:jpe?g|JPG|JPEG|png|PNG|webp))"/g).map(r => inner(r, 'web/thumbs')).filter(Boolean);
function findOriginal(name) { for (const e of EXTS) { const p = path.join(repo, 'photos', name + e); if (fs.existsSync(p)) return p; } return null; }
async function convert(name, sub, maxEdge) {
  const src = findOriginal(name), out = path.join(repo, 'photos', sub, name + '.webp');
  if (!src) return fs.existsSync(out) ? 'skip' : 'missing';
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs) return 'skip';
  fs.mkdirSync(path.dirname(out), { recursive: true });
  let img = sharp(src, { failOn: 'none' }).rotate();
  // Homepage thumbnails: some exports carry a flat white band along an edge; trim it so the grid crops cleanly.
  if (sub === 'web/thumbs') img = img.trim({ background: '#ffffff', threshold: 12 });
  await img.resize({ width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80, effort: 4 }).toFile(out);
  console.log('converted', path.relative(repo, out));
  return 'ok';
}
(async () => {
  const jobs = [...gallery.map(n => [n, 'web', 2000]), ...thumbs.map(n => [n, 'web/thumbs', 1200])];
  const stats = { ok: 0, skip: 0, missing: 0 }; let i = 0;
  await Promise.all(Array.from({ length: 8 }, async () => { while (i < jobs.length) { const [n, sub, max] = jobs[i++]; stats[await convert(n, sub, max)]++; } }));
  console.log(`converted ${stats.ok}, already up to date ${stats.skip}, no original and no copy ${stats.missing}`);
  console.log('Remember: main.js should reference photos/web/... .webp and index.html photos/web/thumbs/... .webp');
})().catch(e => { console.error(e); process.exit(1); });
