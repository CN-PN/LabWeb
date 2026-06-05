from PIL import Image
import os

src = os.path.join('Lab','logo.png')
out = os.path.join('Lab','logo_transparent.png')

if not os.path.exists(src):
    print('Source not found:', src)
    raise SystemExit(1)

im = Image.open(src).convert('RGBA')
px = im.load()
width, height = im.size
for y in range(height):
    for x in range(width):
        r,g,b,a = px[x,y]
        # convert near-white background to transparent
        if r>240 and g>240 and b>240:
            px[x,y] = (r,g,b,0)

im.save(out)
print('Wrote', out)
