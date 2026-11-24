'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Disc, Layers, Cpu, ArrowRight, CheckCircle2, 
  Send, ChevronRight, Gauge, Wrench, Check,
  Target, Sparkles, ExternalLink, ShieldCheck, Zap,
  Crosshair, Radio, Eye
} from 'lucide-react';
import { PRODUCTS, Product } from '@/data/siteData';
import QuickEnquiryModal from './QuickEnquiryModal';

export type OperationType = 
  | 'face-milling' 
  | 'shoulder-milling' 
  | 'u-drilling' 
  | 'boring' 
  | 'die-mold' 
  | 'specialty';

export interface OperationConfig {
  id: OperationType;
  tabLabel: string;
  tabSub: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  drawingImage: string;
  badgeTag: string;
  leadAngle: string;
  bullets: string[];
  specs: {
    label: string;
    value: string;
  }[];
  performance: {
    param: string;
    label: string;
    value: string;
  }[];
  pins: {
    top: string;
    left: string;
    label: string;
    val: string;
  }[];
  recommendedIds: string[];
}

const OPERATIONS: OperationConfig[] = [
  {
    id: 'face-milling',
    tabLabel: 'Face & High-Feed',
    tabSub: 'High MRR Roughing',
    title: 'Face & High-Feed Milling',
    subtitle: 'High-Volume Roughing & Finishing',
    description: 'Heavy metal removal on flat surfaces with positive axial rake geometries, 45° lead angles, and 17° high-feed insert configurations.',
    image: '/images/hero-face-mill-pedestal.png',
    imageAlt: 'MAMTA Indexable Face Milling Cutter',
    drawingImage: '/images/products/snmx-12-korloy-face-mill-cutter/drawing.png',
    badgeTag: 'HIGH-VOLUME ROUGHING & FINISHING',
    leadAngle: '45.0°',
    bullets: [
      'High material removal rate (MRR)',
      'Stable and vibration-free machining',
      'Ideal for large surface milling'
    ],
    specs: [
      { label: 'Ø Range', value: 'Ø40 – Ø250 mm' },
      { label: 'Inserts', value: 'SEET / SNMX / APMT' },
      { label: 'Lead Angle', value: '45° Lead / 17° High-Feed' },
      { label: 'Coolant', value: '70-Bar Through-Spindle' }
    ],
    performance: [
      { param: 'Vc', label: 'Cutting Speed', value: '180 – 350 m/min' },
      { param: 'fz', label: 'Feed per Tooth', value: '0.10 – 0.35 mm/tooth' },
      { param: 'ap (max)', label: 'Axial Depth of Cut', value: '3 – 6 mm' },
      { param: 'ae', label: 'Radial Width of Cut', value: '60 – 80% of Ø' }
    ],
    pins: [
      { top: '22%', left: '26%', label: 'Precision Pocket', val: '< 0.005mm' },
      { top: '48%', left: '72%', label: '42CrMo4 Body', val: 'HRC 48-52' },
      { top: '78%', left: '32%', label: 'Dual Jet Port', val: '70-Bar Coolant' }
    ],
    recommendedIds: [
      'face-milling-cutter-100mm-en-steel',
      'high-feed-face-milling-cutter',
      'face-milling-cutter-heavy-duty-100mm',
      'snmx-12-korloy-face-mill-cutter'
    ]
  },
  {
    id: 'shoulder-milling',
    tabLabel: 'Shoulder & End (90°)',
    tabSub: 'True 90° Square Cuts',
    title: 'Shoulder & End Milling (True 90°)',
    subtitle: 'True 90° Square Shoulder Cuts',
    description: 'Indexable square shoulder end mills engineered for rigid slotting, stepped pocketing, and peripheral ramping without step witness lines.',
    image: '/images/products/apmt-1135-indexable-end-mill-cutter/main.jpg',
    imageAlt: 'MAMTA True 90° Shoulder & End Mill',
    drawingImage: '/images/products/apmt-1135-indexable-end-mill-cutter/drawing.png',
    badgeTag: 'PRECISION 90° SLOTTING & STEPPING',
    leadAngle: '90.0°',
    bullets: [
      'True 90° wall accuracy eliminating secondary finishing passes',
      'Rigid alloy shank dampens harmonic chatter in deep cavity slots',
      'Multi-flute helical geometry for smooth ramping and pocketing'
    ],
    specs: [
      { label: 'Ø Range', value: 'Ø16 – Ø50 mm' },
      { label: 'Inserts', value: 'APMT1135 / LOMU1003' },
      { label: 'Pocket Seat', value: 'True 90° Square Step' },
      { label: 'Coolant', value: 'Radial Jet Through-Coolant' }
    ],
    performance: [
      { param: 'Vc', label: 'Cutting Speed', value: '150 – 300 m/min' },
      { param: 'fz', label: 'Feed per Tooth', value: '0.08 – 0.22 mm/tooth' },
      { param: 'ap (max)', label: 'Axial Depth of Cut', value: '8 – 14 mm' },
      { param: 'ae', label: 'Radial Width of Cut', value: '10 – 50% of Ø' }
    ],
    pins: [
      { top: '18%', left: '60%', label: '90° True Step', val: 'Zero Witness' },
      { top: '44%', left: '28%', label: 'Radial Port', val: 'Direct Edge Jet' },
      { top: '75%', left: '65%', label: 'Weldon Shank', val: 'DIN 1835-B' }
    ],
    recommendedIds: [
      'apmt-1135-indexable-end-mill-cutter',
      'indexable-shoulder-milling-cutter-25mm',
      'kyocera-lomu-1003-indexable-end-mill',
      'zcc-indexable-end-mill-square-end'
    ]
  },
  {
    id: 'u-drilling',
    tabLabel: 'Holemaking & U-Drill',
    tabSub: '3D / 5D Rapid Drilling',
    title: 'Holemaking & U-Drilling (3D / 5D)',
    subtitle: '3D / 5D Rapid CNC Drilling',
    description: 'Rigid indexable insert drill bodies designed for solid holemaking at feeds 3× faster than HSS drills, eliminating centre drilling operations.',
    image: '/images/products/indexable-u-drills-spmg/main.jpg',
    imageAlt: 'MAMTA Indexable U-Drill',
    drawingImage: '/images/products/indexable-u-drills-spmg/drawing.png',
    badgeTag: 'RAPID SOLID DRILLING WITHOUT PILOT',
    leadAngle: '180°',
    bullets: [
      '3× to 5× drilling cycle advantage over conventional HSS tooling',
      'Dual internal high-pressure coolant channels for chip evacuation',
      'Balanced central and peripheral inserts for true bore alignment'
    ],
    specs: [
      { label: 'Ø Range', value: 'Ø13 – Ø60 mm' },
      { label: 'Inserts', value: 'SPMG / WCMX Indexable' },
      { label: 'Depth Ratios', value: '2D, 3D, 4D, 5D Rigid Shank' },
      { label: 'Coolant', value: 'Internal Dual Jet (>20 Bar)' }
    ],
    performance: [
      { param: 'Vc', label: 'Cutting Speed', value: '120 – 240 m/min' },
      { param: 'fn', label: 'Feed per Revolution', value: '0.06 – 0.18 mm/rev' },
      { param: 'Hole Depth', label: 'Maximum Hole Depth', value: 'Up to 5× Diameter' },
      { param: 'Tolerance', label: 'Direct Hole Accuracy', value: 'IT9 – IT11 Finished' }
    ],
    pins: [
      { top: '15%', left: '35%', label: 'Twin Insert Seat', val: 'SPMG Balance' },
      { top: '48%', left: '68%', label: 'Helical Flute', val: 'Polished Chip Flow' },
      { top: '80%', left: '30%', label: 'Coolant Bore', val: 'Dual Direct High-P' }
    ],
    recommendedIds: [
      'indexable-u-drills-spmg',
      'indexable-core-drill'
    ]
  },
  {
    id: 'boring',
    tabLabel: 'Precision Boring',
    tabSub: 'Sub-Micron Hole Sizing',
    title: 'Precision Boring Systems',
    subtitle: 'Sub-Micron Hole Sizing (H7 / H6)',
    description: 'Modular micro-vernier boring units with 0.002mm fine vernier dials and rigid rough boring twin-cutter heads for extreme bore concentricity.',
    image: '/images/products/modular-finish-boring-head/main.jpg',
    imageAlt: 'MAMTA Precision Modular Boring Head',
    drawingImage: '/images/products/ckb-boring-unit-extension/drawing.png',
    badgeTag: 'SUB-MICRON PRECISION BORE FINISHING',
    leadAngle: '90.0°',
    bullets: [
      '0.002mm direct dial micrometer vernier adjustment',
      'Precision ground insert seats for sub-micron repeatability',
      'Modular CKB coupling architecture for extended-reach boring'
    ],
    specs: [
      { label: 'Ø Range', value: 'Ø20 – Ø200 mm' },
      { label: 'Inserts', value: 'CCMT / TPGB Indexable' },
      { label: 'Dial Vernier', value: '0.002 mm per Grad' },
      { label: 'System', value: 'CKB Modular Extension' }
    ],
    performance: [
      { param: 'Vc', label: 'Cutting Speed', value: '140 – 280 m/min' },
      { param: 'fn', label: 'Feed per Revolution', value: '0.04 – 0.12 mm/rev' },
      { param: 'Bore Tol.', label: 'Achievable Tolerance', value: 'H7 / H6 Precision' },
      { param: 'Surface Ra', label: 'Surface Finish', value: '0.4 – 0.8 µm Mirror' }
    ],
    pins: [
      { top: '24%', left: '30%', label: 'Micro Vernier', val: '0.002mm / Div' },
      { top: '52%', left: '70%', label: 'Cartridge Seat', val: 'CCMT Precision' },
      { top: '78%', left: '40%', label: 'CKB Modular Hub', val: 'Anti-Vibration' }
    ],
    recommendedIds: [
      'modular-finish-boring-head',
      'modular-rough-boring-head',
      'ckb-boring-unit-extension'
    ]
  },
  {
    id: 'die-mold',
    tabLabel: 'Die & Mold 3D',
    tabSub: 'High-Feed Copy & Contouring',
    title: 'Die & Mold 3D Profiling',
    subtitle: 'High-Feed Copy & Contouring',
    description: 'Indexable ball nose cutters and toroid button cutters built for deep mold cavity finishing, hardened tool steels, and chatter-free reach.',
    image: '/images/products/indexable-ball-nose-cutters/main.jpg',
    imageAlt: 'MAMTA Ball Nose & Die Mold Cutter',
    drawingImage: '/images/products/high-feed-milling-cutter-dia-50/drawing.png',
    badgeTag: 'HARDENED DIE & MOLD 3D CONTOURING',
    leadAngle: 'R-Toroid',
    bullets: [
      'Pre-hardened 42CrMo4 alloy bodies (HRC 48–52) for anti-deflection',
      'Smooth toroidal geometry for 3D contoured surface blending',
      'High-feed plunge and ramp capability in hardened steels'
    ],
    specs: [
      { label: 'Ø Range', value: 'Ø16 – Ø50 mm' },
      { label: 'Inserts', value: 'RCGT / RDMT / Ball' },
      { label: 'Reach', value: 'Long Neck & Modular Stems' },
      { label: 'Hardness', value: 'HRC 50–52 Heat-Treated' }
    ],
    performance: [
      { param: 'Vc', label: 'Cutting Speed', value: '160 – 320 m/min' },
      { param: 'fz', label: 'Feed per Tooth', value: '0.15 – 0.40 mm/tooth' },
      { param: 'ap (max)', label: 'Axial Depth of Cut', value: '0.8 – 2.0 mm' },
      { param: 'Steel Hard.', label: 'Workpiece Hardness', value: 'Up to HRC 55' }
    ],
    pins: [
      { top: '20%', left: '55%', label: 'Spherical Ball', val: 'R8 - R25 Contouring' },
      { top: '48%', left: '30%', label: 'Deep Neck Stem', val: 'Zero Deflection' },
      { top: '76%', left: '60%', label: 'Hard Body', val: 'HRC 48-52 Alloy' }
    ],
    recommendedIds: [
      'indexable-ball-nose-cutters',
      'profile-milling-cutter-52-r6-zcc',
      'high-feed-milling-cutter-dia-50'
    ]
  },
  {
    id: 'specialty',
    tabLabel: 'Specialty & Chamfer',
    tabSub: 'Combination & Custom Cuts',
    title: 'Specialty & Chamfering Tooling',
    subtitle: 'Combination & Multi-Operation Tooling',
    description: 'Indexable 45° chamfer tools, dovetail cutters, T-slot mills, and custom multi-step combination cutters tailored to client blueprints.',
    image: '/images/products/indexable-chamfer-tools-45-degree/main.jpg',
    imageAlt: 'MAMTA Specialty & Chamfer Cutter',
    drawingImage: '/images/products/indexable-shoulder-milling-cutter-25mm/drawing.png',
    badgeTag: 'CUSTOM ENGINEERED & MULTI-OPERATION',
    leadAngle: '45.0°',
    bullets: [
      'Multi-stage combination cuts performed in a single CNC cycle',
      'Standard ISO insert pockets for cost-effective insert replacement',
      'Rapid blueprint-to-tooling manufacturing in Pune facility'
    ],
    specs: [
      { label: 'Angles', value: '45°, 60°, Dovetail, T-Slot' },
      { label: 'Inserts', value: 'Standard ISO Triangle/Square' },
      { label: 'Custom', value: 'Step Diameters & Special Profiles' },
      { label: 'Turnaround', value: 'Fast 24-48hr CAD & Blueprint RFQ' }
    ],
    performance: [
      { param: 'Vc', label: 'Cutting Speed', value: '140 – 260 m/min' },
      { param: 'fz', label: 'Feed per Tooth', value: '0.08 – 0.18 mm/tooth' },
      { param: 'Chamfer', label: 'Single Pass Width', value: '1 – 12 mm Width' },
      { param: 'Cycle Time', label: 'Production Advantage', value: 'Up to 40% Reduction' }
    ],
    pins: [
      { top: '25%', left: '40%', label: 'Chamfer Seat', val: '45° / 60° Indexable' },
      { top: '55%', left: '65%', label: 'ISO Insert', val: 'Multi-Edge Economy' },
      { top: '75%', left: '35%', label: 'Custom Step', val: 'Blueprint Custom' }
    ],
    recommendedIds: [
      'indexable-chamfer-tools-45-degree',
      'indexable-dovetail-cutter',
      'indexable-t-slot-milling-cutter',
      'spot-face-cutter'
    ]
  }
];

