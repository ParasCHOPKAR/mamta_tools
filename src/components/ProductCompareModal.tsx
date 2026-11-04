'use client';

import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { Product } from '@/data/siteData';
import Link from 'next/link';

interface ProductCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRemoveProduct: (id: string) => void;
  onOpenEnquiry: (product: Product) => void;
}

export default function ProductCompareModal({
  isOpen,
  onClose,
  products,
  onRemoveProduct,
  onOpenEnquiry,
}: ProductCompareModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl border border-steel-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-navy-900 px-6 py-4 flex items-center justify-between border-b border-navy-800 flex-shrink-0">
          <div>
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
              Tool Engineering Matrix
            </span>
            <h3 className="text-lg font-bold text-white">Compare Precision Cutting Tools</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-steel-400 hover:text-white hover:bg-navy-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table */}
        <div className="overflow-x-auto p-6 flex-1">
          {products.length === 0 ? (
            <div className="text-center py-12 text-steel-500">
              <p className="text-base font-semibold">No tools selected for comparison yet.</p>
              <p className="text-xs text-steel-400 mt-1">
                Click the &ldquo;Compare&rdquo; button on any product card in the catalog to add up to 3 tools.
              </p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-steel-200">
                  <th className="py-3 px-4 text-xs font-bold text-navy-900 bg-steel-50 w-1/4">
                    Specification
                  </th>
                  {products.map((p) => (
                    <th key={p.id} className="py-3 px-4 text-xs font-bold text-navy-900 bg-white">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-semibold text-brand-orange text-[11px] uppercase tracking-wider">
                          {p.modelNumber}
                        </span>
                        <button
                          onClick={() => onRemoveProduct(p.id)}
                          className="text-steel-400 hover:text-red-500 text-xs"
                          title="Remove from comparison"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="text-sm font-bold text-navy-900 line-clamp-2">{p.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-100 text-xs text-steel-700">
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-navy-900 bg-steel-50">Category</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-2.5 px-4">{p.categoryName}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-navy-900 bg-steel-50">In-House Manufacturing</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-2.5 px-4">
                      {p.isInHouse ? (
                        <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                          <Check className="w-3.5 h-3.5" /> Pune Plant
                        </span>
                      ) : (
                        <span className="text-steel-500">Global Standard</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-navy-900 bg-steel-50">Diameter Range</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-2.5 px-4 font-medium">{p.specs.diameterRange}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-navy-900 bg-steel-50">Depth of Cut / Length</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-2.5 px-4">{p.specs.cuttingDepth}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-navy-900 bg-steel-50">Insert Geometry</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-2.5 px-4 font-semibold text-brand-orange">{p.specs.insertType}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-navy-900 bg-steel-50">Shank / Mounting</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-2.5 px-4">{p.specs.shankType}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-navy-900 bg-steel-50">Coolant Capability</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-2.5 px-4 text-precision-600">{p.specs.coolantType}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-navy-900 bg-steel-50">Max RPM</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-2.5 px-4">{p.specs.maxRpm}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-navy-900 bg-steel-50">Runout / Tolerance</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-2.5 px-4 font-mono text-emerald-700">{p.specs.tolerance}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-navy-900 bg-steel-50">Actions</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-3 px-4 space-y-2">
                      <button
                        onClick={() => {
                          onClose();
                          onOpenEnquiry(p);
                        }}
                        className="w-full py-1.5 px-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded font-semibold text-xs shadow-sm transition-all"
                      >
                        Enquire This Tool
                      </button>
                      <Link
                        href={`/products/${p.slug}`}
                        onClick={onClose}
                        className="w-full inline-flex items-center justify-center gap-1 text-xs text-navy-900 font-medium hover:text-brand-orange"
                      >
                        Full Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="bg-steel-50 px-6 py-3 border-t border-steel-200 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-steel-500">
            Comparing {products.length} of max 3 products
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-steel-200 hover:bg-steel-300 text-steel-800 text-xs font-semibold rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

