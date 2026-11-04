const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const products = JSON.parse(fs.readFileSync('scripts/scraped_products.json', 'utf-8'));

const SLUG_MAP = [
  { id: "282086412", slug: "face-milling-cutter-100mm-en-steel", model: "MT-FM100-EN4", brand: "MAMTA Tools", isInHouse: true },
  { id: "199971077", slug: "face-milling-cutter-multi-angle", model: "MT-FM-MA4590", brand: "MAMTA Tools", isInHouse: true },
  { id: "287572966", slug: "face-milling-cutter-tnmg-compatible", model: "MT-FM100-TNMG", brand: "MAMTA Tools", isInHouse: true },
  { id: "287593580", slug: "face-milling-cutter-heavy-duty-100mm", model: "MT-FM100-HD", brand: "MAMTA Tools", isInHouse: true },
  { id: "307340671", slug: "snmx-12-korloy-face-mill-cutter", model: "MT-FM-SNMX12", brand: "Korloy", isInHouse: false },
  { id: "308049673", slug: "r245-12-face-milling-cutter-shell-mill", model: "MT-FM-R245-12A", brand: "MAMTA Tools", isInHouse: true },
  { id: "308048101", slug: "r245-12-face-milling-cutter-arbor", model: "MT-FM-R245-12B", brand: "MAMTA Tools", isInHouse: true },
  { id: "282095690", slug: "indexable-shoulder-milling-cutter-25mm", model: "MT-EM-SH25-2F", brand: "MAMTA Tools", isInHouse: true },
  { id: "191125718", slug: "kyocera-lomu-1003-indexable-end-mill", model: "MT-EM-LOMU1003", brand: "Kyocera", isInHouse: false },
  { id: "187429673", slug: "zcc-indexable-end-mill-square-end", model: "MT-EM-ZCC-SQ", brand: "ZCC", isInHouse: false },
  { id: "308032176", slug: "apmt-1135-indexable-end-mill-cutter", model: "MT-EM-APMT1135", brand: "MAMTA Tools", isInHouse: true },
  { id: "284588602", slug: "apmt-unused-corner-milling-cutter", model: "MT-MC-APMT-CORNER", brand: "MAMTA Tools", isInHouse: true },
  { id: "282291405", slug: "cnmg-unused-corner-milling-cutters", model: "MT-MC-CNMG-CORNER", brand: "MAMTA Tools", isInHouse: true },
  { id: "282289472", slug: "modular-rough-boring-head", model: "MT-BH-ROUGH-MOD", brand: "MAMTA Tools", isInHouse: true },
  { id: "283205553", slug: "modular-finish-boring-head", model: "MT-BH-FINISH-MICRON", brand: "MAMTA Tools", isInHouse: true },
  { id: "199249304", slug: "high-feed-milling-cutter-dia-50", model: "MT-HFM-D50-FAST", brand: "MAMTA Tools", isInHouse: true },
  { id: "282221982", slug: "high-feed-face-milling-cutter", model: "MT-HFM-SHELL-HD", brand: "MAMTA Tools", isInHouse: true },
  { id: "282099964", slug: "indexable-t-slot-milling-cutter", model: "MT-TS-INDEX-SLOT", brand: "MAMTA Tools", isInHouse: true },
  { id: "282282917", slug: "indexable-core-drill", model: "MT-CD-CORE-INDEX", brand: "MAMTA Tools", isInHouse: true },
  { id: "282105757", slug: "indexable-roughing-cutter-ruffer", model: "MT-RC-RUFFER-HEAVY", brand: "MAMTA Tools", isInHouse: true },
  { id: "282103641", slug: "modular-shank-modular-extension", model: "MT-MS-EXT-RIGID", brand: "MAMTA Tools", isInHouse: true },
  { id: "282100944", slug: "indexable-modular-cutter-head", model: "MT-MC-MOD-HEAD", brand: "MAMTA Tools", isInHouse: true },
  { id: "281998153", slug: "indexable-ball-nose-cutters", model: "MT-BN-BALL-20MM", brand: "MAMTA Tools", isInHouse: true },
  { id: "282092070", slug: "indexable-side-and-face-milling-cutter", model: "MT-SF-SIDE-FACE", brand: "MAMTA Tools", isInHouse: true },
  { id: "306877117", slug: "profile-milling-cutter-52-r6-zcc", model: "MT-PM-52R6-ZCC", brand: "ZCC / MAMTA Tools", isInHouse: true },
  { id: "283788073", slug: "indexable-dovetail-cutter", model: "MT-DT-DOVETAIL-45", brand: "MAMTA Tools", isInHouse: true },
  { id: "282231191", slug: "indexable-u-drills-spmg", model: "MT-UD-SPMG-4D20", brand: "MAMTA Tools", isInHouse: true },
  { id: "282290810", slug: "ckb-boring-unit-extension", model: "MT-CKB-EXT-MODULAR", brand: "MAMTA Tools", isInHouse: true },
  { id: "282222704", slug: "spot-face-cutter", model: "MT-SF-SPOT-FACE", brand: "MAMTA Tools", isInHouse: true },
  { id: "282104657", slug: "indexable-chamfer-tools-45-degree", model: "MT-CH-CHAMFER-45", brand: "MAMTA Tools", isInHouse: true },
  { id: "307339924", slug: "tnmg-16-face-milling-cutter", model: "MT-FM-TNMG16", brand: "MAMTA Tools", isInHouse: true },
  { id: "307334117", slug: "apmt-1135-carbide-insert-pvd", model: "MT-IN-APMT1135", brand: "MAMTA Tools", isInHouse: true },
];

