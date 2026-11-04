import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Factory, Settings, Cpu, Layers, ShieldCheck, 
  Check, ArrowRight, Gauge, Wrench, Download 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Manufacturing & Infrastructure | Pune CNC Tooling Plant | MAMTA Tools",
  description: "Explore MAMTA Tools advanced manufacturing infrastructure in Talawade, Pune. 5-axis CNC tool grinders, VMC machining centers, vacuum heat treatment, and CAD/CAM engineering facilities.",
  keywords: [
    "tooling manufacturing facility Pune",
    "CNC 5-axis tool grinding India",
    "cutting tool factory Talawade",
    "vacuum heat treatment tooling",
    "MAMTA Tools infrastructure"
  ]
};

export default function ManufacturingInfrastructurePage() {
  const machineryList = [
    { name: "5-Axis CNC Tool & Cutter Grinders", capability: "Sub-micron flute grinding, precision insert pocket milling, complex helical fluting down to ±0.002mm." },
    { name: "High-Rigidity Vertical Machining Centers (VMC)", capability: "Heavy-duty roughing and precision finishing of face mill bodies and boring bars up to Ø350mm." },
    { name: "Precision Cylindrical & Internal Grinders", capability: "H6 shank grinding, taper concentricity, and precision arbor bore sizing." },
    { name: "Wire EDM & Spark Erosion Machines", capability: "Intricate custom form tool pockets, specialized keyways, and special PCD/CBN insert seating." },
    { name: "Vacuum Heat Treatment Facility", capability: "Micro-controlled quenching and tempering to achieve core hardness of HRC 48-52 with zero decarburization." },
    { name: "Surface Treatment & Electroless Nickel Plating", capability: "High phosphorus chemical nickel plating line ensuring 100% corrosion resistance and anti-chip welding." },
  ];

  return (
    <div className="w-full">
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Pune Tooling Works
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Manufacturing & Infrastructure
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              Located in Talawade, Pune—the engineering heartland of Maharashtra—our modern plant integrates high-rigidity CNC tool grinders, heat treatment furnaces, and 3D metrology inspection stations.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-16 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-steel-50 p-6 rounded-xl border border-steel-200 space-y-3">
              <Factory className="w-8 h-8 text-brand-orange" />
              <h3 className="text-lg font-bold text-navy-900">Talawade Manufacturing Plant</h3>
              <p className="text-xs text-steel-600 leading-relaxed">
                Gat No. 189, Behind Jyotiba Temple, Jyotiba Nagar, Talawade, Pune. Over 15,000 sq. ft. of climate-controlled CNC production and inspection bays.
              </p>
            </div>

            <div className="bg-steel-50 p-6 rounded-xl border border-steel-200 space-y-3">
              <Cpu className="w-8 h-8 text-brand-teal" />
              <h3 className="text-lg font-bold text-navy-900">CAD/CAM & Simulation Cell</h3>
              <p className="text-xs text-steel-600 leading-relaxed">
                Powered by Siemens NX, SolidWorks, and Vericut. We simulate cutting chip evacuation, harmonic vibration frequencies, and tool deflection before metal is cut.
              </p>
            </div>

            <div className="bg-steel-50 p-6 rounded-xl border border-steel-200 space-y-3">
              <Gauge className="w-8 h-8 text-emerald-600" />
              <h3 className="text-lg font-bold text-navy-900">Annual Production Capacity</h3>
              <p className="text-xs text-steel-600 leading-relaxed">
                Over 10,000+ precision indexable milling cutters, U-drill bodies, boring heads, and custom special tools shipped annually to domestic and global clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Fleet */}
      <section className="py-16 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              CNC Machine Park
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              Precision CNC Machining & Tool Grinding Fleet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {machineryList.map((m, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-brand-orange" />
                  <h3 className="text-sm font-bold text-navy-900">{m.name}</h3>
                </div>
                <p className="text-xs text-steel-600 leading-relaxed pl-6">{m.capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-14 bg-navy-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Schedule a Virtual or In-Person Pune Plant Audit
          </h2>
          <p className="text-xs text-steel-300">
            We welcome OEM procurement heads and international distributors to audit our manufacturing and metrology systems in Pune.
          </p>
          <div className="pt-2">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg shadow"
            >
              Contact Pune Plant Office <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

