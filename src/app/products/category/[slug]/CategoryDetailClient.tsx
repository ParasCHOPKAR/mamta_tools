'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Check, Send, SlidersHorizontal, 
  ExternalLink, Download, FileText, ChevronRight 
} from 'lucide-react';
import { ProductCategory, Product } from '@/data/siteData';
import QuickEnquiryModal from '@/components/QuickEnquiryModal';
import CatalogDownloadModal from '@/components/CatalogDownloadModal';
import ProductCompareModal from '@/components/ProductCompareModal';

interface CategoryDetailClientProps {
  category: ProductCategory;
  products: Product[];
}

export default function CategoryDetailClient({
  category,
  products,
}: CategoryDetailClientProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  const toggleCompare = (prod: Product) => {
    if (compareList.some((c) => c.id === prod.id)) {
      setCompareList(compareList.filter((c) => c.id !== prod.id));
    } else {
      if (compareList.length >= 3) {
        alert("Maximum 3 tools can be compared at once.");
        return;
      }
      setCompareList([...compareList, prod]);
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumb Bar */}
      <div className="bg-steel-100 py-2.5 px-4 sm:px-6 border-b border-steel-200 text-xs text-steel-600">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-navy-900">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-steel-400" />
          <Link href="/products" className="hover:text-navy-900">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-steel-400" />
          <span className="font-semibold text-navy-900">{category.name}</span>
        </div>
      </div>

      {/* Category Hero */}
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
                Precision Tool Category
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
                {category.name}
              </h1>
              <p className="text-base text-steel-300 leading-relaxed max-w-2xl">
                {category.headline}
              </p>
              <p className="text-xs sm:text-sm text-steel-400 leading-relaxed max-w-2xl">
                {category.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedProduct(products[0] || null);
                    setEnquiryModalOpen(true);
                  }}
                  className="px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg shadow transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Quick RFQ For This Category
                </button>
                <button
                  onClick={() => setCatalogModalOpen(true)}
                  className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold rounded-lg border border-steel-700 transition-all flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-brand-orange" />
                  Download Category Catalog
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs bg-navy-900 p-4 rounded-xl border border-navy-800 shadow-xl">
                <div className="h-56 bg-steel-100 rounded-lg p-3 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-3 text-center text-xs text-steel-400">
                  Sub-micron concentricity &lt; 0.005mm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Engineering Features & Target Applications */}
      <section className="py-12 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-steel-50 p-6 rounded-xl border border-steel-200 space-y-3">
              <h3 className="text-base font-bold text-navy-900 uppercase tracking-wider text-xs border-b border-steel-200 pb-2">
                Key Engineering Advantages
              </h3>
              <ul className="space-y-2 text-xs text-steel-700">
                {category.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-steel-50 p-6 rounded-xl border border-steel-200 space-y-3">
              <h3 className="text-base font-bold text-navy-900 uppercase tracking-wider text-xs border-b border-steel-200 pb-2">
                Typical Industrial Applications
              </h3>
              <ul className="space-y-2 text-xs text-steel-700">
                {category.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 flex-shrink-0"></span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Available Models in this Category */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900 font-heading">
                Available Models & Technical Specifications
              </h2>
              <p className="text-xs text-steel-500 mt-1">
                Standard tool bodies available ex-stock; customized dimensions manufactured to drawing.
              </p>
            </div>
            {compareList.length > 0 && (
              <button
                onClick={() => setCompareModalOpen(true)}
                className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Compare ({compareList.length}) Tools
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const isCompared = compareList.some((c) => c.id === product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-steel-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 bg-steel-100 p-4 border-b border-steel-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                      {product.isInHouse ? (
                        <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          PUNE IN-HOUSE
                        </div>
                      ) : (
                        <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          {product.brand || 'DISTRIBUTED'}
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-navy-900 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        {product.modelNumber}
                      </div>
                      {product.images && product.images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-navy-900/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
                          {product.images.length} Photos
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-bold text-steel-500 uppercase tracking-wider">
                          Model: {product.modelNumber}
                        </span>
                        {product.price && (
                          <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 whitespace-nowrap">
                            {product.price}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-navy-900 leading-snug">
                        <Link href={`/products/${product.slug}`} className="hover:text-brand-orange">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-steel-500 mt-2 line-clamp-2">
                        {product.shortDescription}
                      </p>

                      <div className="mt-4 bg-steel-50 rounded-lg p-3 border border-steel-100 text-xs space-y-1.5">
                        <div className="flex justify-between">
                          <span className="text-steel-500">Diameter:</span>
                          <span className="font-semibold text-navy-900">{product.specs.diameterRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-steel-500">Insert Type:</span>
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

                  <div className="px-5 pb-5 pt-2 flex items-center gap-2 border-t border-steel-100">
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setEnquiryModalOpen(true);
                      }}
                      className="flex-1 py-2 px-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Quick RFQ
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

      {/* Modals */}
      <QuickEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        productName={selectedProduct?.name || category.name}
        modelNumber={selectedProduct?.modelNumber || category.id}
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

      <CatalogDownloadModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        catalogueTitle={`${category.name} Technical Catalog`}
      />
    </div>
  );
}

