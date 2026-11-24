import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Award, Shield, Globe, ArrowRight, CheckCircle2,
  Settings, Zap, Factory, Target, Users, Cpu, Layers,
  Star, FileText, Phone, MessageSquare, UploadCloud,
  Clock, ShieldCheck, MapPin, Sparkles, Check, ChevronRight,
  Anchor, Package, DollarSign, Crosshair, Radio
} from 'lucide-react';
import {
  COMPANY_INFO, INDUSTRIES, TESTIMONIALS
} from '@/data/siteData';
import HeroSection from '@/components/HeroSection';
import HomeToolFinder from '@/components/HomeToolFinder';
import HomeBentoSpecs from '@/components/HomeBentoSpecs';
import HomeProductsSection from '@/components/HomeProductsSection';
import HomeSpeedFeedSection from '@/components/HomeSpeedFeedSection';
import HomeManufacturingProcess from '@/components/HomeManufacturingProcess';
import HomeIndustriesSection from '@/components/HomeIndustriesSection';

export const metadata: Metadata = {
  title: "Precision Cutting Tools Manufacturer & Exporter | MAMTA Tools Pune",
  description: "ISO 9001:2015 certified manufacturer of high-performance indexable face mills, 3D/5D U-drills, micro-boring units, and custom CNC cutting tools in Pune, India. Global export to USA, Germany, UAE & 15+ countries.",
  keywords: [
    "Precision Cutting Tools Manufacturer",
    "Indexable Face Milling Cutters",
    "U-Drill Manufacturer India",
    "Micro Boring Units Pune",
    "High Feed Milling Cutters",
    "Carbide Inserts Supplier",
    "Custom Cutting Tools Exporter",
    "MAMTA Tools Pune"
  ]
};