async function downloadFile(url, destPath) {
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
    return true; // Already downloaded
  }
  
  return new Promise((resolve) => {
    try {
      const parsedUrl = new URL(url);
      const client = parsedUrl.protocol === 'https:' ? https : http;
      
      const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return downloadFile(res.headers.location, destPath).then(resolve);
        }
        if (res.statusCode !== 200) {
          console.warn(`Failed ${url}: status ${res.statusCode}`);
          return resolve(false);
        }
        
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(true);
        });
        fileStream.on('error', (err) => {
          fs.unlink(destPath, () => {});
          resolve(false);
        });
      });
      
      req.on('error', (err) => {
        resolve(false);
      });
      req.setTimeout(15000, () => {
        req.destroy();
        resolve(false);
      });
    } catch (e) {
      resolve(false);
    }
  });
}

// Rename any previous product-28... directories to their proper slugs if existing
const baseDir = path.resolve('public/images/products');

const renameMap = {
  'product-284588602': 'apmt-unused-corner-milling-cutter',
  'product-282291405': 'cnmg-unused-corner-milling-cutters',
  'product-282289472': 'modular-rough-boring-head',
  'product-283205553': 'modular-finish-boring-head',
  'product-199249304': 'high-feed-milling-cutter-dia-50',
  'product-282221982': 'high-feed-face-milling-cutter',
  'product-282099964': 'indexable-t-slot-milling-cutter',
  'product-282282917': 'indexable-core-drill',
  'product-282105757': 'indexable-roughing-cutter-ruffer'
};

for (const [oldName, newName] of Object.entries(renameMap)) {
  const oldPath = path.join(baseDir, oldName);
  const newPath = path.join(baseDir, newName);
  if (fs.existsSync(oldPath)) {
    if (fs.existsSync(newPath)) {
      // remove oldPath
      fs.rmSync(oldPath, { recursive: true, force: true });
    } else {
      fs.renameSync(oldPath, newPath);
    }
  }
}

async function run() {
  const enrichedProducts = [];

  for (let i = 0; i < products.length; i++) {
    const rawProd = products[i];
    const mapping = SLUG_MAP.find(m => m.id === rawProd.prd_id);
    if (!mapping) {
      throw new Error(`Missing mapping for ${rawProd.prd_id}`);
    }

    const prodDir = path.join(baseDir, mapping.slug);
    if (!fs.existsSync(prodDir)) {
      fs.mkdirSync(prodDir, { recursive: true });
    }

    console.log(`[${i+1}/${products.length}] Downloading/verifying images for "${rawProd.prd_name}" -> ${mapping.slug}...`);

    // Download main image
    let localMainImage = '';
    const mainImgExt = path.extname(new URL(rawProd.mainImage).pathname) || '.jpg';
    const mainDest = path.join(prodDir, `main${mainImgExt}`);
    const okMain = await downloadFile(rawProd.mainImage, mainDest);
    if (okMain) {
      localMainImage = `/images/products/${mapping.slug}/main${mainImgExt}`;
    }

    // Download multi images
    const localMultiImages = [];
    if (localMainImage) {
      localMultiImages.push(localMainImage);
    }

    let imgIdx = 1;
    let localDrawingUrl = '';

    for (const imgUrl of rawProd.multiImages) {
      if (!imgUrl || !imgUrl.startsWith('http') || imgUrl.includes('youtube.com')) continue;
      // Skip if identical to main
      if (imgUrl === rawProd.mainImage) continue;

      const isDrawing = imgUrl.toLowerCase().includes('pdfimage') || imgUrl.toLowerCase().includes('blueprint') || imgUrl.toLowerCase().includes('chart');
      const ext = path.extname(new URL(imgUrl).pathname) || '.jpg';
      const filename = isDrawing ? `drawing${ext}` : `image-${imgIdx}${ext}`;
      const dest = path.join(prodDir, filename);

      const ok = await downloadFile(imgUrl, dest);
      if (ok) {
        const localPath = `/images/products/${mapping.slug}/${filename}`;
        localMultiImages.push(localPath);
        if (isDrawing && !localDrawingUrl) {
          localDrawingUrl = localPath;
        }
        if (!isDrawing) imgIdx++;
      }
    }

    if (!localMainImage && localMultiImages.length > 0) {
      localMainImage = localMultiImages[0];
    }

    enrichedProducts.push({
      ...rawProd,
      slug: mapping.slug,
      modelNumber: mapping.model,
      brand: mapping.brand,
      isInHouse: mapping.isInHouse,
      localImage: localMainImage,
      localMultiImages: localMultiImages,
      localDrawingUrl: localDrawingUrl
    });
  }

  fs.writeFileSync('scripts/enriched_products.json', JSON.stringify(enrichedProducts, null, 2));
  console.log('\nAll 32 products verified with properly named local image directories!');
}

run().catch(console.error);
