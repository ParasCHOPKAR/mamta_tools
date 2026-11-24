const http = require('http');
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
console.log('Testing', foundImages.size, 'images via HTTP on localhost:3000...');

const imagesList = Array.from(foundImages);
let failed = 0;
let success = 0;

async function testAll() {
  for (const img of imagesList) {
    await new Promise((resolve) => {
      http.get('http://localhost:3000' + encodeURI(img), (res) => {
        if (res.statusCode === 200) {
          success++;
        } else {
          console.error('FAILED HTTP ' + res.statusCode + ' for:', img);
          failed++;
        }
        resolve();
      }).on('error', (err) => {
        console.error('ERROR for:', img, err.message);
        failed++;
        resolve();
      });
    });
  }
  console.log(`HTTP Check Completed: ${success} passed, ${failed} failed.`);
}

testAll();