export default function HomeToolFinder() {
  const [activeOp, setActiveOp] = useState<OperationType>('face-milling');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [showAllMatched, setShowAllMatched] = useState(false);
  const [showHudPins, setShowHudPins] = useState(true);

  const currentOp = OPERATIONS.find((o) => o.id === activeOp) || OPERATIONS[0];
  const matchedProducts = currentOp.recommendedIds
    .map((id) => PRODUCTS.find((p) => p.id === id || p.slug === id))
    .filter((p): p is Product => Boolean(p));

  const handleOpenEnquiryForProduct = (prod: Product) => {
    setSelectedProduct(prod);
    setEnquiryModalOpen(true);
  };

  const handleOpenGeneralEnquiry = () => {
    if (matchedProducts.length > 0) {
      setSelectedProduct(matchedProducts[0]);
    } else {
      setSelectedProduct(null);
    }
    setEnquiryModalOpen(true);
  };

  return (
    <section 
      id="tool-selector"
      className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden"
    >
      {/* ========================================================
          PRODUCT-RELATED BACKGROUND: Real CAD Blueprint Watermarks
      ======================================================== */}
      {/* 1. Subtle CAD Drawing of Current Tool Faded into the Background */}
      <div 
        className="absolute -top-12 -right-16 w-[550px] h-[550px] opacity-[0.06] pointer-events-none transition-all duration-700 select-none hidden md:block"
        style={{
          backgroundImage: `url(${currentOp.drawingImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) grayscale(100%)'
        }}
      />
      
      {/* 2. Left Side Indexable Insert Vector Schematics */}
      <div 
        className="absolute -bottom-16 -left-16 w-[450px] h-[450px] opacity-[0.05] pointer-events-none select-none hidden lg:block"
        style={{
          backgroundImage: `url('/images/products/carbide-insert.svg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* 3. Subtle Rotating Coordinate Reticle Dial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] pointer-events-none opacity-[0.12] select-none">
        <div className="w-full h-full rounded-full border border-dashed border-slate-400 animate-spin-slow" />
      </div>

      {/* Precision CAD Matrix Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            1. SECTION HEADER (Matching Master Mockup #2 Badge)
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-[#f28c28] text-white flex items-center justify-center text-[11px] font-black">
              2
            </span>
            <span>Interactive CNC Tool Selector &amp; Operation Finder</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Find the Right Tool for Your Operation
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Select an operation to explore recommended tools, performance data and get a quick RFQ.
          </p>
        </div>

        {/* ========================================================
            2. MODERN 6-OPERATION SELECTOR TABS (NO NATIVE SCROLLBAR!)
        ======================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
          {OPERATIONS.map((op) => {
            const isActive = op.id === activeOp;
            return (
              <button
                key={op.id}
                onClick={() => {
                  setActiveOp(op.id);
                  setShowAllMatched(false);
                }}
                type="button"
                className={`relative p-3 sm:p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                  isActive
                    ? 'bg-[#f28c28] text-white border-[#ea580c] shadow-md shadow-orange-500/20 ring-2 ring-orange-400/40 -translate-y-0.5'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Top Row: Icon + Active Indicator */}
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {op.id === 'face-milling' && <Disc className="w-4 h-4" />}
                    {op.id === 'shoulder-milling' && <Layers className="w-4 h-4" />}
                    {op.id === 'u-drilling' && <Target className="w-4 h-4" />}
                    {op.id === 'boring' && <Gauge className="w-4 h-4" />}
                    {op.id === 'die-mold' && <Sparkles className="w-4 h-4" />}
                    {op.id === 'specialty' && <Wrench className="w-4 h-4" />}
                  </div>

                  <span className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-white animate-pulse' : 'bg-transparent'
                  }`} />
                </div>

                {/* Tab Titles */}
                <div>
                  <div className={`text-xs sm:text-sm font-bold leading-tight line-clamp-1 ${
                    isActive ? 'text-white' : 'text-slate-900'
                  }`}>
                    {op.tabLabel}
                  </div>
                  <div className={`text-[10px] mt-0.5 font-medium leading-tight truncate ${
                    isActive ? 'text-orange-100' : 'text-slate-500'
                  }`}>
                    {op.tabSub}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            3. MASTER 3-COLUMN SPOTLIGHT PANEL WITH ANIMATED LASER SCAN
        ======================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10 mb-8 transition-all duration-300 relative overflow-hidden">
          
          {/* Subtle Corner Telemetry Stamp */}
          <div className="absolute top-3 right-5 font-mono text-[9px] text-slate-400 uppercase tracking-widest hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPTICAL CMM LIVE FEED: {currentOp.leadAngle} LEAD</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* ----------------------------------------------------
                COLUMN 1 (Left - 4 Cols): Clean Studio Tool Graphic + Laser Scan
            ---------------------------------------------------- */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-full aspect-square max-h-[320px] bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-100 rounded-2xl border border-slate-200/90 p-6 flex items-center justify-center overflow-hidden group">
                
                {/* ANIMATED OPTICAL LASER SCAN LINE */}
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f28c28] to-transparent shadow-[0_0_8px_#f28c28] pointer-events-none z-30 animate-laser opacity-80" />

                {/* Precision Concentric Rings & Crosshairs Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                  <div className="w-48 h-48 rounded-full border border-dashed border-slate-400 animate-spin-reverse-slow" />
                  <div className="absolute w-32 h-32 rounded-full border border-slate-300" />
                  <div className="absolute w-full h-[1px] bg-slate-300" />
                  <div className="absolute h-full w-[1px] bg-slate-300" />
                </div>

                {/* Clean Tool Image */}
                <img
                  src={currentOp.image}
                  alt={currentOp.imageAlt}
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* INTERACTIVE HUD MEASUREMENT NODES / PINS */}
                {showHudPins && currentOp.pins.map((pin, i) => (
                  <div
                    key={i}
                    style={{ top: pin.top, left: pin.left }}
                    className="absolute z-20 hidden sm:flex items-center gap-1.5 -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer"
                  >
                    <div className="relative">
                      <span className="w-3 h-3 rounded-full bg-[#f28c28] flex items-center justify-center shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      </span>
                      <span className="absolute inset-0 rounded-full bg-[#f28c28] animate-ping opacity-60 pointer-events-none" />
                    </div>
                    
                    <div className="bg-slate-900/90 text-white px-2 py-0.5 rounded text-[9px] font-mono whitespace-nowrap shadow-sm border border-slate-700/80 pointer-events-none">
                      <span className="text-orange-300 font-bold mr-1">{pin.label}:</span>
                      <span>{pin.val}</span>
                    </div>
                  </div>
                ))}

                {/* Floating Studio Verification Badges */}
                <span className="absolute top-3 left-3 bg-white/95 border border-slate-200/80 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm backdrop-blur-sm z-20 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>ISO 9001:2015</span>
                </span>

                <span className="absolute bottom-3 right-3 bg-slate-900/90 text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded border border-slate-700 shadow-sm z-20">
                  Runout &lt; 0.005mm
                </span>
              </div>

              {/* Quick Spec Pills Under Graphic */}
              <div className="grid grid-cols-2 gap-2 w-full mt-3">
                <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block">Range</span>
                  <span className="text-xs font-bold text-slate-800">{currentOp.specs[0].value}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block">Coolant</span>
                  <span className="text-xs font-bold text-slate-800 truncate block">{currentOp.specs[3].value}</span>
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------
                COLUMN 2 (Center - 5 Cols): Operation Intelligence
            ---------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold tracking-wider uppercase font-mono">
                <Zap className="w-3.5 h-3.5 text-[#f28c28]" />
                <span>{currentOp.badgeTag}</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                  {currentOp.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {currentOp.description}
                </p>
              </div>

              {/* 3 Core Engineering Highlights (Matching Reference Design!) */}
              <div className="space-y-2 pt-2">
                {currentOp.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-orange-100 text-[#f28c28] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-medium">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technical Spec Matrix */}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                {currentOp.specs.map((sp, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/70 rounded-lg p-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">{sp.label}:</span>
                    <span className="font-semibold text-slate-900 truncate block mt-0.5">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ----------------------------------------------------
                COLUMN 3 (Right - 3 Cols): Typical Performance & CTAs
            ---------------------------------------------------- */}
            <div className="lg:col-span-3 h-full flex flex-col justify-between bg-slate-50/80 rounded-xl border border-slate-200/90 p-5 shadow-sm">
              <div>
                <div className="border-b border-slate-200 pb-3 mb-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                    Engineering Reference
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 font-heading">
                    Typical Performance
                  </h4>
                </div>

                {/* Machining Parameters Table */}
                <div className="space-y-2.5 text-xs">
                  {currentOp.performance.map((param, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between pb-2 border-b border-slate-200/60 last:border-0"
                    >
                      <div>
                        <span className="font-mono font-bold text-[#f28c28] mr-1">{param.param}:</span>
                        <span className="text-slate-500 text-[11px]">({param.label})</span>
                      </div>
                      <div className="font-bold text-slate-900 font-mono text-right text-xs">
                        {param.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 space-y-2.5">
                <button
                  type="button"
                  onClick={handleOpenGeneralEnquiry}
                  className="w-full py-3 px-4 bg-[#f28c28] hover:bg-[#e07b18] text-white text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Quick RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#matching-tools"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllMatched(true);
                    const el = document.getElementById('matching-tools');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Matching Tools ({matchedProducts.length})</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            4. MATCHING IN-HOUSE TOOLS CATALOG (NO WHITE SQUARE CLASH!)
        ======================================================== */}
        <div id="matching-tools" className="mt-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#f28c28] font-mono">
                Certified In-House Production
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Matching Tools for {currentOp.title}
              </h3>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#f28c28] hover:text-[#d97706] transition-colors"
            >
              <span>Explore All 32+ Tooling SKUs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {matchedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-[#f28c28] p-4 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Image Container with Soft Studio Background (Blends Seamlessly!) */}
                  <div className="relative h-44 bg-gradient-to-b from-slate-50 to-slate-100/70 rounded-lg p-3 mb-3.5 flex items-center justify-center overflow-hidden border border-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* In-House Pill */}
                    <span className="absolute top-2 left-2 bg-[#f28c28] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                      IN-HOUSE
                    </span>

                    {/* Model Number Badge */}
                    <span className="absolute top-2 right-2 bg-slate-900/90 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded border border-slate-700">
                      {product.modelNumber}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#f28c28] transition-colors font-heading line-clamp-2 leading-snug">
                    {product.name}
                  </h4>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Spec Row */}
                  <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Diameter:</span>
                      <span className="font-semibold text-slate-800">{product.specs.diameterRange}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Inserts:</span>
                      <span className="font-mono font-semibold text-slate-800 truncate block">{product.specs.insertType}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenEnquiryForProduct(product)}
                    className="flex-1 py-2 px-3 bg-[#f28c28] hover:bg-[#e07b18] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Send className="w-3 h-3" />
                    <span>Quick RFQ</span>
                  </button>

                  <Link
                    href={`/products/${product.slug}`}
                    className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Specs</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            5. BOTTOM CTA BANNER: EXPLORE ENTIRE CATALOG
        ======================================================== */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow group"
          >
            <span>Explore Complete Industrial Tooling Catalog (32+ Precision Cutters)</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#f28c28]" />
          </Link>
        </div>

      </div>

      {/* ========================================================
          6. QUICK ENQUIRY MODAL (Full Interactivity)
      ======================================================== */}
      {selectedProduct && (
        <QuickEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          productName={selectedProduct.name}
          modelNumber={selectedProduct.modelNumber}
        />
      )}
    </section>
  );
}
