'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, Filter, SlidersHorizontal, Send, 
  ExternalLink, Check, ArrowRight, X, Sparkles, Download 
} from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS, Product } from '@/data/siteData';
import QuickEnquiryModal from '@/components/QuickEnquiryModal';
import ProductCompareModal from '@/components/ProductCompareModal';
import CatalogDownloadModal from '@/components/CatalogDownloadModal';

export default function ProductsCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inHouseOnly, setInHouseOnly] = useState<boolean>(false);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState<boolean>(false);
  
  // Compare state
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [compareModalOpen, setCompareModalOpen] = useState<boolean>(false);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      const matchCategory = selectedCategory === 'all' || prod.categorySlug === selectedCategory;
      const matchInHouse = !inHouseOnly || prod.isInHouse;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = !query || 
        prod.name.toLowerCase().includes(query) ||
        prod.modelNumber.toLowerCase().includes(query) ||
        prod.categoryName.toLowerCase().includes(query) ||
        prod.shortDescription.toLowerCase().includes(query) ||
        prod.specs.insertType.toLowerCase().includes(query);

      return matchCategory && matchInHouse && matchQuery;
    });
  }, [selectedCategory, searchQuery, inHouseOnly]);

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
      {/* Search & Category Filter Toolbar */}
      <div className="bg-white border-b border-steel-200 sticky top-16 z-30 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-steel-400" />
              <input
                type="text"
                placeholder="Search by tool name, model (e.g. MT-FM45), or insert code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange bg-steel-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-400 hover:text-steel-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Filter Toggles */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1 md:pb-0">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-navy-900 bg-steel-100 hover:bg-steel-200 px-3 py-2 rounded-lg transition-colors whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={inHouseOnly}
                  onChange={(e) => setInHouseOnly(e.target.checked)}
                  className="rounded text-brand-orange focus:ring-brand-orange"
                />
                <span>Pune In-House Only</span>
              </label>

              <button
                onClick={() => setCatalogModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold rounded-lg whitespace-nowrap transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-brand-orange" />
                <span>PDF Catalog</span>
              </button>
            </div>
          </div>

          {/* Category Pills Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1 no-scrollbar text-xs font-medium">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-navy-900 text-white font-bold'
                  : 'bg-steel-100 text-steel-700 hover:bg-steel-200'
              }`}
            >
              All Tools ({PRODUCTS.length})
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat.slug
                    ? 'bg-brand-orange text-white font-bold shadow'
                    : 'bg-steel-100 text-steel-700 hover:bg-steel-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Catalog Grid */}
      <section className="py-12 bg-steel-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs text-steel-600 font-medium">
              Showing <strong className="text-navy-900">{filteredProducts.length}</strong> precision cutting tools
            </span>

            {compareList.length > 0 && (
              <button
                onClick={() => setCompareModalOpen(true)}
                className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                View Comparison ({compareList.length})
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-xl border border-steel-200 p-12 text-center max-w-md mx-auto">
              <Search className="w-10 h-10 text-steel-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-navy-900">No matching tools found</h3>
              <p className="text-xs text-steel-500 mt-1">
                Try clearing your search query or switching categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setInHouseOnly(false);
                }}
                className="mt-4 px-4 py-2 bg-navy-900 text-white text-xs font-semibold rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const isCompared = compareList.some((c) => c.id === product.id);

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl border border-steel-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Preview & Badges */}
                      <div className="relative h-52 bg-steel-100 p-4 border-b border-steel-200 flex items-center justify-center">
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

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-2">
                          <Link
                            href={`/products/category/${product.categorySlug}`}
                            className="text-[11px] font-bold text-brand-orange uppercase tracking-wider hover:underline truncate"
                          >
                            {product.categoryName}
                          </Link>
                          {product.price && (
                            <span className="text-[11px] font-black text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 whitespace-nowrap">
                              {product.price}
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-bold text-navy-900 mt-1 leading-snug">
                          <Link href={`/products/${product.slug}`} className="hover:text-brand-orange transition-colors">
                            {product.name}
                          </Link>
                        </h3>

                        <p className="text-xs text-steel-500 mt-2 line-clamp-2 leading-relaxed">
                          {product.shortDescription}
                        </p>

                        {/* Specs Grid */}
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
                            <span className="text-steel-500">Mount / Shank:</span>
                            <span className="text-steel-700">{product.specs.shankType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-steel-500">Tolerance:</span>
                            <span className="font-mono text-emerald-700">{product.specs.tolerance}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
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
                        title="Compare Tool Specifications"
                      >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span className="hidden sm:inline">{isCompared ? 'Added' : 'Compare'}</span>
                      </button>
                      <Link
                        href={`/products/${product.slug}`}
                        className="p-2 rounded-lg bg-steel-100 hover:bg-steel-200 text-navy-900"
                        title="View Full Technical Details"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

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

      <CatalogDownloadModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
      />
    </div>
  );
}