export default function HomePage() {
  const whatsappCleanNumber = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="flex flex-col w-full bg-white text-navy-950">

      {/* ========================================================
          1. HERO COCKPIT & INTERACTIVE SHOWCASE (Preserved)
      ======================================================== */}
      <HeroSection />

      {/* ========================================================
          2. INTERACTIVE CNC TOOL SELECTOR & OPERATION FINDER
      ======================================================== */}
      <HomeToolFinder />

      {/* ========================================================
          3. BENTO GRID: THE MAMTA ENGINEERING ADVANTAGE
      ======================================================== */}
      <HomeBentoSpecs />

      {/* ========================================================
          4. PROPRIETARY IN-HOUSE LINES & CORE CATEGORIES
      ======================================================== */}
      <HomeProductsSection />

      {/* ========================================================
          5. INTERACTIVE CUTTING SPEED & FEED (Vc / fz) ASSISTANT
      ======================================================== */}
      <HomeSpeedFeedSection />

      {/* ========================================================
          6. 6-STAGE PRECISION MANUFACTURING PROTOCOL
      ======================================================== */}
      <HomeManufacturingProcess />

      {/* ========================================================
          7. INDUSTRIES WE SERVE: PRODUCTION APPLICATIONS
      ======================================================== */}
      <HomeIndustriesSection />

      {/* ========================================================
          8. WORLDWIDE EXPORT & SUPPLY NETWORK
      ======================================================== */}
      <section
        id="export-network"
        className="py-16 sm:py-20 lg:py-24 bg-[#080f1e] text-white relative overflow-hidden border-b border-slate-800"
      >
        {/* ========================================================
            PRODUCT-RELATED BACKGROUND: Real Tool Core Drill Blueprint
        ======================================================== */}
        <div
          className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-[0.04] pointer-events-none select-none hidden md:block"
          style={{
            backgroundImage: `url('/images/products/indexable-core-drill/drawing.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'invert(1)'
          }}
        />

        {/* Precision Blueprint Grid & World Route Line Accents */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Animated Rotating Radar Rings Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-[0.10] select-none">
          <div className="w-full h-full rounded-full border border-dashed border-[#f28c28] animate-spin-slow" />
          <div className="absolute inset-28 rounded-full border border-cyan-400 animate-spin-reverse-slow" />
        </div>

        {/* Glow Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-500/[0.06] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#f28c28] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-5 h-5 rounded-full bg-[#f28c28] text-white flex items-center justify-center text-[11px] font-black">
                8
              </span>
              <span>Worldwide Export &amp; Supply Network</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
              Export Network Serving 15+ Industrial Nations
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Equipped for seamless international trade with hermetic VCI export packaging, Nhava Sheva (JNPT) sea freight, and express air cargo logistics worldwide.
            </p>
          </div>

          {/* Top 10 Export Markets Badges (Matching Master Mockup) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
            {COMPANY_INFO.exportCountries.slice(0, 10).map((country) => (
              <div
                key={country.code}
                className="bg-[#0f1b2f] p-4 rounded-xl border border-slate-800 text-center hover:border-[#f28c28] transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Active Pulse Dot on Hover */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#f28c28] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="text-xl font-black font-heading text-[#f28c28] mb-0.5 group-hover:scale-105 transition-transform inline-block font-mono">
                  {country.code}
                </div>
                <div className="text-xs font-bold text-white truncate">{country.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-mono">{country.region}</div>
              </div>
            ))}
          </div>

          {/* 4 Logistics & Export Advantages (Matching Master Reference) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="bg-[#0f1b2f] p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 text-[#f28c28] flex items-center justify-center">
                <Package className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Hermetic VCI Packaging</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Coated with heavy-grade VCI rust-preventive oil and vacuum heat-sealed in moisture-barrier film.
              </p>
            </div>

            <div className="bg-[#0f1b2f] p-5 rounded-xl border border-slate-800 space-y-2 relative">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center relative">
                <Anchor className="w-4 h-4 relative z-10" />
                <span className="absolute inset-0 rounded-lg bg-cyan-400/20 animate-beacon" />
              </div>
              <h4 className="text-sm font-bold text-white">Nhava Sheva (JNPT) - 3 Hrs</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct highway transit from Pune facility to JNPT container terminal and Mumbai air cargo hub.
              </p>
            </div>

            <div className="bg-[#0f1b2f] p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Multi-Currency Quotes</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Commercial invoicing supported in USD ($), EUR (€), GBP (£), AED, and INR.
              </p>
            </div>

            <div className="bg-[#0f1b2f] p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Incoterms (FOB, CIF, DAP)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Certified Mill Test Reports, Certificate of Origin, and export documentation with every consignment.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/export-global-supply"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f28c28] hover:bg-[#e07b18] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow hover:shadow-md group"
            >
              <span>Explore International Supply &amp; Overseas Dealerships</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. CUSTOMER FEEDBACK & MACHINE SHOP CASE STUDIES
      ======================================================== */}
      <section
        id="case-studies"
        className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden"
      >
        {/* ========================================================
            PRODUCT-RELATED BACKGROUND: Real Side & Face Cutter Blueprint
        ======================================================== */}
        <div
          className="absolute -top-16 -left-16 w-[520px] h-[520px] opacity-[0.05] pointer-events-none select-none hidden md:block"
          style={{
            backgroundImage: `url('/images/products/indexable-side-and-face-milling-cutter/drawing.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'invert(1) grayscale(100%)'
          }}
        />

        {/* Precision Blueprint Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-5 h-5 rounded-full bg-[#f28c28] text-white flex items-center justify-center text-[11px] font-black">
                9
              </span>
              <span>Customer Feedback &amp; Machine Shop Case Studies</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
              Trusted by 500+ Machining Plants Worldwide
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Discover why leading Tier-1 automotive suppliers, aerospace machining centers, and heavy valve plants choose MAMTA cutting tools.
            </p>
          </div>

          {/* 3 High-Impact Machine Shop Case Study Cards (Matching Master Reference) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1: Automotive */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 hover:border-[#f28c28] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f28c28] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Metric Badge */}
                <div className="inline-block px-2.5 py-1 rounded bg-orange-50 border border-orange-200 text-orange-800 text-[11px] font-mono font-bold mb-3">
                  -28% Cycle Time | +40% Tool Life
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Cycle time reduced by 28% and tool life increased by 40% using MAMTA face mills in our transmission case line.&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#f28c28] font-black text-xs flex items-center justify-center flex-shrink-0">
                  PM
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Production Manager</div>
                  <div className="text-[11px] text-slate-500">Tier-1 Automotive Supplier, Pune</div>
                </div>
              </div>
            </div>

            {/* Card 2: Aerospace */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 hover:border-[#f28c28] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f28c28] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Metric Badge */}
                <div className="inline-block px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-bold mb-3">
                  ±0.005mm Inconel Runout Accuracy
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Excellent accuracy (±0.005 mm) and reliable performance in Inconel 718 machining. The boring heads perform on par with German imports.&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#f28c28] font-black text-xs flex items-center justify-center flex-shrink-0">
                  MH
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Machining Head</div>
                  <div className="text-[11px] text-slate-500">Aerospace Component Manufacturer, Bengaluru</div>
                </div>
              </div>
            </div>

            {/* Card 3: Industrial Valves */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 hover:border-[#f28c28] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f28c28] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Metric Badge */}
                <div className="inline-block px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-mono font-bold mb-3">
                  +32% Valve Machining Productivity
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Consistent quality and quick custom tooling support. Our valve machining productivity improved by 32% within the first month.&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#f28c28] font-black text-xs flex items-center justify-center flex-shrink-0">
                  PH
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Plant Head</div>
                  <div className="text-[11px] text-slate-500">Industrial Valve Manufacturer, Gujarat</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          10. HIGH-CONVERTING BLUEPRINT & RFQ LAUNCHPAD
      ======================================================== */}
      <section
        id="rfq-launchpad"
        className="py-16 sm:py-20 lg:py-24 bg-[#070d18] text-white relative overflow-hidden"
      >
        {/* ========================================================
            PRODUCT-RELATED BACKGROUND: Real CAD Tooling Schematics
        ======================================================== */}
        <div
          className="absolute -top-24 -left-20 w-[600px] h-[600px] opacity-[0.05] pointer-events-none select-none hidden md:block"
          style={{
            backgroundImage: `url('/images/products/snmx-12-korloy-face-mill-cutter/drawing.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'invert(1)'
          }}
        />

        {/* CAD Blueprint Schematic Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Glow Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-500/[0.08] blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-[#0c1524] via-[#0b1322] to-[#070d18] rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">

            {/* Animated Laser Sweep Line across Launchpad */}
            <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#f28c28] to-transparent shadow-[0_0_8px_#f28c28] pointer-events-none animate-laser opacity-50 z-20" />

            {/* Header Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#f28c28] text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-5 h-5 rounded-full bg-[#f28c28] text-white flex items-center justify-center text-[11px] font-black">
                  10
                </span>
                <span>High-Converting Blueprint &amp; RFQ Launchpad</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: Value Proposition & SLA */}
              <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-[#f28c28] bg-orange-500/10 border border-orange-500/20 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24-Hour SLA Guarantee</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
                  Upload Your Drawing &amp; Get a Quote Within 24 Hours
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Send your component blueprint or cutting tool specifications. Our Pune application engineers deliver 3D CAD tooling models, insert recommendations, and quotation pricing within 24 hours.
                </p>

                {/* File Formats Supported */}
                <div className="pt-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Accepted CAD Blueprint Formats:
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start text-[11px] font-mono font-bold">
                    {['.STEP', '.STP', '.IGS', '.DWG', '.DXF', '.PDF'].map((fmt) => (
                      <span key={fmt} className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700 text-slate-300">
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4 Trust Pillars */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#f28c28] flex-shrink-0" />
                    <span>24-Hour SLA Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#f28c28] flex-shrink-0" />
                    <span>Expert engineering review</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#f28c28] flex-shrink-0" />
                    <span>Custom tool layout &amp; pricing</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#f28c28] flex-shrink-0" />
                    <span>Direct support from Pune team</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Launch Actions Card */}
              <div className="lg:col-span-5 bg-[#0b1322] p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-3.5 shadow-xl">
                <div className="text-center pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Submit Component Drawing / RFQ
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Fast quotation response from application engineers
                  </p>
                </div>

                <Link
                  href="/request-a-quote"
                  className="w-full py-3.5 px-5 bg-[#f28c28] hover:bg-[#e07b18] text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 group cursor-pointer shadow"
                >
                  <UploadCloud className="w-4 h-4" />
                  <span>Upload Drawing &amp; Request RFQ</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`https://wa.me/${whatsappCleanNumber}?text=${encodeURIComponent("Hello MAMTA Tools Pune, I have a drawing and cutting tool requirement. I would like to discuss with an application engineer.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <img src="/images/whatsapp.svg" alt="" className="w-4 h-4 object-contain brightness-0 invert" />
                  <span>Chat on WhatsApp Directly</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f28c28]" />
                  <span>Call Pune Desk: {COMPANY_INFO.phonePrimary}</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
