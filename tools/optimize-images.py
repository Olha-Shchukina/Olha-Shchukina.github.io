# Python twin of optimize-images.js, for machines without Node.js. Same rules, same output:
#
#   photos/<anything>.jpg            ->  photos/web/<anything>.webp         (gallery photos, max 2000px, used by main.js)
#   homepage thumbnails               ->  photos/web/thumbs/<anything>.webp  (max 1200px, used by index.html)
#
# One-time setup:               pip install pillow
# Run after adding new photos:  python tools/optimize-images.py      (from anywhere; paths are resolved from this file)
#
# It reads main.js / index.html, and for every referenced photo (either the final
# photos/web/... .webp path or a legacy photos/... .jpg path) it looks for the
# original under photos/ and converts it when the .webp copy is missing or older
# than the original. Originals are never modified. Re-running it is cheap.
import os, re, sys
from PIL import Image, ImageOps, ImageChops

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
EXTS = ['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG']


def read(f):
    with open(os.path.join(REPO, f), encoding='utf-8') as fh:
        return fh.read()


def no_comments(s):
    s = re.sub(r'/\*[\s\S]*?\*/', '', s)
    return re.sub(r'<!--[\s\S]*?-->', '', s)


# "photos/web/thumbs/X.webp" -> "X", "photos/web/X.webp" -> "X", "photos/X.jpg" -> "X"
def inner(ref, sub):
    web_prefix = 'photos/' + sub + '/'
    if ref.startswith(web_prefix) and ref.endswith('.webp'):
        return ref[len(web_prefix):-len('.webp')]
    if ref.startswith('photos/') and not ref.startswith('photos/web/'):
        return re.sub(r'\.[^.]+$', '', ref[len('photos/'):])
    return None


def refs(text, pattern):
    seen, out = set(), []
    for m in re.finditer(pattern, no_comments(text)):
        if m.group(1) not in seen:
            seen.add(m.group(1)); out.append(m.group(1))
    return out


gallery = [x for x in (inner(r, 'web') for r in refs(read('main.js'), r"src:\s*'(photos/[^']+\.(?:jpe?g|JPG|JPEG|webp))'")) if x]
page_refs = refs(read('index.html'), r'(?:src|data-src|href)="(photos/[^"]+\.(?:jpe?g|JPG|JPEG|webp))"')
thumbs = [x for x in (inner(r, 'web/thumbs') for r in page_refs if not r.startswith('photos/web/') or r.startswith('photos/web/thumbs/')) if x]
# index.html may also use a large copy (photos/web/<x>.webp, max 1500px), e.g. the portrait in the intro.
page_large = [x for x in (inner(r, 'web') for r in page_refs if r.startswith('photos/web/') and not r.startswith('photos/web/thumbs/')) if x]


def find_original(name):
    for e in EXTS:
        p = os.path.join(REPO, 'photos', name + e)
        if os.path.exists(p):
            return p
    return None


# A reference ending in "-bw" (e.g. photos/web/thumbs/me-working-bw.webp) is a black-and-white
# copy of the original without the suffix (photos/me-working.jpg). The original stays in colour.
def resolve(name):
    src = find_original(name)
    if src:
        return src, False
    if name.endswith('-bw'):
        src = find_original(name[:-3])
        if src:
            return src, True
    return None, False


def trim_white(img, threshold=12):
    # Some exports carry a flat white band along an edge; trim it so the grid crops cleanly.
    rgb = img.convert('RGB')
    diff = ImageChops.difference(rgb, Image.new('RGB', rgb.size, '#ffffff'))
    diff = diff.convert('L').point(lambda v: 255 if v > threshold else 0)
    box = diff.getbbox()
    return img.crop(box) if box else img


def convert(name, sub, max_edge):
    src, bw = resolve(name)
    out = os.path.join(REPO, 'photos', sub, name + '.webp')
    if not src:
        return 'skip' if os.path.exists(out) else 'missing'
    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
        return 'skip'
    os.makedirs(os.path.dirname(out), exist_ok=True)
    img = ImageOps.exif_transpose(Image.open(src))
    if sub == 'web/thumbs':
        img = trim_white(img)
    if bw:
        img = ImageOps.grayscale(img)
    if img.mode not in ('RGB', 'L'):
        img = img.convert('RGB')
    img.thumbnail((max_edge, max_edge), Image.LANCZOS)   # fit inside, never enlarge
    img.save(out, 'WEBP', quality=80, method=4)
    print('converted', os.path.relpath(out, REPO))
    return 'ok'


jobs = [(n, 'web', 2000) for n in gallery] + [(n, 'web', 1500) for n in page_large] + [(n, 'web/thumbs', 1200) for n in thumbs]
stats = {'ok': 0, 'skip': 0, 'missing': 0}
for n, sub, mx in jobs:
    stats[convert(n, sub, mx)] += 1
print(f"converted {stats['ok']}, already up to date {stats['skip']}, no original and no copy {stats['missing']}")
print('Remember: main.js should reference photos/web/... .webp and index.html photos/web/thumbs/... .webp')
