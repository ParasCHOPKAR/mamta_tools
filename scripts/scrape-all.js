const fs = require('fs');

const pages = [
  { slug: 'face-milling-cutter', file: 'face-milling-cutter.html' },
  { slug: 'indexable-shoulder-mill-cutter-endmill-cutter', file: 'indexable-shoulder-mill-cutter-endmill-cutter.html' },
  { slug: 'milling-cutter', file: 'milling-cutter.html' },
  { slug: 'boring-head', file: 'boring-head.html' },
  { slug: 'high-feed-milling-cutter', file: 'high-feed-milling-cutter.html' },
  { slug: 't-slot-cutter', file: 't-slot-cutter.html' },
  { slug: 'core-drills', file: 'core-drills.html' },
  { slug: 'ruffer-cutter', file: 'ruffer-cutter.html' },
  { slug: 'modular-shank', file: 'modular-shank.html' },
  { slug: 'modular-cutter', file: 'modular-cutter.html' },
  { slug: 'ball-nose-cutter', file: 'ball-nose-cutter.html' },
  { slug: 'side-and-face-cutter', file: 'side-and-face-cutter.html' },
  { slug: 'profile-milling-cutter', file: 'profile-milling-cutter.html' },
  { slug: 'dovetail-cutter', file: 'dovetail-cutter.html' },
  { slug: 'u-drill', file: 'u-drill.html' },
  { slug: 'ckb-extension', file: 'ckb-extension.html' },
  { slug: 'spot-face-cutter', file: 'spot-face-cutter.html' },
  { slug: 'champer-cutter', file: 'champer-cutter.html' },
  { slug: 'milling-cutters', file: 'milling-cutters.html' },
  { slug: 'carbide-inserts', file: 'carbide-inserts.html' }
];

async function fetchAndAnalyzeAll() {
  const allProducts = [];
  const seenPrdIds = new Set();

  for (const page of pages) {
    console.log(`Fetching ${page.file}...`);
    const res = await fetch(`https://www.mamtatools.net/${page.file}`);
    const html = await res.text();

    // Parse dataref
    const datarefMatch = html.match(/dataref\d*\s*=\s*eval\((\[.*?\])\);/s);
    if (!datarefMatch) {
      console.log(`No dataref in ${page.file}`);
      continue;
    }

    let rawList = [];
    try {
      rawList = new Function(`return ${datarefMatch[1]}`)();
    } catch (e) {
      console.log(`Eval error in ${page.file}:`, e.message);
      continue;
    }

    // Only primary products on the page (img_id < 1000)
    const primaryItems = rawList.filter(item => item.img_id < 1000);
    console.log(`-> ${page.file}: ${primaryItems.length} primary products`);

    // Find namePlace anchors
    const anchorMatches = [...html.matchAll(/<a id="([^"]+)" class="namePlace ps1"><\/a>/gi)];

    for (let i = 0; i < primaryItems.length; i++) {
      const item = primaryItems[i];
      let block = '';
      let anchor = anchorMatches[i] ? anchorMatches[i][1] : '';

      if (anchorMatches[i]) {
        const start = anchorMatches[i].index;
        const end = (i + 1 < anchorMatches.length) ? anchorMatches[i + 1].index : html.indexOf('Explore More', start);
        block = html.substring(start, end !== -1 ? end : start + 4000);
      }

      // Extract data-bimg and data-multiimg
      const bimg = block.match(/data-bimg="([^"]+)"/i)?.[1] || item.img_path;
      const multi = (block.match(/data-multiimg="([^"]+)"/i)?.[1] || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);

      // Extract paragraphs / text
      const cleanBlock = block.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

      // Extract key features if any
      const featuresMatch = cleanBlock.match(/Key Features:?\s*<\/?[a-z0-9]+[^>]*>([\s\S]*?)<\/(?:ul|ol)>/i);
      let features = [];
      if (featuresMatch) {
        features = [...featuresMatch[1].matchAll(/<li[^>]*>(.*?)<\/li>/gis)]
          .map(m => m[1].replace(/<[^>]+>/g, '').trim())
          .filter(Boolean);
      }

      // Extract applications if any
      const appMatch = cleanBlock.match(/Applications:?\s*<\/?[a-z0-9]+[^>]*>([\s\S]*?)<\/(?:ul|ol)>/i);
      let applications = [];
      if (appMatch) {
        applications = [...appMatch[1].matchAll(/<li[^>]*>(.*?)<\/li>/gis)]
          .map(m => m[1].replace(/<[^>]+>/g, '').trim())
          .filter(Boolean);
      }

      // Extract description paragraphs
      const pMatches = [...cleanBlock.matchAll(/<p[^>]*>(.*?)<\/p>/gis)]
        .map(m => m[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim())
        .filter(t => t.length > 20 && !t.includes('Yes! I am interested') && !t.includes('Request Callback') && !t.includes('Get Best Quote'));

      // Extract table specs from isq_det_form
      const specsObj = {};
      if (item.isq_det_form && Array.isArray(item.isq_det_form)) {
        for (const spec of item.isq_det_form) {
          if (spec.FK_IM_SPEC_MASTER_DESC && spec.SUPPLIER_RESPONSE_DETAIL) {
            specsObj[spec.FK_IM_SPEC_MASTER_DESC] = spec.SUPPLIER_RESPONSE_DETAIL;
          }
        }
      }

      const productObj = {
        prd_id: item.prd_id,
        prd_name: item.prd_name,
        categorySlug: page.slug,
        categoryFile: page.file,
        anchor: anchor,
        price: (item.prd_price || '').replace(/&nbsp;/g, ' '),
        mainImage: bimg,
        multiImages: multi.length > 0 ? multi : [bimg],
        specs: specsObj,
        features: features,
        applications: applications,
        descriptions: pMatches
      };

      allProducts.push(productObj);
    }
  }

  console.log(`\nTotal products collected: ${allProducts.length}`);
  fs.writeFileSync('scripts/scraped_products.json', JSON.stringify(allProducts, null, 2));
  console.log('Saved to scripts/scraped_products.json');
}

fetchAndAnalyzeAll().catch(console.error);

