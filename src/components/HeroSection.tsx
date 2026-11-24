"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Anchor,
  Search,
  ArrowRight,
  Compass,
  Layers,
  Droplets,
  Disc,
  Hexagon,
  FileText,
  Building2,
  Clock,
  Menu,
  X,
  Target,
  Wrench,
  Cpu,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
} from "lucide-react";
import QuickEnquiryModal from "./QuickEnquiryModal";

interface ToolSpec {
  id: string;
  name: string;
  operationName: string;
  image: string;
  switcherIcon: string;
  diaRange: string;
  inserts: string;
  coolant: string;
  material: string;
  pin1: { title: string; subtitle: string; top: string; left: string };
  pin2: { title: string; subtitle: string; top: string; left: string };
  pin3: { title: string; subtitle: string; top: string; right: string };
}

const TOOLS_DATA: ToolSpec[] = [
  {
    id: "face-mill",
    name: "Face Mill",
    operationName: "Face & High-Feed Milling",
    image: "/images/hero-face-mill-pedestal.png",
    switcherIcon: "/images/showcase/tool-face-mill-v2.png",
    diaRange: "16 – 200 mm",
    inserts: "3 – 12",
    coolant: "Up to 70 Bar",
    material: "42CrMo4",
    pin1: {
      title: "Precision Pocket",
      subtitle: "(≤ 0.005 mm)",
      top: "14%",
      left: "4%",
    },
    pin2: {
      title: "70-Bar",
      subtitle: "Through-Coolant",
      top: "48%",
      left: "2%",
    },
    pin3: {
      title: "42CrMo4 Alloy Body",
      subtitle: "(HRC 48–52)",
      top: "44%",
      right: "2%",
    },
  },
  {
    id: "shoulder-mill",
    name: "Shoulder Mill",
    operationName: "Shoulder & End Milling",
    image: "/images/products/indexable-shoulder-milling-cutter-25mm/image-1.jpg",
    switcherIcon: "/images/showcase/tool-shoulder-mill-v2.png",
    diaRange: "16 – 50 mm",
    inserts: "2 – 6",
    coolant: "Direct Axial Jet",
    material: "42CrMo4 Pre-Hardened",
    pin1: {
      title: "90° True Square",
      subtitle: "(True Shoulder)",
      top: "14%",
      left: "4%",
    },
    pin2: {
      title: "APMT1135",
      subtitle: "Precision Seat",
      top: "48%",
      left: "2%",
    },
    pin3: {
      title: "Anti-Vibration",
      subtitle: "(Damped Shank)",
      top: "44%",
      right: "2%",
    },
  },
  {
    id: "u-drill",
    name: "U-Drill",
    operationName: "Holemaking & U-Drilling",
    image: "/images/products/indexable-u-drills-spmg/main.jpg",
    switcherIcon: "/images/showcase/tool-u-drill-v2.png",
    diaRange: "14 – 60 mm",
    inserts: "2 (Internal / External)",
    coolant: "Helical 70-Bar Channel",
    material: "Alloy Tool Steel HRC 52",
    pin1: {
      title: "SPMG Insert Seat",
      subtitle: "(Balanced Forces)",
      top: "14%",
      left: "4%",
    },
    pin2: {
      title: "Helical Flute",
      subtitle: "Chip Evacuation",
      top: "48%",
      left: "2%",
    },
    pin3: {
      title: "High-Tensile Body",
      subtitle: "(HRC 50–54)",
      top: "44%",
      right: "2%",
    },
  },
  {
    id: "boring-head",
    name: "Boring Head",
    operationName: "Precision Boring",
    image: "/images/products/modular-finish-boring-head/main.jpg",
    switcherIcon: "/images/showcase/tool-boring-head-v2.png",
    diaRange: "20 – 200 mm",
    inserts: "1 – 2",
    coolant: "Direct Through-Bore",
    material: "Hardened Ground Steel",
    pin1: {
      title: "0.002mm Dial",
      subtitle: "(H7 Tolerance)",
      top: "14%",
      left: "4%",
    },
    pin2: {
      title: "CKB Joint",
      subtitle: "Modular Serration",
      top: "48%",
      left: "2%",
    },
    pin3: {
      title: "CCMT Seat",
      subtitle: "(Fine Boring)",
      top: "44%",
      right: "2%",
    },
  },
  {
    id: "end-mill",
    name: "End Mill",
    operationName: "Die & Mold Profiling",
    image: "/images/products/zcc-indexable-end-mill-square-end/main.jpg",
    switcherIcon: "/images/showcase/tool-end-mill-v2.png",
    diaRange: "12 – 40 mm",
    inserts: "2 – 4",
    coolant: "Through-Tool Coolant",
    material: "Hardened EN24 Body",
    pin1: {
      title: "Helical Rake",
      subtitle: "(Chatter Free)",
      top: "14%",
      left: "4%",
    },
    pin2: {
      title: "Toroid Radius",
      subtitle: "Profiling Pockets",
      top: "48%",
      left: "2%",
    },
    pin3: {
      title: "Ni-Cr Coating",
      subtitle: "(Wear Barrier)",
      top: "44%",
      right: "2%",
    },
  },
  {
    id: "chamfer-tool",
    name: "Chamfer Tool",
    operationName: "Specialty & Chamfering",
    image: "/images/products/indexable-chamfer-tools-45-degree/main.jpg",
    switcherIcon: "/images/showcase/tool-chamfer-tool-v2.png",
    diaRange: "10 – 80 mm",
    inserts: "1 – 3",
    coolant: "Standard Jet",
    material: "High-Toughness Steel",
    pin1: {
      title: "45° / 60° Bevel",
      subtitle: "(Clean Edge)",
      top: "14%",
      left: "4%",
    },
    pin2: {
      title: "Standard ISO",
      subtitle: "Insert Pocket",
      top: "48%",
      left: "2%",
    },
    pin3: {
      title: "Deburr Head",
      subtitle: "(High-Feed)",
      top: "44%",
      right: "2%",
    },
  },
];

