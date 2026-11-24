'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, Check, SlidersHorizontal, 
  Send, ExternalLink, Sparkles, X, Layers, Filter, CheckCircle2,
  Disc, Target, Gauge, Wrench, ChevronRight, FileText, Cpu
} from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS, Product } from '@/data/siteData';
import QuickEnquiryModal from './QuickEnquiryModal';

type FilterTab = 'all' | 'face-mill' | 'u-drill' | 'boring' | 'shoulder-endmill';

export default function HomeProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const handleOpenEnquiry = (prod: Product) => {
    setSelectedProduct(prod);
    setEnquiryModalOpen(true);
  };

  // Featured In-House cutters
  const inHouseProducts = PRODUCTS.filter((p) => p.isInHouse);
  
  const filteredProducts = inHouseProducts.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'face-mill') return p.categorySlug.includes('face') || p.categorySlug.includes('milling');
    if (activeTab === 'u-drill') return p.categorySlug.includes('drill') || p.slug.includes('drill');
    if (activeTab === 'boring') return p.categorySlug.includes('boring') || p.slug.includes('boring');
    if (activeTab === 'shoulder-endmill') return p.categorySlug.includes('shoulder') || p.categorySlug.includes('end-mill') || p.slug.includes('apmt');
    return true;
  });

  // 8 Core categories for catalog grid
  const coreCategories = [
    { name: 'Milling Cutters', skus: '100+ SKUs', slug: 'face-milling-cutter', icon: Disc },
    { name: 'Boring Tools', skus: '60+ SKUs', slug: 'boring-tools', icon: Gauge },
    { name: 'U-Drills', skus: '40+ SKUs', slug: 'u-drills', icon: Target },
    { name: 'Modular Tools', skus: '50+ SKUs', slug: 'modular-tooling', icon: Layers },
    { name: 'Cartridge & Heads', skus: '35+ SKUs', slug: 'micro-boring-cartridges', icon: Cpu },
    { name: 'Chamfering', skus: '25+ SKUs', slug: 'chamfering-cutters', icon: Wrench },
    { name: 'Special Tools', skus: '40+ SKUs', slug: 'custom-special-tools', icon: Sparkles },
    { name: 'Accessories', skus: '100+ SKUs', slug: 'accessories-spares', icon: SlidersHorizontal }
  ];

  return (
    <section 
      id="products-catalog"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      {/* ========================================================
          PRODUCT-RELATED BACKGROUND: Real Blueprint Schematics
      ======================================================== */}
      {/* 1. Real Indexable U-Drill Blueprint Watermark on Left */}
      <div 
        className="absolute -top-16 -left-12 w-[520px] h-[520px] opacity-[0.06] pointer-events-none select-none hidden md:block"
        style={{
          backgroundImage: `url('/images/products/indexable-u-drills-spmg/drawing.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) grayscale(100%)'
        }}
      />

      {/* 2. Real Shoulder End Mill Blueprint Watermark on Right */}
      <div 
        className="absolute -bottom-16 -right-12 w-[520px] h-[520px] opacity-[0.05] pointer-events-none select-none hidden lg:block"
        style={{
          backgroundImage: `url('/images/products/apmt-1135-indexable-end-mill-cutter/drawing.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) grayscale(100%)'
        }}
      />

      {/* Precision CAD Matrix Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            SECTION HEADER (#4 Badge Matching Master Reference)
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-[#f28c28] text-white flex items-center justify-center text-[11px] font-black">
              4
            </span>
            <span>In-House Lines &amp; Product Categories Catalog</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Comprehensive Indexable Tooling Program
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Manufactured from European certified alloy steel in Pune with precision insert seating and sub-micron runout guarantees.
          </p>
        </div>

        {/* ========================================================
            DUAL-PANEL LAYOUT (Matching Master Mockup Section 4)
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ------------------------------------------------------
              PART A (Left - 7 Cols): In-House Manufactured Cutters
          ------------------------------------------------------ */}
          <div className="lg:col-span-7 bg-[#f8fafc] rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-slate-200/80 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#f28c28] tracking-wider block">
                  Talawade, Pune Facility
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                  A. In-House Manufactured Cutters
                </h3>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === 'all'
                      ? 'bg-[#f28c28] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  All Tools
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('face-mill')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === 'face-mill'
                      ? 'bg-[#f28c28] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Face &amp; High-Feed
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('u-drill')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === 'u-drill'
                      ? 'bg-[#f28c28] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  U-Drills
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('shoulder-endmill')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === 'shoulder-endmill'
                      ? 'bg-[#f28c28] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Shoulder Mills
                </button>
              </div>
            </div>

            {/* Product Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {filteredProducts.slice(0, 3).map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-xl border border-slate-200 hover:border-[#f28c28] p-3.5 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md relative overflow-hidden"
                >
                  {/* Subtle Top Border Laser Pulse on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f28c28] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Tool Image Container */}
                    <div className="relative h-32 bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-lg p-2 mb-3 flex items-center justify-center overflow-hidden border border-slate-100">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute top-1.5 right-1.5 bg-slate-900/90 text-[9px] font-mono text-white px-1.5 py-0.5 rounded">
                        {prod.modelNumber}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#f28c28] transition-colors font-heading line-clamp-1">
                      {prod.name}
                    </h4>

                    <div className="text-[11px] font-mono text-slate-500 mt-1">
                      {prod.specs.diameterRange}
                    </div>
                  </div>

                  {/* Blueprint & Quick RFQ Buttons */}
                  <div className="pt-3 mt-3 border-t border-slate-100 grid grid-cols-2 gap-1.5">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold rounded text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <FileText className="w-3 h-3 text-slate-500" />
                      <span>Blueprint</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleOpenEnquiry(prod)}
                      className="py-1.5 px-2 bg-[#f28c28] hover:bg-[#e07b18] text-white text-[11px] font-bold rounded text-center transition-colors cursor-pointer"
                    >
                      Quick RFQ
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono">
                ISO 9001:2015 Certified Production
              </span>
              <Link
                href="/in-house-products"
                className="font-bold text-[#f28c28] hover:text-[#d97706] inline-flex items-center gap-1"
              >
                <span>View All In-House Manufactured Cutters</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ------------------------------------------------------
              PART B (Right - 5 Cols): Category Catalog (8 Categories)
          ------------------------------------------------------ */}
          <div className="lg:col-span-5 bg-[#f8fafc] rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
            <div className="mb-5 border-b border-slate-200/80 pb-4">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider block">
                Standard &amp; Custom Program
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                B. Category Catalog (8 Core Lines)
              </h3>
            </div>

            {/* 8 Categories Grid (4x2) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
              {coreCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={idx}
                    href={`/products?category=${cat.slug}`}
                    className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-[#f28c28] hover:bg-orange-50/20 transition-all duration-200 flex items-center gap-3 group shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-orange-100 text-slate-700 group-hover:text-[#f28c28] flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#f28c28] transition-colors truncate">
                        {cat.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">
                        {cat.skus}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200/80 text-center">
              <Link
                href="/products"
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 group"
              >
                <span>View All 20 Product Categories</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#f28c28] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Quick Enquiry Modal */}
      {selectedProduct && (
        <QuickEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          productName={selectedProduct.name}
          modelNumber={selectedProduct.modelNumber}
        />
      )}
    </section>
  );
}
