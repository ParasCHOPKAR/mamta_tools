import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Cpu, FileUp, Settings, CheckCircle2, ArrowRight, 
  Send, Layers, ShieldCheck, Clock 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Custom Tooling Solutions & Special Cutters | MAMTA Tools Pune",
  description: "Custom engineered cutting tools manufactured to customer component drawings. Multi-step combination tools, special chamfer cutters, and profile boring bars engineered in Pune, India.",
  keywords: [
    "custom cutting tools manufacturer India",
    "special application cutters Pune",
    "combination step tools",
    "tooling engineered to drawing",
    "custom form cutters"
  ]
};

export default function CustomToolingPage() {
  const customWorkflow = [
    { step: "01", title: "Component Drawing & Cycle Audit", desc: "Submit your 2D PDF or 3D CAD component model. Our tooling engineers analyze cycle time bottlenecks, machine spindle limits, and workpiece hardness." },
    { step: "02", title: "3D Tool Concept & Feasibility Simulation", desc: "We design a tailored cutter in Siemens NX or SolidWorks, providing full 3D interference checking, chip pocket clearance, and insert selection." },
    { step: "03", title: "Precision Prototype & CNC Grinding", desc: "Manufactured on 5-axis CNC grinders with vacuum hardening, through-coolant porting, and electroless nickel protective plating." },
    { step: "04", title: "CMM Verification & Shopfloor Commissioning", desc: "100% CMM inspection report provided. We supply cutting parameter sheets (Vc, fz) and provide on-site or video commissioning support." },
  ];

  const customToolTypes = [
    { name: "Multi-Step Combination Cutters", desc: "Combines drilling, counterboring, and 45° chamfering in a single spindle motion, slashing tool change and cutting cycle times by up to 60%." },
    { name: "Special Diameter Boring Bars", desc: "Non-standard lengths, extended reach overhangs up to 10xD with anti-vibration heavy metal cores and targeted micro-coolant jets." },
    { name: "Complex Profile & Form Cutters", desc: "Form cutters for O-ring grooves, API thread forms, RTJ gasket grooves, and turbine fir-tree root configurations." },
    { name: "Special Angle Chamfer & Back-Spotfacing Cutters", desc: "Multi-flute indexable tools for reverse-side deburring, spotfacing, and counter-sinking without flipping the workpiece." },
  ];

  return (
    <div className="w-full">
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Engineered To Blueprint
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Custom Tooling Solutions
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              When catalog tools cannot deliver the cycle times or geometries your component demands, MAMTA Tools engineers custom indexable cutting tools designed specifically for your CNC operations.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Engineering Workflow */}
      <section className="py-16 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-900 bg-steel-100 px-3 py-1 rounded">
              Engineering Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              How We Engineer Your Custom Tooling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customWorkflow.map((w, idx) => (
              <div key={idx} className="bg-steel-50 p-6 rounded-xl border border-steel-200 hover:border-brand-orange transition-all relative">
                <span className="text-3xl font-black text-brand-orange font-heading block">{w.step}</span>
                <h3 className="text-base font-bold text-navy-900 mt-2">{w.title}</h3>
                <p className="text-xs text-steel-600 mt-2 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tool Categories */}
      <section className="py-16 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Specialized Geometries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              Custom Tooling Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customToolTypes.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-brand-orange" />
                  <h3 className="text-base font-bold text-navy-900">{t.name}</h3>
                </div>
                <p className="text-xs text-steel-600 leading-relaxed pl-7">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Drawing Upload Banner */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <FileUp className="w-12 h-12 text-brand-orange mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a Component Drawing Ready for Quotation?
          </h2>
          <p className="text-xs sm:text-sm text-steel-300 max-w-xl mx-auto">
            Upload your technical drawing (PDF, DWG, DXF, or STEP format). Our Pune design engineering team evaluates cycle time feasibility and provides a proposal drawing within 24 to 48 hours.
          </p>
          <div className="pt-2">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold rounded-lg shadow-xl hover:shadow-brand-orange/40 transition-all"
            >
              Upload Drawing on RFQ Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

