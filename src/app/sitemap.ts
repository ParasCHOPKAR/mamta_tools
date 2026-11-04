import { MetadataRoute } from 'next';
import { PRODUCT_CATEGORIES, PRODUCTS, BLOG_POSTS } from '@/data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mamtatools.net';
  const currentDate = new Date().toISOString();

  // 16 Core Pages
  const staticPages = [
    '',
    '/about-us',
    '/products',
    '/in-house-products',
    '/brands',
    '/industries',
    '/manufacturing-infrastructure',
    '/quality-assurance',
    '/custom-tooling',
    '/export-global-supply',
    '/technical-resources',
    '/blog',
    '/distributor-enquiry',
    '/request-a-quote',
    '/contact-us',
    '/faqs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route === '/products' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : route === '/products' || route === '/request-a-quote' ? 0.9 : 0.8,
  }));

  // 8 Category Pages
  const categoryPages = PRODUCT_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/products/category/${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Product Detail Pages
  const productPages = PRODUCTS.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Blog Pages
  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...blogPages];
}

