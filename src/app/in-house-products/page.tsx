import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle2, Shield, Factory, Award, ArrowRight, 
  Send, SlidersHorizontal, Layers, Check 
} from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: "In-House Products | Pune Manufactured Precision Cutting Tools | MAMTA Tools",
  description: "Explore MAMTA Tools proprietary in-house manufactured cutting tools from our Talawade, Pune plant. Face mills, U-drills, modular shanks, and micro boring units with <0.005mm runout.",
  keywords: [
    "in-house cutting tools Pune",
    "Mamta Tools manufactured cutters",
    "proprietary face mills",
    "high precision U-drills India",
    "boring units manufacturing"
  ]
};

export default function InHouseProductsPage() {
  const inHouseTools = PRODUCTS.filter((p) => p.isInHouse);

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              100% Indian Precision Manufacturing
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Our In-House Cutting Tool Lines
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              Every tool in our in-house line is forged from certified vacuum-hardened alloy tool steel, machined on multi-axis CNC grinders at our Talawade, Pune plant, and verified on coordinate measuring machines before dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* Quality & Manufacturing Differentiators */}
      <section className="py-12 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-steel-50 border border-steel-200">
              <Shield className="w-6 h-6 text-brand-orange mb-2" />
              <div className="text-sm font-bold text-navy-900">Pre-Hardened Tool Steel</div>
              <div className="text-xs text-steel-500 mt-1">Core body hardness HRC 48-52 ensures pocket rigidity.</div>
            </div>
            <div className="p-5 rounded-xl bg-steel-50 border border-steel-200">
              <Award className="w-6 h-6 text-emerald-600 mb-2" />
              <div className="text-sm font-bold text-navy-900">Electroless Nickel Plating</div>
              <div className="text-xs text-steel-500 mt-1">Shields body from rust and hot welding chips.</div>
            </div>
            <div className="p-5 rounded-xl bg-steel-50 border border-steel-200">
              <Factory className="w-6 h-6 text-brand-teal mb-2" />
              <div className="text-sm font-bold text-navy-900">Runout &lt; 0.005mm</div>
              <div className="text-xs text-steel-500 mt-1">Precision ground seat pockets ensure equal insert loading.</div>
            </div>
            <div className="p-5 rounded-xl bg-steel-50 border border-steel-200">
              <Layers className="w-6 h-6 text-brand-blue mb-2" />
              <div className="text-sm font-bold text-navy-900">Direct Factory Pricing</div>
              <div className="text-xs text-steel-500 mt-1">Eliminate middleman margins with direct Pune OEM supply.</div>
            </div>
          </div>
        </div>
      </section>

      {/* In-House Catalog Grid */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 font-heading">
                Proprietary In-House Manufactured Tool Portfolio
              </h2>
              <p className="text-xs text-steel-500 mt-1">
                Standard tool bodies available ex-stock; custom lengths and pockets engineered in 10-14 days.
              </p>
            </div>
            <Link
              href="/request-a-quote"
              className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1"
            >
              Request Custom Batch Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inHouseTools.map((product) => (
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
                    <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      MADE IN PUNE
                    </div>
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

                    <div className="mt-4 bg-steel-50 rounded-lg p-3 border border-steel-100 text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-steel-500">Diameter:</span>
                        <span className="font-semibold text-navy-900">{product.specs.diameterRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-steel-500">Insert Compatibility:</span>
                        <span className="font-mono text-brand-orange font-bold">{product.specs.insertType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-steel-500">Through Coolant:</span>
                        <span className="font-semibold text-precision-600">{product.specs.coolantType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-steel-500">Concentricity:</span>
                        <span className="font-mono text-emerald-700">{product.specs.tolerance}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center gap-2 border-t border-steel-100">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 py-2 px-3 bg-navy-900 hover:bg-navy-800 text-white rounded-lg text-xs font-bold text-center transition-colors"
                  >
                    View Engineering Specs
                  </Link>
                  <Link
                    href="/request-a-quote"
                    className="py-2 px-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg text-xs font-bold text-center transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Pune Factory Callout */}
      <section className="py-14 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need In-House Tools with Custom Dimensions or Machine Interfaces?
          </h2>
          <p className="text-xs sm:text-sm text-steel-300">
            We adapt shanks to BT40, BT50, HSK63A, CAPTO, or straight Weldon configurations with through-tool coolant.
          </p>
          <div className="pt-2">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs rounded-lg shadow transition-all"
            >
              Submit Custom Specification <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

