// Creates optimized WebP copies of the site's photos. Originals are never modified.
//
//   photos/<anything>.jpg            ->  photos/web/<anything>.webp         (gallery photos, max 2000px, used by main.js)
//   homepage thumbnails               ->  photos/web/thumbs/<anything>.webp  (max 1200px, used by index.html)
//
// One-time setup (needs Node.js):   cd tools && npm install sharp
// Run after adding new photos:       node tools/optimize-images.js
//
// It only converts files that are referenced by main.js / index.html and that
// do not have an up-to-date .webp yet, so re-running it is cheap.
const fs = require('fs'); const path = require('path');
const sharp = require(path.join(__dirname, 'node_modules', 'sharp'));
const repo = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(repo, f), 'utf8');
const noComments = s => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/<!--[\s\S]*?-->/g, '');
const gallery = [...new Set([...noComments(read('main.js')).matchAll(/src:\s*'(photos\/[^']+\.(?:jpe?g|JPG))'/g)].map(m => m[1]))];
const thumbs = [...new Set([...noComments(read('index.html')).matchAll(/(?:src|data-src)="(photos\/[^"]+\.(?:jpe?g|JPG))"/g)].map(m => m[1]))];
function dst(rel, sub) { const inner = rel.slice('photos/'.length).replace(/\.[^.]+$/, ''); return path.join(repo, 'photos', sub, inner + '.webp'); }
async function convert(rel, sub, maxEdge) {
  const src = path.join(repo, rel), out = dst(rel, sub);
  if (!fs.existsSync(src)) return 'missing';
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs) return 'skip';
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await sharp(src, { failOn: 'none' }).rotate().resize({ width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80, effort: 4 }).toFile(out);
  return 'ok';
}
(async () => {
  const jobs = [...gallery.map(r => [r, 'web', 2000]), ...thumbs.map(r => [r, 'web/thumbs', 1200])];
  const stats = { ok: 0, skip: 0, missing: 0 }; let i = 0;
  await Promise.all(Array.from({ length: 8 }, async () => { while (i < jobs.length) { const [r, sub, max] = jobs[i++]; stats[await convert(r, sub, max)]++; } }));
  console.log(`converted ${stats.ok}, already up to date ${stats.skip}, source file missing ${stats.missing}`);
  console.log('Remember: main.js should reference photos/web/... .webp and index.html photos/web/thumbs/... .webp');
})().catch(e => { console.error(e); process.exit(1); });
