import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/siteData';
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import ProductDetailClient from './ProductDetailClient';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} | Model: ${product.modelNumber} | MAMTA Tools Pune`,
    description: product.shortDescription,
    keywords: [
      product.name,
      product.modelNumber,
      product.categoryName,
      product.specs.insertType,
      "cutting tools manufacturer India",
      "precision CNC machining tools",
      "MAMTA Tools"
    ],
    openGraph: {
      title: `${product.name} (${product.modelNumber}) | MAMTA Tools`,
      description: product.shortDescription,
      images: [product.image],
    },
    alternates: {
      canonical: `https://www.mamtatools.net/products/${product.slug}`,
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.mamtatools.net' },
    { name: 'Products', url: 'https://www.mamtatools.net/products' },
    { name: product.categoryName, url: `https://www.mamtatools.net/products/category/${product.categorySlug}` },
    { name: product.name, url: `https://www.mamtatools.net/products/${product.slug}` },
  ];

  return (
    <>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ProductDetailClient product={product} />
    </>
  );
}

