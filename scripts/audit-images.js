const fs = require('fs');
const path = require('path');

const imageRegexes = [
  /src=["'](\/[^"']+\.(png|jpe?g|svg|webp|gif))["']/gi,
  /image:\s*["'](\/[^"']+\.(png|jpe?g|svg|webp|gif))["']/gi,
  /url\(["']?(\/[^"')]+\.(png|jpe?g|svg|webp|gif))["']?\)/gi,
  /href=["'](\/[^"']+\.(png|jpe?g|svg|webp|gif))["']/gi,
  /["'](\/images\/[^"']+\.(png|jpe?g|svg|webp|gif))["']/gi
];

const foundImages = new Set();

function crawlSrc(dir) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      crawlSrc(full);
    } else if (/\.(tsx|ts|jsx|js|css)$/.test(item)) {
      const code = fs.readFileSync(full, 'utf8');
      for (const regex of imageRegexes) {
        let match;
        while ((match = regex.exec(code)) !== null) {
          foundImages.add(match[1]);
        }
      }
    }
  }
}

crawlSrc('src');

console.log('Total unique images referenced:', foundImages.size);
let missing = 0;
for (const imgPath of foundImages) {
  const diskPath = path.join('public', imgPath.replace(/^\//, ''));
  if (!fs.existsSync(diskPath)) {
    console.log('MISSING IMAGE:', imgPath, '->', diskPath);
    missing++;
  }
}
console.log('Total missing images:', missing);
