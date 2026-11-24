'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, RotateCcw, ArrowRight, Gauge, 
  Sparkles, CheckCircle2, Zap, Phone, MessageSquare, Sliders,
  Radio, Disc
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

interface MaterialPreset {
  iso: string;
  name: string;
  color: string;
  activeColor: string;
  defaultVc: number; // m/min
  defaultFz: number; // mm/tooth
}

const MATERIAL_PRESETS: MaterialPreset[] = [
  { iso: 'P', name: 'Steel', color: 'bg-blue-50 border-blue-200 text-blue-700', activeColor: 'bg-[#f28c28] border-[#ea580c] text-white', defaultVc: 220, defaultFz: 0.15 },
  { iso: 'M', name: 'Stainless', color: 'bg-amber-50 border-amber-200 text-amber-700', activeColor: 'bg-[#f28c28] border-[#ea580c] text-white', defaultVc: 140, defaultFz: 0.10 },
  { iso: 'K', name: 'Cast Iron', color: 'bg-red-50 border-red-200 text-red-700', activeColor: 'bg-[#f28c28] border-[#ea580c] text-white', defaultVc: 200, defaultFz: 0.18 },
  { iso: 'N', name: 'Aluminium', color: 'bg-emerald-50 border-emerald-200 text-emerald-700', activeColor: 'bg-[#f28c28] border-[#ea580c] text-white', defaultVc: 480, defaultFz: 0.22 },
  { iso: 'S', name: 'Inconel', color: 'bg-purple-50 border-purple-200 text-purple-700', activeColor: 'bg-[#f28c28] border-[#ea580c] text-white', defaultVc: 65, defaultFz: 0.08 }
];

