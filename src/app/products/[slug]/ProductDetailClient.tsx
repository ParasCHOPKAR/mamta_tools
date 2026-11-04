'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, Send, Download, Check, ShieldCheck, 
  Layers, SlidersHorizontal, ArrowRight, FileText, Phone,
  Tag, Sparkles, Eye, CheckCircle2, Factory
} from 'lucide-react';
import { Product, PRODUCTS, COMPANY_INFO } from '@/data/siteData';
import QuickEnquiryModal from '@/components/QuickEnquiryModal';
import CatalogDownloadModal from '@/components/CatalogDownloadModal';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [previewDrawing, setPreviewDrawing] = useState(false);

  const imagesList = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug).slice(0, 3);
  const fallbackRelated = relatedProducts.length > 0 ? relatedProducts : PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="w-full">
      {/* Breadcrumb Bar */}
      <div className="bg-steel-100 py-2.5 px-4 sm:px-6 border-b border-steel-200 text-xs text-steel-600">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-navy-900">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-steel-400" />
          <Link href="/products" className="hover:text-navy-900">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-steel-400" />
          <Link href={`/products/category/${product.categorySlug}`} className="hover:text-navy-900">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-steel-400" />
          <span className="font-semibold text-navy-900 truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* Main Product Overview */}
      <section className="py-12 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Product Technical Imagery & Gallery */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-steel-50 rounded-2xl border border-steel-200 p-6 flex items-center justify-center relative overflow-hidden shadow-sm group">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-72 sm:h-84 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {product.isInHouse ? (
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow flex items-center gap-1">
                    <Factory className="w-3 h-3" /> PUNE IN-HOUSE MANUFACTURED
                  </span>
                ) : (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
                    ORIGINAL {product.brand?.toUpperCase()} LINE
                  </span>
                )}
                <span className="absolute top-4 right-4 bg-navy-900 text-white font-mono text-xs font-bold px-2.5 py-1 rounded shadow">
                  {product.modelNumber}
                </span>
              </div>

              {/* Thumbnails Gallery */}
              {imagesList.length > 1 && (
                <div>
                  <span className="text-[11px] font-bold text-steel-500 uppercase tracking-wider block mb-2">
                    Product Views & Technical Angles ({imagesList.length} Photos)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {imagesList.map((img, idx) => {
                      const isDrawing = img.toLowerCase().includes('drawing') || img.toLowerCase().includes('blueprint');
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedImage(img)}
                          className={`relative w-16 h-16 rounded-lg border-2 p-1 overflow-hidden transition-all bg-white ${
                            selectedImage === img
                              ? 'border-brand-orange ring-2 ring-brand-orange/30 shadow-md scale-105'
                              : 'border-steel-200 hover:border-steel-400 opacity-80 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${product.name} view ${idx + 1}`}
                            className="w-full h-full object-contain"
                          />
                          {isDrawing && (
                            <span className="absolute bottom-0 inset-x-0 bg-navy-900/90 text-white text-[8px] font-bold text-center py-0.5">
                              CAD
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Technical Drawing Callout */}
              {product.drawingUrl ? (
                <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-navy-900 block">Engineering Blueprint & Dimensions</span>
                      <span className="text-steel-600">Schematic drawing attached from production specs</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedImage(product.drawingUrl!)}
                    className="px-3 py-1.5 bg-brand-orange text-white hover:bg-brand-orange-hover text-xs font-bold rounded transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" /> View CAD
                  </button>
                </div>
              ) : (
                <div className="bg-steel-50 p-4 rounded-xl border border-steel-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-navy-900 block">2D / 3D CAD Blueprint Available</span>
                      <span className="text-steel-500">STEP, DXF and PDF files for CAM simulation</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setCatalogModalOpen(true)}
                    className="px-3 py-1.5 bg-steel-200 hover:bg-steel-300 text-navy-900 text-xs font-bold rounded transition-colors whitespace-nowrap"
                  >
                    Download CAD
                  </button>
                </div>
              )}
            </div>

            {/* Right: Technical Specs & Lead Action Form */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
                    {product.categoryName}
                  </span>
                  {product.brand && (
                    <span className="text-xs font-bold text-navy-900 bg-steel-100 px-3 py-1 rounded-full border border-steel-200">
                      Brand: {product.brand}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading leading-tight">
                  {product.name}
                </h1>

                {/* Price Display */}
                {product.price && (
                  <div className="flex items-center gap-3 mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div>
                      <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wide block">
                        Approximate Wholesale Price
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono">
                        {product.price}
                      </span>
                    </div>
                    <span className="ml-auto text-xs bg-emerald-600 text-white font-bold px-2.5 py-1 rounded shadow-sm">
                      Best Factory Rate
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-steel-500">
                  <span>Model: <strong className="text-navy-900 font-mono">{product.modelNumber}</strong></span>
                  <span>•</span>
                  <span>Country of Origin: <strong className="text-navy-900">{product.specsTable?.['Country of Origin'] || 'Made in India'}</strong></span>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Immediate Dispatch / Custom Bore
                  </span>
                </div>
              </div>

              <div className="prose prose-sm text-steel-600 leading-relaxed whitespace-pre-line">
                {product.fullDescription}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setEnquiryModalOpen(true)}
                  className="px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Request Price Quotation & Bulk Discount
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                    `Hello MAMTA Tools, I am interested in ${product.name} (Model: ${product.modelNumber}${product.price ? `, Price: ${product.price}` : ''}). Please share quotation and delivery timeline.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> WhatsApp Technical Team
                </a>
              </div>

              {/* Technical Specifications Table */}
              <div className="pt-4">
                <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-brand-orange" />
                  Technical Specifications & Engineering Parameters
                </h2>
                <div className="border border-steel-200 rounded-xl overflow-hidden text-xs shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-steel-200">
                      <tr className="bg-steel-50">
                        <td className="py-2.5 px-4 font-semibold text-steel-700 w-1/3">Diameter Range / Size</td>
                        <td className="py-2.5 px-4 font-bold text-navy-900">{product.specs.diameterRange}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-steel-700">Flute / Pocket Count</td>
                        <td className="py-2.5 px-4 font-bold text-navy-900">{product.specs.numberOfInserts}</td>
                      </tr>
                      <tr className="bg-steel-50">
                        <td className="py-2.5 px-4 font-semibold text-steel-700">Compatible Insert Geometry</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-brand-orange">{product.specs.insertType}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-steel-700">Cutting Depth / Length</td>
                        <td className="py-2.5 px-4 text-steel-900">{product.specs.cuttingDepth}</td>
                      </tr>
                      <tr className="bg-steel-50">
                        <td className="py-2.5 px-4 font-semibold text-steel-700">Mounting / Shank Type</td>
                        <td className="py-2.5 px-4 text-steel-900">{product.specs.shankType}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-steel-700">Clamping Mechanism</td>
                        <td className="py-2.5 px-4 text-steel-900">{product.specs.clampingType}</td>
                      </tr>
                      <tr className="bg-steel-50">
                        <td className="py-2.5 px-4 font-semibold text-steel-700">Coolant Delivery</td>
                        <td className="py-2.5 px-4 font-semibold text-precision-600">{product.specs.coolantType}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-steel-700">Max Permissible RPM</td>
                        <td className="py-2.5 px-4 text-steel-900">{product.specs.maxRpm}</td>
                      </tr>
                      <tr className="bg-steel-50">
                        <td className="py-2.5 px-4 font-semibold text-steel-700">Runout & Concentricity</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-emerald-700">{product.specs.tolerance}</td>
                      </tr>

                      {/* Dynamic Raw Specs Table from website */}
                      {product.specsTable && Object.entries(product.specsTable).map(([key, val], idx) => {
                        // Skip if already in primary specs
                        return (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-steel-50/50"}>
                            <td className="py-2.5 px-4 font-semibold text-steel-700">{key}</td>
                            <td className="py-2.5 px-4 font-medium text-navy-900">{val}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Applications Grid */}
      <section className="py-14 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-b border-steel-100 pb-2">
                Workpiece Materials Supported
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.materialsSupported.map((mat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-steel-50 rounded-lg border border-steel-100">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="font-semibold text-navy-900">{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-b border-steel-100 pb-2">
                Proven Shop Applications
              </h3>
              <ul className="space-y-2.5 text-xs text-steel-700">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-orange mt-1.5 flex-shrink-0"></span>
                    <span className="font-medium text-navy-900">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-8 bg-white p-6 rounded-xl border border-steel-200 shadow-sm">
            <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-b border-steel-100 pb-2 mb-4">
              Key Engineering Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 bg-steel-50/70 rounded-lg border border-steel-200/60 text-xs">
                  <ShieldCheck className="w-4 h-4 text-precision-600 flex-shrink-0 mt-0.5" />
                  <span className="text-steel-800">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products from Category */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Tool Portfolio
              </span>
              <h2 className="text-2xl font-extrabold text-navy-900 mt-1 font-heading">
                Related Cutting Tools in This Category
              </h2>
            </div>
            <Link
              href={`/products/category/${product.categorySlug}`}
              className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1"
            >
              View All {product.categoryName} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackRelated.map((rel) => (
              <div
                key={rel.id}
                className="bg-white rounded-xl border border-steel-200 p-5 shadow-sm hover:border-brand-orange hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 bg-steel-50 rounded-lg p-3 flex items-center justify-center border border-steel-100 mb-4">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-mono font-bold text-navy-900">{rel.modelNumber}</span>
                    {rel.price && <span className="font-bold text-emerald-700">{rel.price}</span>}
                  </div>
                  <h4 className="text-sm font-bold text-navy-900 hover:text-brand-orange transition-colors">
                    <Link href={`/products/${rel.slug}`}>{rel.name}</Link>
                  </h4>
                  <p className="text-xs text-steel-500 mt-1 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="pt-4 border-t border-steel-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-brand-orange">
                    {rel.specs.insertType}
                  </span>
                  <Link
                    href={`/products/${rel.slug}`}
                    className="text-xs font-bold text-navy-900 hover:text-brand-orange flex items-center gap-1"
                  >
                    Specs <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      <QuickEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        productName={product.name}
        modelNumber={product.modelNumber}
      />
      <CatalogDownloadModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        catalogueTitle={`${product.name} Technical Specifications & CAD`}
      />
    </div>
  );
}
