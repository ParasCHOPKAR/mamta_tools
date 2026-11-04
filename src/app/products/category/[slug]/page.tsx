import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/data/siteData';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import CategoryDetailClient from './CategoryDetailClient';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category.name} Manufacturer & Exporter India | MAMTA Tools`,
    description: category.metaDescription,
    keywords: [
      category.name,
      `${category.name} Pune`,
      `${category.name} exporter`,
      "industrial cutting tools India",
      "CNC milling cutters",
      "ISO 9001 certified tooling"
    ],
    openGraph: {
      title: `${category.name} | MAMTA Tools Pune India`,
      description: category.metaDescription,
      images: [category.image],
    },
    alternates: {
      canonical: `https://www.mamtatools.net/products/category/${category.slug}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) {
    notFound();
  }

  // Filter products belonging to this category, or include top products if sample
  let products = PRODUCTS.filter((p) => p.categorySlug === category.slug);
  if (products.length === 0) {
    products = PRODUCTS.slice(0, 3);
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.mamtatools.net' },
    { name: 'Products', url: 'https://www.mamtatools.net/products' },
    { name: category.name, url: `https://www.mamtatools.net/products/category/${category.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <CategoryDetailClient category={category} products={products} />
    </>
  );
}