export default function HomeSpeedFeedSection() {
  const [selectedIso, setSelectedIso] = useState<string>('P');
  const [diameter, setDiameter] = useState<number>(50); // mm
  const [cuttingSpeed, setCuttingSpeed] = useState<number>(220); // m/min
  const [numberOfInserts, setNumberOfInserts] = useState<number>(6); // inserts
  const [feedPerTooth, setFeedPerTooth] = useState<number>(0.25); // mm/tooth
  const [depthOfCut, setDepthOfCut] = useState<number>(3.0); // mm ap

  const handleSelectIso = (preset: MaterialPreset) => {
    setSelectedIso(preset.iso);
    setCuttingSpeed(preset.defaultVc);
    setFeedPerTooth(preset.defaultFz);
  };

  // Calculations
  // Spindle RPM N = (Vc * 1000) / (pi * D)
  const rpm = Math.round((cuttingSpeed * 1000) / (Math.PI * diameter)) || 0;
  // Table Feed Vf = N * z * fz (mm/min)
  const tableFeed = Math.round(rpm * numberOfInserts * feedPerTooth) || 0;
  // Metal Removal Rate Q = (ae * ap * Vf) / 1000 (cm3/min), assume ae = 0.70 * D
  const radialEngagement = 0.70 * diameter;
  const mrr = Number(((radialEngagement * depthOfCut * tableFeed) / 1000).toFixed(1)) || 0;

  // Visual animation rotation speed: clamp between 0.4s (fast) and 3s (slow)
  const spinDuration = Math.max(0.4, Math.min(3.0, 3000 / (rpm || 1000)));

  const whatsappCleanNumber = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section 
      id="speed-feed-estimator"
      className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden"
    >
      {/* ========================================================
          PRODUCT-RELATED BACKGROUND: Shell Mill Blueprint Schematic
      ======================================================== */}
      <div 
        className="absolute -top-16 -right-16 w-[560px] h-[560px] opacity-[0.06] pointer-events-none select-none hidden md:block"
        style={{
          backgroundImage: `url('/images/products/high-feed-face-milling-cutter/drawing.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) grayscale(100%)'
        }}
      />

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
      {/* Ambient Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-500/[0.04] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            SECTION HEADER (#5 Badge Matching Master Reference)
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-[#f28c28] text-white flex items-center justify-center text-[11px] font-black">
              5
            </span>
            <span>Interactive Cutting Speed &amp; Feed (Vc / fz) Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Calculate CNC Machining Parameters
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Real-time feed, speed, and metal removal rate calculator tailored for MAMTA high-feed indexable cutters.
          </p>
        </div>

        {/* ========================================================
            CALCULATOR MAIN CARD (Matching Master Reference Layout)
        ======================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* ----------------------------------------------------
                LEFT COLUMN (7 Cols): Inputs & Sliders
            ---------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Material (ISO) Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2.5 font-mono">
                  Material (ISO Group)
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {MATERIAL_PRESETS.map((m) => {
                    const isSelected = selectedIso === m.iso;
                    return (
                      <button
                        key={m.iso}
                        type="button"
                        onClick={() => handleSelectIso(m)}
                        className={`py-2 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#f28c28] border-[#ea580c] text-white shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-black font-mono">{m.iso}</div>
                        <div className="text-[10px] font-medium truncate mt-0.5">{m.name}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slider 1: Tool Diameter (Ø) */}
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className="text-slate-700 font-mono">Tool Diameter (Ø)</span>
                  <span className="text-[#f28c28] font-mono font-bold text-sm">Ø {diameter} mm</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="250"
                  step="1"
                  value={diameter}
                  onChange={(e) => setDiameter(Number(e.target.value))}
                  className="w-full accent-[#f28c28] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>16 mm</span>
                  <span>100 mm</span>
                  <span>250 mm</span>
                </div>
              </div>

              {/* Slider 2: Cutting Speed (Vc) */}
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className="text-slate-700 font-mono">Cutting Speed (Vc)</span>
                  <span className="text-[#f28c28] font-mono font-bold text-sm">{cuttingSpeed} m/min</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="600"
                  step="5"
                  value={cuttingSpeed}
                  onChange={(e) => setCuttingSpeed(Number(e.target.value))}
                  className="w-full accent-[#f28c28] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>40 m/min</span>
                  <span>300 m/min</span>
                  <span>600 m/min</span>
                </div>
              </div>

              {/* Slider 3: No. of Inserts (z) */}
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className="text-slate-700 font-mono">No. of Inserts (z)</span>
                  <span className="text-[#f28c28] font-mono font-bold text-sm">{numberOfInserts} teeth</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={numberOfInserts}
                  onChange={(e) => setNumberOfInserts(Number(e.target.value))}
                  className="w-full accent-[#f28c28] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>1</span>
                  <span>6</span>
                  <span>12</span>
                </div>
              </div>

              {/* Slider 4: Feed per Tooth (fz) */}
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className="text-slate-700 font-mono">Feed per Tooth (fz)</span>
                  <span className="text-[#f28c28] font-mono font-bold text-sm">{feedPerTooth} mm/tooth</span>
                </div>
                <input
                  type="range"
                  min="0.04"
                  max="0.50"
                  step="0.01"
                  value={feedPerTooth}
                  onChange={(e) => setFeedPerTooth(Number(e.target.value))}
                  className="w-full accent-[#f28c28] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>0.04 mm</span>
                  <span>0.25 mm</span>
                  <span>0.50 mm</span>
                </div>
              </div>

            </div>

            {/* ----------------------------------------------------
                RIGHT COLUMN (5 Cols): Calculated Results Digital Box + Animated Spindle
            ---------------------------------------------------- */}
            <div className="lg:col-span-5 bg-[#0b1322] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
              
              {/* Animated Spindle Simulation Hologram Watermark */}
              <div className="absolute top-4 right-4 pointer-events-none opacity-20">
                <div 
                  className="w-24 h-24 rounded-full border-2 border-dashed border-[#f28c28]"
                  style={{ animation: `spinSlow ${spinDuration}s linear infinite` }}
                />
              </div>

              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f28c28] block flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Real-Time CNC Telemetry
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading">
                      Calculated Results
                    </h3>
                  </div>
                  <Gauge className="w-5 h-5 text-slate-400" />
                </div>

                {/* Metric 1: Spindle RPM (N) */}
                <div className="bg-[#101b2d] p-4 rounded-xl border border-slate-800/80 mb-3.5 relative overflow-hidden group">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                    <span>Spindle RPM (N)</span>
                    <span className="text-[10px] text-slate-500">(rev/min)</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-wider">
                    {rpm.toLocaleString()} <span className="text-sm font-medium text-slate-400">rpm</span>
                  </div>
                  <div className="text-[9px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span>Optimum G2.5 Balance Window</span>
                  </div>
                </div>

                {/* Metric 2: Table Feed (Vf) */}
                <div className="bg-[#101b2d] p-4 rounded-xl border border-slate-800/80 mb-3.5 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                    <span>Table Feed (Vf)</span>
                    <span className="text-[10px] text-slate-500">(mm/min)</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[#f28c28] tracking-wider">
                    {tableFeed.toLocaleString()} <span className="text-sm font-medium text-slate-400">mm/min</span>
                  </div>
                </div>

                {/* Metric 3: Metal Removal Rate (Q) */}
                <div className="bg-[#101b2d] p-4 rounded-xl border border-slate-800/80 mb-6 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                    <span>Metal Removal Rate (Q)</span>
                    <span className="text-[10px] text-slate-500">(cm³/min)</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 tracking-wider">
                    {mrr} <span className="text-sm font-medium text-slate-400">cm³/min</span>
                  </div>
                </div>
              </div>

              {/* Verify with Engineering Desk WhatsApp Button */}
              <div className="space-y-2.5">
                <a
                  href={`https://wa.me/${whatsappCleanNumber}?text=${encodeURIComponent(`Hello MAMTA Tools, I ran cutting speed calculations for Ø${diameter}mm cutter, Vc=${cuttingSpeed} m/min, z=${numberOfInserts}, fz=${feedPerTooth} mm/tooth. Results: ${rpm} RPM, ${tableFeed} mm/min. Please advise on recommended insert grades.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow"
                >
                  <img src="/images/whatsapp.svg" alt="" className="w-4 h-4 object-contain brightness-0 invert" />
                  <span>Verify with Engineering Desk</span>
                </a>

                <div className="text-center text-[10px] font-mono text-slate-500">
                  Instant parameter confirmation from Pune tool design team
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
