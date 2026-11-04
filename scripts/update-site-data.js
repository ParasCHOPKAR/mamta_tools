const fs = require('fs');

const origSiteData = fs.readFileSync('src/data/siteData.ts', 'utf-8');
const categories = JSON.parse(fs.readFileSync('scripts/formatted_categories.json', 'utf-8'));
const products = JSON.parse(fs.readFileSync('scripts/formatted_products.json', 'utf-8'));

// Update Product interface
let updated = origSiteData;

const interfaceTarget = `export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  modelNumber: string;
  shortDescription: string;
  fullDescription: string;
  isInHouse: boolean;
  image: string;
  specs: {
    diameterRange: string;
    cuttingDepth: string;
    numberOfInserts: string;
    insertType: string;
    shankType: string;
    clampingType: string;
    coolantType: string;
    maxRpm: string;
    tolerance: string;
  };
  applications: string[];
  materialsSupported: string[];
  features: string[];
  drawingUrl?: string;
}`;

const newInterface = `export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  modelNumber: string;
  shortDescription: string;
  fullDescription: string;
  isInHouse: boolean;
  image: string;
  images?: string[];
  price?: string;
  brand?: string;
  specs: {
    diameterRange: string;
    cuttingDepth: string;
    numberOfInserts: string;
    insertType: string;
    shankType: string;
    clampingType: string;
    coolantType: string;
    maxRpm: string;
    tolerance: string;
  };
  specsTable?: Record<string, string>;
  applications: string[];
  materialsSupported: string[];
  features: string[];
  drawingUrl?: string;
}`;

if (updated.includes(interfaceTarget)) {
  updated = updated.replace(interfaceTarget, newInterface);
} else {
  console.log('Could not find exact interface target, checking alternative');
}

// Find start of PRODUCT_CATEGORIES and start of INDUSTRIES
const catStart = updated.indexOf('export const PRODUCT_CATEGORIES: ProductCategory[] = [');
const indStart = updated.indexOf('export const INDUSTRIES: Industry[] = [');

if (catStart === -1 || indStart === -1) {
  throw new Error(`Could not locate sections: catStart=${catStart}, indStart=${indStart}`);
}

const beforeCategories = updated.substring(0, catStart);
const afterProducts = updated.substring(indStart);

const categoriesCode = `export const PRODUCT_CATEGORIES: ProductCategory[] = ${JSON.stringify(categories, null, 2)};\n\n`;
const productsCode = `export const PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};\n\n`;

const finalSiteData = beforeCategories + categoriesCode + productsCode + afterProducts;

fs.writeFileSync('src/data/siteData.ts', finalSiteData);
console.log('src/data/siteData.ts updated successfully!');

