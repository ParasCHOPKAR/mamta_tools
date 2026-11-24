'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Factory, Shield, CheckCircle2, ArrowRight, 
  Cpu, Layers, Target, Settings, Sparkles, ChevronRight
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Certified Alloy Sourcing',
    subtitle: 'Ultrasonic & Spectro Tested',
    description: 'European & certified prime 42CrMo4 billets tested for zero internal voids.',
    icon: Layers,
    badge: '100% Traceable'
  },
  {
    step: '02',
    title: '5-Axis CNC Profile Milling',
    subtitle: 'Hermle & DMG Mori',
    description: 'Single-clamping operations ensuring true perpendicularity and pocket squareness.',
    icon: Factory,
    badge: 'Single-Clamp'
  },
  {
    step: '03',
    title: 'Vacuum Chamber Hardening',
    subtitle: 'HRC 48 – 52 Zero Decarb',
    description: 'Nitrogen quench computer vacuum furnaces eliminating decarburization.',
    icon: Settings,
    badge: 'Zero Decarb'
  },
  {
    step: '04',
    title: 'Precision Pocket Grinding',
    subtitle: '< 0.005 mm Runout',
    description: 'CNC multi-axis tool grinders finishing insert seats and arbor pilot bores.',
    icon: Target,
    badge: 'Sub-Micron'
  },
  {
    step: '05',
    title: 'Dynamic Spindle Balancing',
    subtitle: 'G2.5 @ 15,000 RPM',
    description: 'ISO 1940-1 Grade G2.5 balancing protecting high-speed spindle bearings.',
    icon: Cpu,
    badge: 'G2.5 Balance'
  },
  {
    step: '06',
    title: 'Zeiss CNC CMM Metrology',
    subtitle: 'Laser Serial Marking',
    description: 'Full multi-axis coordinate metrology scan issued with every batch.',
    icon: Shield,
    badge: 'Zeiss Certified'
  }
];

export default function HomeManufacturingProcess() {
  return (
    <section 
      id="manufacturing-protocol"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      {/* ========================================================
          PRODUCT-RELATED BACKGROUND: Real Tool Schematic Watermark
      ======================================================== */}
      <div 
        className="absolute -top-16 -right-16 w-[560px] h-[560px] opacity-[0.05] pointer-events-none select-none hidden md:block"
        style={{
          backgroundImage: `url('/images/products/indexable-shoulder-milling-cutter-25mm/drawing.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) grayscale(100%)'
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
      
      {/* ANIMATED HORIZONTAL CNC LASER TOOLPATH BEAM */}
      <div className="absolute top-[52%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f28c28] to-transparent shadow-[0_0_8px_#f28c28] pointer-events-none hidden lg:block animate-laser-h opacity-75 z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            SECTION HEADER (#6 Badge Matching Master Reference)
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-[#f28c28] text-white flex items-center justify-center text-[11px] font-black">
              6
            </span>
            <span>6-Stage Precision Manufacturing Protocol</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Quality Engineered at Every Step
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            From raw European alloy steel forgings to Zeiss CMM coordinate measurement, witness the protocol behind every MAMTA cutter.
          </p>
        </div>

        {/* ========================================================
            FLOW PIPELINE: 6 STEP CARDS + CAPABILITIES CARD
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3.5 lg:gap-3 items-stretch">
          
          {PROCESS_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#f8fafc] rounded-xl border border-slate-200/90 hover:border-[#f28c28] p-4 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md relative overflow-hidden"
              >
                {/* Step Hover Glow Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f28c28] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Step Number Capsule */}
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#f28c28] text-white font-mono font-black text-xs flex items-center justify-center shadow-xs">
                    {item.step}
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-700">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-heading group-hover:text-[#f28c28] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#f28c28] mt-0.5 truncate">
                    {item.subtitle}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>STAGE {item.step}/06</span>
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* 7th Card: Pune Machine List & Capabilities */}
          <div className="bg-[#0b1322] text-white rounded-xl border border-slate-800 p-4 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="w-8 h-8 rounded-lg bg-white/10 text-[#f28c28] flex items-center justify-center mb-3">
                <Factory className="w-4 h-4" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white font-heading">
                Pune Machine List &amp; Capabilities
              </h3>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Explore our Talawade plant machines, 5-axis DMG Mori centers &amp; CMM lab.
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-800">
              <Link
                href="/manufacturing-infrastructure"
                className="w-full py-2 px-2.5 bg-[#f28c28] hover:bg-[#e07b18] text-white text-[11px] font-bold rounded flex items-center justify-center gap-1 transition-colors"
              >
                <span>View Capabilities</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
