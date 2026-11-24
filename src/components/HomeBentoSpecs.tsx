'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, Zap, Award, Cpu, Layers, 
  ArrowRight, CheckCircle2, Target, Gauge, Sparkles,
  Flame, Droplets, Compass, Clock, Check
} from 'lucide-react';

export default function HomeBentoSpecs() {
  return (
    <section 
      id="engineering-advantage"
      className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden"
    >
      {/* ========================================================
          PRODUCT-RELATED BACKGROUND: Real Cutter Blueprints & Inserts
      ======================================================== */}
      {/* 1. Heavy High-Feed Milling Cutter CAD Blueprint Watermark */}
      <div 
        className="absolute -top-10 -left-12 w-[500px] h-[500px] opacity-[0.06] pointer-events-none select-none hidden md:block"
        style={{
          backgroundImage: `url('/images/products/high-feed-face-milling-cutter/drawing.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) grayscale(100%)'
        }}
      />

      {/* 2. Micro Boring Extension CAD Blueprint Watermark */}
      <div 
        className="absolute -bottom-10 -right-12 w-[480px] h-[480px] opacity-[0.05] pointer-events-none select-none hidden lg:block"
        style={{
          backgroundImage: `url('/images/products/ckb-boring-unit-extension/drawing.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) grayscale(100%)'
        }}
      />

      {/* 3. Animated Rotating CMM Concentric Verification Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] pointer-events-none opacity-[0.14] select-none">
        <div className="w-full h-full rounded-full border border-dashed border-slate-400 animate-spin-slow" />
        <div className="absolute inset-20 rounded-full border border-slate-300 animate-spin-reverse-slow" />
      </div>

      {/* Precision Engineering Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(203, 213, 225, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 213, 225, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Subtle Blueprint Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

      {/* Decorative Technical Crosshairs */}
      <div className="absolute top-6 left-8 font-mono text-[10px] text-slate-400 select-none hidden sm:block">
        + LOC: 18.68° N, 73.80° E // METROLOGY STANDARDS
      </div>
      <div className="absolute top-6 right-8 font-mono text-[10px] text-slate-400 select-none hidden sm:block">
        TOL: ±0.002mm // ISO 9001:2015 +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            SECTION HEADER (#3 Badge Matching Master Reference)
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-[#f28c28] text-white flex items-center justify-center text-[11px] font-black">
              3
            </span>
            <span>The MAMTA Engineering Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Engineered to Outlast. Built for Extreme Feeds.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Every cutter body leaving our Pune plant is manufactured to metrology standards rivaling top global tooling houses.
          </p>
        </div>

        {/* ========================================================
            BENTO GRID (Matching Master Reference Section 3)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
          
          {/* ------------------------------------------------------
              CARD 1: Sub-Micron Pocket Grounding & Zeiss CMM (Large 6-Col) + Laser Scan
          ------------------------------------------------------ */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-[#f28c28] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group relative overflow-hidden">
            
            {/* Animated Laser Inspection Line across Card */}
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f28c28] to-transparent shadow-[0_0_8px_#f28c28] pointer-events-none z-20 animate-laser opacity-70" />

            {/* Ambient Corner Tint */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-orange-500/[0.05] rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#f28c28] flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[11px] font-bold">
                    ZEISS CMM
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
                    &lt; 0.005mm
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading group-hover:text-[#f28c28] transition-colors">
                Sub-Micron Pocket Grounding &amp; Zeiss CMM Metrology
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                Unequal insert pocket seat heights cause premature insert fracture and rough finishes. We finish-grind every pocket on 5-axis CNC profile grinders to guarantee radial and axial runout below <strong className="text-slate-900">0.005mm</strong> across all teeth.
              </p>

              {/* Technical Benchmarks Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 border border-slate-200/80 p-2.5 rounded-lg text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block">Radial Runout</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono">0.003 - 0.005 mm</span>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 p-2.5 rounded-lg text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block">Dynamic Balance</span>
                  <span className="text-xs sm:text-sm font-bold text-[#f28c28] font-mono">G2.5 @ 15,000 RPM</span>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 p-2.5 rounded-lg text-center col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block">Metrology</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-700 font-mono">100% CMM Scanned</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Laser Serialized Batch Certificate
              </span>
              <Link
                href="/quality-assurance"
                className="text-xs font-bold text-[#f28c28] hover:text-[#d97706] inline-flex items-center gap-1"
              >
                <span>QA Protocols</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* ------------------------------------------------------
              CARD 2: 70-Bar Dual Through-Coolant (3-Col)
          ------------------------------------------------------ */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#f28c28] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center relative">
                  <Droplets className="w-5 h-5 relative z-10" />
                  <span className="absolute inset-0 rounded-xl bg-cyan-400/20 animate-ping opacity-60" />
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-[10px] font-bold">
                  70 BAR MAX
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#f28c28] transition-colors">
                70-Bar Dual Through-Coolant
              </h3>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Individual internal coolant jet ports direct pressurized coolant straight onto each cutting edge, flushing chips instantly in deep cavities.
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <div className="w-3.5 h-3.5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold">+38% Insert Edge Life</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <div className="w-3.5 h-3.5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Zero Chip Re-cutting Defect</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
              Targeted Fluid Dynamics Jet Geometry
            </div>
          </div>

          {/* ------------------------------------------------------
              CARD 3: Vacuum Hardened 42CrMo4 Alloy Body (3-Col)
          ------------------------------------------------------ */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#f28c28] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center relative">
                  <Flame className="w-5 h-5 relative z-10" />
                  <span className="absolute inset-0 rounded-xl bg-amber-400/20 animate-pulse opacity-70" />
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-800 font-mono text-[10px] font-bold">
                  HRC 48-52
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#f28c28] transition-colors">
                Vacuum Hardened 42CrMo4 Alloy Body
              </h3>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Computer-regulated vacuum furnaces with nitrogen gas quench eliminate surface decarburization, ensuring high toughness and anti-vibration damping.
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold">Anti-Chatter Damping Body</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Zero Decarburization Surface</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
              Pre-Hardened European Alloy Steel
            </div>
          </div>

          {/* ------------------------------------------------------
              CARD 4: Electroless Ni-Cr Diffusion Coating (6-Col)
          ------------------------------------------------------ */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#f28c28] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading group-hover:text-[#f28c28] transition-colors">
                  Electroless Ni-Cr Diffusion Coating
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Micron-uniform nickel-chromium diffusion delivers slick chip sliding with superior corrosion resistance against aggressive synthetic water-soluble coolants.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px] font-bold whitespace-nowrap">
                ANTI-FRICTION
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-3.5 h-3.5 text-[#f28c28] stroke-[3]" />
                <span>Anti-friction surface prevents built-up edge</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-3.5 h-3.5 text-[#f28c28] stroke-[3]" />
                <span>High oxidation barrier in wet CNC ops</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------
              CARD 5: Custom Blueprint-to-Tooling in 24 Hours (6-Col)
          ------------------------------------------------------ */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#f28c28] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 text-[#f28c28] flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading group-hover:text-[#f28c28] transition-colors">
                  Custom Blueprint-to-Tooling in 24 Hours
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Send your component drawing in 2D or 3D. Our Pune CAD engineering cell models customized multi-step combination cutters with 3D STEP layout in 24 hours.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-orange-50 border border-orange-200 text-orange-800 font-mono text-[10px] font-bold whitespace-nowrap">
                24H CAD SLA
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-3.5 h-3.5 text-[#f28c28] stroke-[3]" />
                <span>Parametric 3D CAD &amp; STEP models</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-3.5 h-3.5 text-[#f28c28] stroke-[3]" />
                <span>ISO standard insert recommendations</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