const OPERATIONS = [
  { name: "Face & High-Feed Milling", icon: Target, toolIdx: 0 },
  { name: "Shoulder & End Milling", icon: Target, toolIdx: 1 },
  { name: "Holemaking & U-Drilling", icon: Wrench, toolIdx: 2 },
  { name: "Precision Boring", icon: Target, toolIdx: 3 },
  { name: "Die & Mold Profiling", icon: Cpu, toolIdx: 4 },
  { name: "Specialty & Chamfering", icon: Compass, toolIdx: 5 },
];

export default function HeroSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  const currentTool = TOOLS_DATA[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev === 0 ? TOOLS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev === TOOLS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#070c15] text-white border-b border-slate-800">
      {/* =================================================================
          RAW HIGH-RES CNC WORKSHOP BACKGROUND IMAGE
          ================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <Image
          src="/images/hero-bg-cnc.jpg"
          alt="Precision CNC Machining Workshop"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        {/* Subtle overlays for maximum typography legibility while keeping visual sparks and orange flares */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d17]/85 via-[#070d17]/30 to-[#070d17]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070d17]/80 via-transparent to-[#070d17]/40" />
      </div>

      <div className="relative z-10 flex flex-col justify-between max-w-[1536px] mx-auto min-h-[580px] lg:min-h-[620px] pt-2">
        {/* =================================================================
            1. UPPER OPERATIONAL BADGES DOCK (Unified Pill Capsule)
            ================================================================= */}
        <div className="pt-3 px-4 sm:px-8 lg:px-12 flex items-center justify-center lg:justify-end">
          <div className="inline-flex items-center gap-3 sm:gap-5 px-3.5 sm:px-5 py-1.5 rounded-full bg-[#0c1421]/90 border border-slate-700/70 backdrop-blur-md text-slate-200 text-[11px] sm:text-xs divide-x divide-slate-700/60">
            {/* Plant Operational */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-200 whitespace-nowrap">Plant Operational</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold uppercase tracking-wider">
                Live
              </span>
            </div>

            {/* ISO 9001:2015 */}
            <div className="pl-3 sm:pl-5 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#f28c28]" />
              <span className="font-semibold text-slate-200 whitespace-nowrap">ISO 9001:2015 Certified</span>
            </div>

            {/* Zeiss CMM */}
            <div className="pl-3 sm:pl-5 flex items-center gap-2">
              <div className="px-1 py-0.2 bg-[#004280] text-white text-[9px] font-black rounded-sm tracking-tighter">
                ZEISS
              </div>
              <span className="font-semibold text-slate-200 whitespace-nowrap">Zeiss CMM Verification</span>
            </div>

            {/* Direct JNPT */}
            <div className="pl-3 sm:pl-5 hidden md:flex items-center gap-2">
              <Anchor className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold text-slate-200 whitespace-nowrap">Direct JNPT Port Connectivity</span>
            </div>
          </div>
        </div>

        {/* =================================================================
            3. MAIN HERO COCKPIT GRID
            Left: Copy & CTAs & Stats (5 cols)
            Center: 3D Tool on Pedestal + Pins + Spec Strip (4.5 cols)
            Right: Operation Selector (2.5 cols)
            ================================================================= */}
        <div className="px-4 sm:px-8 lg:px-12 py-4 sm:py-5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          {/* Left Column: Copy, CTAs, Stats */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div>
              {/* Eyebrow with Orange Accent Line */}
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  PRECISION CUTTING TOOLS
                </span>
                <span className="w-12 h-[2px] bg-[#f28c28] rounded-full"></span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white leading-[1.08] tracking-tight">
                Advanced Tooling
                <br />
                Solutions for
                <br />
                <span className="text-[#f28c28]">Modern Manufacturing</span>
              </h1>

              {/* Subheading */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mt-3">
                High-precision indexable cutters, modular tools & custom solutions
                engineered for productivity, accuracy and longer tool life.
              </p>
            </div>

            {/* 3 Action Buttons in a Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f28c28] hover:bg-[#e07b18] text-white text-xs sm:text-sm font-bold rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setRfqModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#111927]/90 hover:bg-[#182335] border border-slate-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer backdrop-blur-sm"
              >
                <FileText className="w-4 h-4 text-slate-300" />
                <span>Request an RFQ</span>
              </button>

              <a
                href="https://wa.me/919822054128?text=Hello%20MAMTA%20Tools%2C%20I%20would%20like%20to%20discuss%20cutting%20tools%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#0e3a24] hover:bg-[#144f32] border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-semibold rounded-lg transition-colors backdrop-blur-sm"
              >
                <div className="relative w-4 h-4">
                  <Image src="/images/whatsapp.svg" alt="WhatsApp" fill />
                </div>
                <span className="text-white">WhatsApp Desk</span>
              </a>
            </div>

            {/* 4 Stats in a Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-orange-500/10 flex items-center justify-center shrink-0 text-[#f28c28]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-black text-white leading-tight">20+</div>
                  <div className="text-[10px] text-slate-400 leading-tight">Years of Expertise</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-orange-500/10 flex items-center justify-center shrink-0 text-[#f28c28]">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-black text-white leading-tight">&lt; 0.005 mm</div>
                  <div className="text-[10px] text-slate-400 leading-tight">Runout Accuracy</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-orange-500/10 flex items-center justify-center shrink-0 text-[#f28c28]">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-black text-white leading-tight">500+</div>
                  <div className="text-[10px] text-slate-400 leading-tight">Plants Served</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-orange-500/10 flex items-center justify-center shrink-0 text-[#f28c28]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-black text-white leading-tight">15+</div>
                  <div className="text-[10px] text-slate-400 leading-tight">Export Nations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: 3D Cutting Tool on Pedestal with Callout Pins */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-[4/3] flex items-center justify-center">
              {/* Main Cutting Tool Graphic on Illuminated Pedestal */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={currentTool.image}
                  alt={currentTool.name}
                  fill
                  priority
                  className="object-contain transition-all duration-300"
                />
              </div>

              {/* Pin 1: Top Left (Precision Pocket) */}
              <div
                className="absolute z-20 pointer-events-none transition-all duration-300"
                style={{ top: currentTool.pin1.top, left: currentTool.pin1.left }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0b1320]/95 border border-[#f28c28] flex items-center justify-center text-[#f28c28]">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-[#0b1320]/95 border border-slate-700/80 backdrop-blur-md">
                    <div className="text-[10px] font-bold text-white leading-tight whitespace-nowrap">
                      {currentTool.pin1.title}
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 leading-tight">
                      {currentTool.pin1.subtitle}
                    </div>
                  </div>
                  <div className="w-9 border-b-2 border-dashed border-[#f28c28] relative">
                    <div className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-[#f28c28]" />
                  </div>
                </div>
              </div>

              {/* Pin 2: Middle Left (70-Bar Through-Coolant) */}
              <div
                className="absolute z-20 pointer-events-none transition-all duration-300"
                style={{ top: currentTool.pin2.top, left: currentTool.pin2.left }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0b1320]/95 border border-[#f28c28] flex items-center justify-center text-[#f28c28]">
                    <Droplets className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-[#0b1320]/95 border border-slate-700/80 backdrop-blur-md">
                    <div className="text-[10px] font-bold text-white leading-tight whitespace-nowrap">
                      {currentTool.pin2.title}
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 leading-tight">
                      {currentTool.pin2.subtitle}
                    </div>
                  </div>
                  <div className="w-9 border-b-2 border-dashed border-[#f28c28] relative">
                    <div className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-[#f28c28]" />
                  </div>
                </div>
              </div>

              {/* Pin 3: Right (42CrMo4 Alloy Body) */}
              <div
                className="absolute z-20 pointer-events-none transition-all duration-300"
                style={{ top: currentTool.pin3.top, right: currentTool.pin3.right }}
              >
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-7 h-7 rounded-lg bg-[#0b1320]/95 border border-[#f28c28] flex items-center justify-center text-[#f28c28]">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-[#0b1320]/95 border border-slate-700/80 backdrop-blur-md">
                    <div className="text-[10px] font-bold text-white leading-tight whitespace-nowrap">
                      {currentTool.pin3.title}
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 leading-tight">
                      {currentTool.pin3.subtitle}
                    </div>
                  </div>
                  <div className="w-9 border-b-2 border-dashed border-[#f28c28] relative">
                    <div className="absolute -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-[#f28c28]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Spec Strip Underneath Pedestal */}
            <div className="w-full max-w-[420px] bg-[#0c1421]/95 border border-slate-700/70 rounded-xl px-3.5 py-2 mt-1 backdrop-blur-md">
              <div className="grid grid-cols-4 gap-2 text-center divide-x divide-slate-800">
                <div className="px-1">
                  <div className="text-[9px] text-slate-400 font-mono flex items-center justify-center gap-1">
                    <Disc className="w-2.5 h-2.5 text-slate-400" />
                    <span>Ø Range</span>
                  </div>
                  <div className="text-[11px] font-bold text-white truncate mt-0.5">
                    {currentTool.diaRange}
                  </div>
                </div>

                <div className="px-1">
                  <div className="text-[9px] text-slate-400 font-mono flex items-center justify-center gap-1">
                    <Hexagon className="w-2.5 h-2.5 text-slate-400" />
                    <span>No. of Inserts</span>
                  </div>
                  <div className="text-[11px] font-bold text-white truncate mt-0.5">
                    {currentTool.inserts}
                  </div>
                </div>

                <div className="px-1">
                  <div className="text-[9px] text-slate-400 font-mono flex items-center justify-center gap-1">
                    <Droplets className="w-2.5 h-2.5 text-slate-400" />
                    <span>Coolant</span>
                  </div>
                  <div className="text-[11px] font-bold text-white truncate mt-0.5">
                    {currentTool.coolant}
                  </div>
                </div>

                <div className="px-1">
                  <div className="text-[9px] text-slate-400 font-mono flex items-center justify-center gap-1">
                    <Layers className="w-2.5 h-2.5 text-slate-400" />
                    <span>Body Material</span>
                  </div>
                  <div className="text-[11px] font-bold text-white truncate mt-0.5">
                    {currentTool.material}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Operation Selector Card */}
          <div className="lg:col-span-2 bg-[#0c1421]/90 border border-slate-700/70 rounded-2xl p-3 backdrop-blur-md flex flex-col justify-between">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#f28c28]" />
              <span>Operation Selector</span>
            </div>

            <div className="space-y-1.5">
              {OPERATIONS.map((op, idx) => {
                const Icon = op.icon;
                const isActive = selectedIdx === op.toolIdx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIdx(op.toolIdx)}
                    className={`w-full text-left px-2.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-[#f28c28] to-[#e07b18] text-white font-bold"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                      <span className="truncate">{op.name}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-slate-500"}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =================================================================
            4. BOTTOM QUICK TOOL SWITCHER STRIP (6 Tools)
            ================================================================= */}
        <div className="px-4 sm:px-8 lg:px-12 py-3 bg-[#070c14]/90 border-t border-slate-800/80 flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar backdrop-blur-md">
          {/* Label + Left Arrow */}
          <div className="shrink-0 flex items-center gap-3 pr-2 border-r border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-[#f28c28]/30 flex items-center justify-center text-[#f28c28]">
              <LayoutGrid className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-black text-white leading-tight">Quick Tool</div>
              <div className="text-[10px] text-slate-400 font-mono">Switcher (6)</div>
            </div>
            <button
              onClick={handlePrev}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label="Previous tool"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Tool Cards */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-max">
            {TOOLS_DATA.map((t, idx) => {
              const isActive = selectedIdx === idx;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all cursor-pointer min-w-[95px] sm:min-w-[110px] ${
                    isActive
                      ? "bg-[#141f30] border-2 border-[#f28c28] scale-[1.02]"
                      : "bg-[#0a111a] border border-slate-800 hover:border-slate-700 hover:bg-[#101b2b]"
                  }`}
                >
                  <div className="relative w-12 h-10 sm:w-14 sm:h-11 flex items-center justify-center mb-1">
                    <Image
                      src={t.switcherIcon}
                      alt={t.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div
                    className={`text-[11px] font-semibold tracking-tight truncate ${
                      isActive ? "text-white font-bold" : "text-slate-300"
                    }`}
                  >
                    {t.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors shrink-0"
            aria-label="Next tool"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RFQ Modal */}
      {rfqModalOpen && (
        <QuickEnquiryModal
          isOpen={rfqModalOpen}
          onClose={() => setRfqModalOpen(false)}
          productName={`MAMTA ${currentTool.name} (Hero Cockpit RFQ)`}
        />
      )}
    </div>
  );
}
