'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, ShieldCheck, Check, Layers, SlidersHorizontal, 
  Send, ExternalLink, Sparkles 
} from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS, Product } from '@/data/siteData';
import QuickEnquiryModal from './QuickEnquiryModal';
import ProductCompareModal from './ProductCompareModal';

export default function HomeProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  
  // Compare state
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  const handleOpenEnquiry = (prod: Product) => {
    setSelectedProduct(prod);
    setEnquiryModalOpen(true);
  };

  const toggleCompare = (prod: Product) => {
    if (compareList.find((p) => p.id === prod.id)) {
      setCompareList(compareList.filter((p) => p.id !== prod.id));
    } else {
      if (compareList.length >= 3) {
        alert("You can compare up to 3 products at a time.");
        return;
      }
      setCompareList([...compareList, prod]);
    }
  };

  return (
    <>
      {/* SECTION 2: FEATURED PRODUCT CATEGORIES */}
      <section className="py-20 bg-steel-50 border-y border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
              Engineered for Extreme Metalworking
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mt-3 font-heading">
              Featured Cutting Tool Categories
            </h2>
            <p className="text-sm md:text-base text-steel-600 mt-3">
              Explore our core catalog of ISO-standard indexable milling cutters, high-speed hole making drills, and sub-micron boring units manufactured in Pune, India.
            </p>
          </div>

          {/* 8 Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.slice(0, 8).map((cat) => (
              <div
                key={cat.id}
                className="group bg-white rounded-xl border border-steel-200 p-5 hover:border-brand-orange hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-44 rounded-lg bg-steel-100/70 overflow-hidden mb-4 border border-steel-200/60 p-2">
                    <img
                      src={cat.image}
                      alt={`${cat.name} by MAMTA Tools`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 right-2 bg-navy-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {cat.productCount}+ SKUs
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-orange transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-steel-500 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-steel-600">
                    {cat.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-4 border-t border-steel-100 flex items-center justify-between">
                  <Link
                    href={`/products/category/${cat.slug}`}
                    className="text-xs font-bold text-navy-900 group-hover:text-brand-orange inline-flex items-center gap-1"
                  >
                    View Specs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => {
                      const sampleProduct = PRODUCTS.find((p) => p.categorySlug === cat.slug) || PRODUCTS[0];
                      handleOpenEnquiry(sampleProduct);
                    }}
                    className="px-2.5 py-1 text-[11px] font-semibold bg-steel-100 hover:bg-brand-orange hover:text-white rounded text-steel-700 transition-colors"
                  >
                    Quick RFQ
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white text-xs md:text-sm font-bold rounded-lg shadow transition-all"
            >
              Browse Complete 80+ Product Catalog <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR IN-HOUSE PRODUCTS SPOTLIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ★ 100% In-House Pune Manufacturing
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mt-3 font-heading">
                Proprietary MAMTA Tools Product Lines
              </h2>
              <p className="text-sm text-steel-600 mt-2 max-w-2xl">
                Manufactured from premium pre-hardened alloy tool steel at our Talawade, Pune plant with runout concentricity controlled within 0.005mm.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/in-house-products"
                className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1"
              >
                Learn About Our In-House Capability <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Product Cards with Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.filter((p) => p.isInHouse).slice(0, 6).map((product) => {
              const isCompared = compareList.some((c) => c.id === product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-steel-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Visual & Badge Header */}
                    <div className="relative h-48 bg-steel-100 p-4 border-b border-steel-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        IN-HOUSE PUNE
                      </div>
                      <div className="absolute top-3 right-3 bg-navy-900 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        {product.modelNumber}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider truncate">
                          {product.categoryName}
                        </span>
                        {product.price && (
                          <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 whitespace-nowrap">
                            {product.price}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-navy-900 mt-1 leading-snug">
                        <Link href={`/products/${product.slug}`} className="hover:text-brand-orange">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-steel-500 mt-2 line-clamp-2">
                        {product.shortDescription}
                      </p>

                      {/* Micro Specs Table */}
                      <div className="mt-4 bg-steel-50 rounded-lg p-3 border border-steel-100 text-xs space-y-1.5">
                        <div className="flex justify-between">
                          <span className="text-steel-500">Diameter Range:</span>
                          <span className="font-semibold text-navy-900">{product.specs.diameterRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-steel-500">Insert Compatibility:</span>
                          <span className="font-semibold text-brand-orange font-mono">{product.specs.insertType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-steel-500">Coolant System:</span>
                          <span className="font-semibold text-precision-600">{product.specs.coolantType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-steel-500">Tolerance:</span>
                          <span className="font-mono text-emerald-700">{product.specs.tolerance}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-5 pb-5 pt-2 flex items-center gap-2 border-t border-steel-100">
                    <button
                      onClick={() => handleOpenEnquiry(product)}
                      className="flex-1 py-2 px-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Quick Enquiry
                    </button>
                    <button
                      onClick={() => toggleCompare(product)}
                      className={`p-2 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1 ${
                        isCompared 
                          ? 'bg-navy-900 text-white border-navy-900' 
                          : 'bg-steel-50 hover:bg-steel-100 text-steel-700 border-steel-300'
                      }`}
                      title="Compare Tool Specs"
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                      <span className="hidden sm:inline">{isCompared ? 'Added' : 'Compare'}</span>
                    </button>
                    <Link
                      href={`/products/${product.slug}`}
                      className="p-2 rounded-lg bg-steel-100 hover:bg-steel-200 text-navy-900"
                      title="View Technical Blueprint"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compare Floating Trigger Pill */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-6 z-40 animate-bounce">
          <button
            onClick={() => setCompareModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-navy-900 text-white font-bold text-xs rounded-full shadow-2xl border-2 border-brand-orange hover:bg-navy-800 transition-all"
          >
            <SlidersHorizontal className="w-4 h-4 text-brand-orange" />
            <span>Compare ({compareList.length}) Tools</span>
          </button>
        </div>
      )}

      {/* Modals */}
      <QuickEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        productName={selectedProduct?.name}
        modelNumber={selectedProduct?.modelNumber}
      />

      <ProductCompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
        products={compareList}
        onRemoveProduct={(id) => setCompareList(compareList.filter((p) => p.id !== id))}
        onOpenEnquiry={(p) => {
          setSelectedProduct(p);
          setEnquiryModalOpen(true);
        }}
      />
    </>
  );
}

