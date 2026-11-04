import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Check, ArrowRight, Layers, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: "Product Brands & Compatible Tooling Systems | MAMTA Tools",
  description: "Discover MAMTA Tools proprietary product lines and compatible insert brands. We supply ISO-compatible cutters for Sandvik, Kennametal, Korloy, Kyocera, and Mitsubishi geometries.",
  keywords: [
    "cutting tool brands",
    "ISO insert compatibility",
    "Sandvik compatible cutters",
    "Kennametal insert holders",
    "Korloy compatible U-drills",
    "Mamta Tools brand"
  ]
};

export default function ProductBrandsPage() {
  const proprietaryBrands = [
    { name: "MT-Mill™", desc: "Heavy-duty 45° and 90° indexable face mills and shoulder cutters engineered with vibration-damping pocket geometries." },
    { name: "MT-Feed™", desc: "High-feed milling cutters designed for rapid cavity roughing in die & mold and aerospace titanium machining." },
    { name: "MT-Drill™", desc: "Indexable insert U-drills and core drills featuring helical internal coolant channels from 2D to 5D depths." },
    { name: "MT-Bore™", desc: "Micron-adjustable vernier finish boring units and twin-cutter rough boring heads delivering IT6 bore precision." },
    { name: "MT-Lock™", desc: "Modular screw-fit cutting heads and anti-vibration solid carbide shanks for deep overhang milling up to 8xD." },
  ];

  const compatibleInsertBrands = [
    { brand: "Sandvik Coromant®", compatibility: "R390, R245, 880-style U-drills, CoroMill geometries" },
    { brand: "Kennametal®", compatibility: "KSSM, Mill 4-11/15, DFT style drills, HP inserts" },
    { brand: "Korloy®", compatibility: "APMT, APKT, TPMR, SPMG, WCMX U-drill inserts" },
    { brand: "Kyocera®", compatibility: "MFPN, MEC series, CA series CVD coated turning inserts" },
    { brand: "Mitsubishi Materials®", compatibility: "AJX high feed, VP15TF, MVX style drills" },
    { brand: "TaeguTec®", compatibility: "ChaseMill, TopDrill, DrillRush compatible pockets" },
  ];

  return (
    <div className="w-full">
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Tooling Ecosystem
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Proprietary Brands & Global Compatibility
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              MAMTA Tools develops proprietary cutting tool lines engineered in Pune, while strictly maintaining ISO dimensional compatibility with the world&apos;s leading carbide insert brands.
            </p>
          </div>
        </div>
      </section>

      {/* Proprietary Brands */}
      <section className="py-16 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Engineered In Pune
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              MAMTA Tools Proprietary Product Series
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proprietaryBrands.map((b, idx) => (
              <div key={idx} className="bg-steel-50 p-6 rounded-xl border border-steel-200 hover:border-brand-orange transition-all">
                <span className="text-lg font-black text-navy-900 font-heading block">{b.name}</span>
                <p className="text-xs text-steel-600 mt-2 leading-relaxed">{b.desc}</p>
                <div className="pt-4 mt-3 border-t border-steel-200 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> ISO Standard Pocket
                  </span>
                  <Link href="/products" className="text-brand-orange font-bold hover:underline">
                    View Tools &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Brand Compatibility */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Interchangeable Economics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              Universal Insert Geometry Compatibility
            </h2>
            <p className="text-xs sm:text-sm text-steel-600 mt-2">
              Our indexable cutter bodies accept standard ISO carbide inserts. Machine shops can use their existing inventory of inserts without expensive tooling lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compatibleInsertBrands.map((c, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-navy-900">{c.brand}</h3>
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-xs text-steel-500 font-medium">Compatible Insert Geometries:</div>
                <p className="text-xs font-mono text-brand-orange bg-steel-50 p-2.5 rounded border border-steel-200">
                  {c.compatibility}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-navy-900 text-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Need a Cross-Reference or Conversion Guide?</h3>
              <p className="text-xs text-steel-300 mt-1">Our application engineers will cross-reference your current tool codes to MAMTA equivalents.</p>
            </div>
            <Link
              href="/request-a-quote"
              className="px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg shadow whitespace-nowrap"
            >
              Request Cross-Reference
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

