import React from 'react';
import type { Metadata } from 'next';
import ProductsCatalogClient from './ProductsCatalogClient';

export const metadata: Metadata = {
  title: "Precision Cutting Tools Catalog | Face Mills, End Mills, U-Drills Pune India",
  description: "Browse the complete MAMTA Tools industrial cutting tools catalog. High performance 45° face mills, 90° shoulder end mills, indexable U-drills, micro boring units, and carbide inserts.",
  keywords: [
    "industrial cutting tools catalog",
    "indexable milling cutters India",
    "U-drill catalog Pune",
    "precision boring units",
    "carbide milling inserts",
    "modular tooling shanks",
    "Mamta Tools catalog"
  ]
};

export default function ProductsPage() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
            Industrial Tooling Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-heading">
            CNC Precision Cutting Tools Catalog
          </h1>
          <p className="text-sm text-steel-300 mt-2 max-w-2xl">
            Filter by tool category, machine spindle interface, or search by model number. Request instantaneous quotes or compare parameters side-by-side.
          </p>
        </div>
      </section>

      {/* Interactive Catalog Client */}
      <ProductsCatalogClient />
    </div>
  );
}

