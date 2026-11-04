import React from 'react';
import { COMPANY_INFO, Product, FAQItem } from '@/data/siteData';

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": COMPANY_INFO.name,
    "legalName": COMPANY_INFO.legalName,
    "url": "https://www.mamtatools.net",
    "logo": "https://www.mamtatools.net/images/logo.png",
    "foundingDate": "2004",
    "founder": {
      "@type": "Person",
      "name": COMPANY_INFO.founder
    },
    "description": "Manufacturer and global exporter of high-precision CNC cutting tools, face milling cutters, indexable end mills, U-drills, and micro-vernier boring tools.",
    "telephone": COMPANY_INFO.phonePrimary,
    "email": COMPANY_INFO.emailSales,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.factoryAddress.street,
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411062",
      "addressCountry": "IN"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "ISO 9001:2015 Certified by TUV Austria"
    },
    "areaServed": [
      "India", "United States", "Germany", "United Kingdom", "United Arab Emirates", 
      "Saudi Arabia", "South Africa", "Indonesia", "Thailand", "Malaysia", "Italy"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/mamta-tools",
      "https://www.indiamart.com/mamtatools/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  const priceNum = product.price ? product.price.replace(/[^0-9]/g, '') : null;
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images && product.images.length > 0
      ? product.images.map((img) => `https://www.mamtatools.net${img}`)
      : [`https://www.mamtatools.net${product.image}`],
    "description": product.shortDescription,
    "sku": product.modelNumber,
    "mpn": product.modelNumber,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "MAMTA Tools"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "MAMTA Tools"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.mamtatools.net/products/${product.slug}`,
      "priceCurrency": "INR",
      "price": priceNum || "Contact for Quote",
      "priceValidUntil": "2028-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "MAMTA Tools"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

