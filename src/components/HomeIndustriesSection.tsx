'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, Check, Sparkles, 
  Layers, ExternalLink, CheckCircle2, ChevronRight, Zap
} from 'lucide-react';

interface IndustryItem {
  id: string;
  name: string;
  slug: string;
  materialTag: string;
  toleranceTag: string;
  packageDesc: string;
  image: string;
  tools: string[];
  metricBadge: string;
}

const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'automotive',
    name: 'Automotive & Powertrain',
    slug: 'automotive-components',
    materialTag: 'EN24 / 16MnCr5 Steel',
    toleranceTag: 'Runout < 0.005mm',
    packageDesc: 'Complete milling & boring packages for engine cylinder blocks, transmission cases, and forged crankshafts.',
    image: '/images/industries/automotive.svg',
    tools: [
      '45° Face Mills for cylinder head deck finishing',
      'Indexable U-Drills for connecting rod pin drilling'
    ],
    metricBadge: '40% Tool Life Gain'
  },
  {
    id: 'aerospace',
    name: 'Aerospace & Defense',
    slug: 'aerospace-defense',
    materialTag: 'Ti-6Al-4V / Inconel 718',
    toleranceTag: 'Ra < 0.4 µm Finish',
    packageDesc: 'High-precision, lightweight machining for 5-axis turbine impellers, engine blisks, and structural airframe ribs.',
    image: '/images/industries/aerospace.svg',
    tools: [
      'Anti-vibration solid carbide modular shanks (MT-CS)',
      'High-feed cutters with positive rake TiAlN inserts'
    ],
    metricBadge: 'Zero-Chatter Ribs'
  },
  {
    id: 'die-mold',
    name: 'Die & Mold Manufacturing',
    slug: 'die-mold-manufacturing',
    materialTag: 'P20 / H13 / 1.2311 (HRC 48-55)',
    toleranceTag: 'Hard Steel Milling',
    packageDesc: 'Rapid 3D cavity roughing and contour finishing for plastic injection molds, die-casting dies, and forging tools.',
    image: '/images/industries/die-mold.svg',
    tools: [
      'MT-HFM high feed cutters with WNMU/LNMU inserts',
      'Indexable ball nose & toroid contour cutters'
    ],
    metricBadge: '50% Roughing Cut'
  },
  {
    id: 'heavy-engineering',
    name: 'Heavy Engineering & Earthmoving',
    slug: 'heavy-engineering-infrastructure',
    materialTag: '42CrMo4 / Hardox Plates',
    toleranceTag: 'Intermittent Cuts',
    packageDesc: 'Rugged cutting solutions for massive excavator boom weldments, crane chassis, and large structural plates.',
    image: '/images/industries/heavy-engineering.svg',
    tools: [
      'MT-FM45 heavy duty 45° face mills (up to Ø250mm)',
      'Twin-cutter rough boring units for heavy stock removal'
    ],
    metricBadge: 'Heavy Stock ap = 6mm'
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas, Valves & Energy',
    slug: 'oil-gas-valves',
    materialTag: 'Super Duplex / Inconel 625',
    toleranceTag: 'API 6A Leak-Free',
    packageDesc: 'Tough, corrosion-resistant machining for high-pressure subsea valves, pipeline manifolds, and API flanges.',
    image: '/images/industries/oil-gas.svg',
    tools: [
      'Through-coolant indexable U-drills with high pressure',
      'Custom RTJ ring joint & O-ring groove form cutters'
    ],
    metricBadge: 'High-P Jet Evacuation'
  },
  {
    id: 'power-generation',
    name: 'Power Generation & Precision CNC',
    slug: 'power-energy',
    materialTag: 'Alloy Forgings / 6061 / SS',
    toleranceTag: '10+ Hr Continuous',
    packageDesc: 'Large-format tooling for steam/gas turbine casings, wind pitch bearings, and high-mix OEM job shops.',
    image: '/images/industries/power.svg',
    tools: [
      'Large diameter octagonal and round button face mills',
      'Heavy boring units with modular BT50 and CAT50 shanks'
    ],
    metricBadge: 'Thermal Shock Barrier'
  }
];

export default function HomeIndustriesSection() {
  return (
    <section 
      id="industries-serve"
      className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden"
    >
      {/* ========================================================
          PRODUCT-RELATED BACKGROUND: Real Tool Vectors
      ======================================================== */}
      <div 
        className="absolute -top-16 -right-16 w-[500px] h-[500px] opacity-[0.05] pointer-events-none select-none hidden md:block"
        style={{
          backgroundImage: `url('/images/products/face-mill.svg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div 
        className="absolute -bottom-16 -left-16 w-[450px] h-[450px] opacity-[0.04] pointer-events-none select-none hidden lg:block"
        style={{
          backgroundImage: `url('/images/products/end-mill.svg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Precision CAD Matrix Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] bg-orange-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            SECTION HEADER (#7 Badge Matching Master Reference)
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-[#f28c28] text-white flex items-center justify-center text-[11px] font-black">
              7
            </span>
            <span>Industries We Serve (Production Applications)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Engineered for Demanding Industrial Sectors
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            MAMTA precision cutting solutions are deployed across the most rigorous Tier-1 automotive, aerospace, and energy production machining lines.
          </p>
        </div>

        {/* ========================================================
            6 HIGH-IMPACT SECTOR CARDS GRID
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#f28c28] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-sm hover:shadow-lg relative"
            >
              {/* Optical Laser Sweep Line on Hover */}
              <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f28c28] to-transparent opacity-0 group-hover:opacity-90 group-hover:animate-laser z-30 pointer-events-none" />

              <div>
                {/* Visual Header: High-Tech Industrial Graphic */}
                <div className="relative aspect-[16/10] bg-[#0b1322] overflow-hidden border-b border-slate-100 flex items-center justify-center">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Floating Telemetry Badge: Tolerance */}
                  <span className="absolute top-2.5 right-2.5 bg-slate-900/90 text-slate-200 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-slate-700 backdrop-blur-sm">
                    {ind.toleranceTag}
                  </span>

                  {/* Floating Metric Badge */}
                  <span className="absolute bottom-2.5 left-2.5 bg-[#f28c28] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm font-mono flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    <span>{ind.metricBadge}</span>
                  </span>
                </div>

                <div className="p-6">
                  {/* Material Chip */}
                  <div className="inline-block px-2.5 py-0.5 rounded bg-orange-50 border border-orange-200/90 text-[#f28c28] text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
                    {ind.materialTag}
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-[#f28c28] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {ind.packageDesc}
                  </p>

                  {/* Key Tooling Deployed */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Tooling Deployed:
                    </span>
                    <ul className="text-xs text-slate-700 space-y-1.5">
                      {ind.tools.map((t, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f28c28] mt-1.5 flex-shrink-0" />
                          <span className="line-clamp-1 font-medium">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Link to Case Studies */}
              <div className="px-6 pb-5 pt-2 border-t border-slate-100 mt-auto">
                <Link
                  href="/industries"
                  className="text-xs font-bold text-slate-900 hover:text-[#f28c28] inline-flex items-center gap-1.5 transition-colors group/link"
                >
                  <span>View Sector Machining Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform text-[#f28c28]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Link Bar */}
        <div className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow group"
          >
            <span>Explore All Sector Machining Studies</span>
            <ArrowRight className="w-4 h-4 text-[#f28c28] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
