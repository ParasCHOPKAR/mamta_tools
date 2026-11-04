import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Download, FileText, Calculator, HelpCircle, 
  ArrowRight, CheckCircle2, AlertTriangle 
} from 'lucide-react';
import SpeedFeedCalculator from '@/components/SpeedFeedCalculator';

export const metadata: Metadata = {
  title: "Technical Resources & Machining Calculator | MAMTA Tools",
  description: "Free CNC cutting speeds and feeds calculator, ISO material classification chart (P, M, K, N, S, H), downloadable tooling PDF catalogues, and machining troubleshooting guide.",
  keywords: [
    "machining calculator CNC",
    "cutting speed feed calculator",
    "ISO material classification tooling",
    "cutting tools PDF catalogue download",
    "milling troubleshooting guide"
  ]
};

export default function TechnicalResourcesPage() {
  const isoMaterials = [
    { code: "P", name: "Steel", color: "bg-blue-600", desc: "Unalloyed, low-alloy, and high-alloy steels, tool steels, and cast steels. Long-chipping materials requiring robust chipbreakers." },
    { code: "M", name: "Stainless Steel", color: "bg-yellow-500", desc: "Austenitic, ferritic, and martensitic stainless steels. Tends to work-harden and generate built-up edges; requires sharp PVD TiAlN grades." },
    { code: "K", name: "Cast Iron", color: "bg-red-600", desc: "Grey cast iron, ductile/nodular iron (SG), and compacted graphite iron. Abrasive short-chipping materials suited for tough CVD coated grades." },
    { code: "N", name: "Non-Ferrous", color: "bg-emerald-500", desc: "Aluminium alloys, brass, bronze, copper. Demands mirror polished insert rakes and ultra-sharp uncoated or DLC coated edges." },
    { code: "S", name: "Superalloys & Titanium", color: "bg-amber-600", desc: "Inconel, Waspaloy, Hastelloy, Titanium alloys. Low thermal conductivity requires abundant high-pressure through-coolant." },
    { code: "H", name: "Hardened Steel", color: "bg-slate-700", desc: "Steels hardened from 45 to 65 HRC. Demands extreme rigid tool clamping, negative rakes, and CBN or nano-composite carbide grades." },
  ];

  const troubles = [
    { symptom: "Tool Chatter / Harmonic Vibration", cause: "Excessive tool overhang, weak fixture, or high radial cutting resistance.", remedy: "Switch to solid carbide modular shank, reduce corner radius (e.g. 0.8mm to 0.4mm), or switch to high-feed milling geometry." },
    { symptom: "Insert Flank Wear / Chipping", cause: "Cutting speed (Vc) too high or insufficient coolant causing thermal cycles.", remedy: "Reduce cutting velocity by 15-20%, inspect through-coolant pressure, and check for workpiece surface scale." },
    { symptom: "Built-up Edge (BUE)", cause: "Cutting temperature too low causing gummy chips to pressure-weld to insert rake.", remedy: "Increase cutting velocity (Vc), switch to positive ground insert geometry, or use high lubricity PVD AlCrN coating." },
    { symptom: "Hole Wandering / Runout in U-Drilling", cause: "Spindle misalignment, feed rate too low, or inadequate coolant bar pressure.", remedy: "Ensure spindle alignment within 0.03mm, increase feed to maintain cutting pressure, and confirm minimum 10-15 bar coolant." },
  ];

  return (
    <div className="w-full">
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Machining Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Technical Resources & Machining Calculator
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              Engineering reference materials, interactive speed/feed calculation tools, ISO workpiece guidelines, and downloadable product documentation for CNC programmers and tooling engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Speed & Feed Calculator */}
      <section className="py-16 bg-steel-100 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              CNC Formulas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1 font-heading">
              Calculate Optimum Cutting Parameters
            </h2>
          </div>

          <SpeedFeedCalculator />
        </div>
      </section>

      {/* ISO Material Classification Table */}
      <section className="py-16 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Material Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              ISO Workpiece Material Classification (P, M, K, N, S, H)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isoMaterials.map((mat) => (
              <div key={mat.code} className="bg-steel-50 p-6 rounded-xl border border-steel-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${mat.color} text-white flex items-center justify-center font-bold text-sm shadow`}>
                    {mat.code}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-900">ISO {mat.code}: {mat.name}</h3>
                  </div>
                </div>
                <p className="text-xs text-steel-600 leading-relaxed">{mat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machining Troubleshooting Guide */}
      <section className="py-16 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Troubleshooting Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              CNC Tooling Problem & Resolution Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {troubles.map((tr, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  <h3 className="text-sm font-bold text-navy-900">{tr.symptom}</h3>
                </div>
                <div className="text-xs text-steel-500">
                  <strong>Probable Cause:</strong> {tr.cause}
                </div>
                <div className="text-xs text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                  <strong>Recommended Remedy:</strong> {tr.remedy}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable PDF Catalogues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
              PDF Downloads
            </span>
            <h2 className="text-2xl font-extrabold text-navy-900 mt-2 font-heading">
              Engineering Catalogues & Brochures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-steel-50 border border-steel-200 flex flex-col justify-between">
              <div>
                <FileText className="w-8 h-8 text-brand-orange mb-3" />
                <h3 className="text-base font-bold text-navy-900">MAMTA Master Catalogue 2026</h3>
                <p className="text-xs text-steel-500 mt-1">Full 180-page comprehensive catalogue with 2D technical drawings and dimensions.</p>
              </div>
              <div className="pt-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline"
                >
                  <Download className="w-3.5 h-3.5" /> Download Full PDF (34 MB)
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-steel-50 border border-steel-200 flex flex-col justify-between">
              <div>
                <FileText className="w-8 h-8 text-brand-teal mb-3" />
                <h3 className="text-base font-bold text-navy-900">Indexable U-Drill Selection Guide</h3>
                <p className="text-xs text-steel-500 mt-1">Feeds, speeds, and coolant pressure guidelines for 2D, 3D, 4D, and 5D drilling depths.</p>
              </div>
              <div className="pt-4">
                <Link
                  href="/products/category/u-drills-core-drills"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal hover:underline"
                >
                  <Download className="w-3.5 h-3.5" /> Download Drilling Chart (8 MB)
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-steel-50 border border-steel-200 flex flex-col justify-between">
              <div>
                <FileText className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="text-base font-bold text-navy-900">High Feed Milling Best Practices</h3>
                <p className="text-xs text-steel-500 mt-1">Chip thinning calculations, programmer CAM setup guide, and pocket roughing strategies.</p>
              </div>
              <div className="pt-4">
                <Link
                  href="/blog/high-feed-milling-vs-conventional-face-milling"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" /> Read Tech Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

