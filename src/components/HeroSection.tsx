'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Award, ArrowRight, ChevronLeft, ChevronRight,
  CheckCircle2, Zap, Shield, Globe
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

/** Featured products shown in the hero carousel */
const HERO_PRODUCTS = [
  {
    slug: 'face-milling-cutter-100mm-en-steel',
    image: '/images/products/face-milling-cutter-100mm-en-steel/main.jpg',
    name: 'Face Milling Cutter — 100mm',
    series: 'MT-FM45 Series',
    tag: 'Bestseller',
    tagColor: 'bg-brand-orange',
    spec1Label: 'Insert Style',
    spec1Value: 'SEET12 / SEHT12',
    spec2Label: 'Diameter Range',
    spec2Value: '63mm – 160mm',
    href: '/products/face-milling-cutter-100mm-en-steel',
  },
  {
    slug: 'high-feed-face-milling-cutter',
    image: '/images/products/high-feed-face-milling-cutter/image-1.jpg',
    name: 'High-Feed Face Milling Cutter',
    series: 'MT-HF Series',
    tag: 'High Performance',
    tagColor: 'bg-brand-teal',
    spec1Label: 'Feed Rate',
    spec1Value: 'up to 3× conventional',
    spec2Label: 'Lead Angle',
    spec2Value: '17° Low Cutting Forces',
    href: '/products/high-feed-face-milling-cutter',
  },
  {
    slug: 'snmx-12-korloy-face-mill-cutter',
    image: '/images/products/snmx-12-korloy-face-mill-cutter/image-1.jpg',
    name: 'SNMX-12 Korloy Face Mill',
    series: 'MT-KFM Series',
    tag: 'Heavy Duty',
    tagColor: 'bg-emerald-600',
    spec1Label: 'Insert',
    spec1Value: 'SNMX 1206',
    spec2Label: 'Cutting Width',
    spec2Value: '75mm – 200mm',
    href: '/products/snmx-12-korloy-face-mill-cutter',
  },
  {
    slug: 'face-milling-cutter-multi-angle',
    image: '/images/products/face-milling-cutter-multi-angle/image-1.jpg',
    name: 'Multi-Angle Face Mill',
    series: 'MT-MA Series',
    tag: 'Versatile',
    tagColor: 'bg-purple-600',
    spec1Label: 'Lead Angle',
    spec1Value: '45° / 60° / 75° / 90°',
    spec2Label: 'Application',
    spec2Value: 'Steel, CI, Aluminium',
    href: '/products/face-milling-cutter-multi-angle',
  },
  {
    slug: 'indexable-ball-nose-cutters',
    image: '/images/products/indexable-ball-nose-cutters/image-1.jpg',
    name: 'Indexable Ball Nose Cutters',
    series: 'MT-BN Series',
    tag: 'Die & Mold',
    tagColor: 'bg-sky-600',
    spec1Label: 'Application',
    spec1Value: '3D Surface Milling',
    spec2Label: 'Diameter',
    spec2Value: '16mm – 50mm',
    href: '/products/indexable-ball-nose-cutters',
  },
  {
    slug: 'face-milling-cutter-heavy-duty-100mm',
    image: '/images/products/face-milling-cutter-heavy-duty-100mm/image-1.jpg',
    name: 'Heavy Duty Face Mill — 100mm',
    series: 'MT-HD Series',
    tag: 'Heavy Cuts',
    tagColor: 'bg-red-600',
    spec1Label: 'Application',
    spec1Value: 'Cast Iron & Hardened Steel',
    spec2Label: 'No. of Inserts',
    spec2Value: '5 – 10 pockets',
    href: '/products/face-milling-cutter-heavy-duty-100mm',
  },
];

const TRUST_STATS = [
  { value: '20+', label: 'Years Excellence', color: 'text-white' },
  { value: '500+', label: 'Industrial Clients', color: 'text-brand-orange' },
  { value: '15+', label: 'Export Countries', color: 'text-brand-teal' },
  { value: '< 0.005mm', label: 'Runout Tolerance', color: 'text-emerald-400' },
];

const FEATURE_PILLS = [
  { icon: Shield, text: 'ISO 9001:2015 TUV Austria' },
  { icon: Zap, text: 'Through-Coolant Engineering' },
  { icon: Globe, text: 'Global Exporter — USA, Germany, UAE' },
  { icon: CheckCircle2, text: 'CMM Verified Every Tool' },
];

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goTo = useCallback((idx: number, dir: 'left' | 'right' = 'right') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setActiveIdx(idx);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((activeIdx + 1) % HERO_PRODUCTS.length, 'right');
  }, [activeIdx, goTo]);

  const prev = useCallback(() => {
    goTo((activeIdx - 1 + HERO_PRODUCTS.length) % HERO_PRODUCTS.length, 'left');
  }, [activeIdx, goTo]);

  // Auto-rotate every 4s
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const product = HERO_PRODUCTS[activeIdx];

  return (
    <section className="relative bg-navy-950 text-white overflow-hidden min-h-[88vh] flex items-center">
      {/* ── Background layers ─────────────────────── */}
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Orange radial glow — left */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-orange/[0.08] blur-[120px] rounded-full pointer-events-none" />
      {/* Teal glow — right */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-teal/[0.07] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">

          {/* ═══════════════════════════════════════
              LEFT: Copy + CTAs + Stats
          ═══════════════════════════════════════ */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-brand-orange backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 flex-shrink-0" />
              <span>ISO 9001:2015 Certified by TUV Austria</span>
              <span className="hidden sm:inline text-steel-500">•</span>
              <span className="hidden sm:inline text-steel-300">Est. 2004, Pune India</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-black tracking-tight leading-[1.08] font-heading text-white">
              Precision Cutting Tools{' '}
              <span className="text-brand-orange">for Modern</span>{' '}
              <span className="text-brand-orange">Manufacturing</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-sm sm:text-base text-steel-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Empowering automotive, aerospace, die &amp; mold, and heavy
              engineering plants with ultra-rigid indexable face mills, 3D/5D
              U-drills, micro-vernier boring units, and custom tooling since 2004.
            </p>

            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto lg:mx-0">
              {FEATURE_PILLS.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-[11px] text-steel-300 bg-white/[0.04] border border-white/[0.07] rounded-lg px-2.5 py-2"
                >
                  <Icon className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                  <span className="leading-tight">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <Link
                href="/products"
                className="px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold rounded-xl shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 transition-all flex items-center gap-2 group"
              >
                Explore Product Catalog
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/request-a-quote"
                className="px-6 py-3.5 bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm font-bold rounded-xl border border-white/10 hover:border-white/20 transition-all"
              >
                Request a Quote (RFQ)
              </Link>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-sm font-bold rounded-xl border border-[#25D366]/30 hover:border-[#25D366]/50 transition-all flex items-center gap-2"
              >
                <img src="/images/whatsapp.svg" alt="" className="w-4 h-4 object-contain" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust stats */}
            <div className="pt-5 border-t border-white/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {TRUST_STATS.map(({ value, label, color }) => (
                <div key={label}>
                  <div className={`text-xl sm:text-2xl font-extrabold ${color}`}>{value}</div>
                  <div className="text-[11px] text-steel-500 leading-tight mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════
              RIGHT: Product Showcase
          ═══════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col gap-5">

            {/* Main product card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-gradient-to-b from-navy-900/80 to-navy-950/90 shadow-2xl backdrop-blur-sm">

              {/* Product image area */}
              <div className="relative h-72 sm:h-80 lg:h-[340px] w-full bg-gradient-to-br from-navy-800/60 to-navy-900/80 overflow-hidden flex items-center justify-center p-6">

                {/* Decorative corner lines */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-orange/40 rounded-tl-sm pointer-events-none" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-brand-orange/40 rounded-tr-sm pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-brand-orange/40 rounded-bl-sm pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand-orange/40 rounded-br-sm pointer-events-none" />

                {/* Animated product image */}
                <img
                  key={product.slug}
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-contain drop-shadow-2xl transition-all duration-300 ${
                    isAnimating
                      ? direction === 'right'
                        ? 'opacity-0 translate-x-4 scale-95'
                        : 'opacity-0 -translate-x-4 scale-95'
                      : 'opacity-100 translate-x-0 scale-100'
                  }`}
                />

                {/* Series badge */}
                <div className={`absolute top-4 left-14 ${product.tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wide uppercase`}>
                  {product.tag}
                </div>

                {/* CMM Verified badge */}
                <div className="absolute top-4 right-14 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-lg border border-emerald-500/40">
                  CMM VERIFIED
                </div>

                {/* Nav arrows */}
                <button
                  onClick={prev}
                  aria-label="Previous product"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 border border-white/10 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next product"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 border border-white/10 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Product info footer */}
              <div className="p-5 border-t border-white/[0.06] space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-mono text-brand-orange tracking-widest uppercase">{product.series}</div>
                    <h3 className="text-base font-bold text-white leading-tight mt-0.5">{product.name}</h3>
                  </div>
                  <Link
                    href={product.href}
                    className="flex-shrink-0 px-3.5 py-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-navy-900/60 rounded-lg px-3 py-2 border border-white/[0.05]">
                    <div className="text-steel-500 text-[10px] uppercase tracking-wide mb-0.5">{product.spec1Label}</div>
                    <div className="text-white font-semibold font-mono">{product.spec1Value}</div>
                  </div>
                  <div className="bg-navy-900/60 rounded-lg px-3 py-2 border border-white/[0.05]">
                    <div className="text-steel-500 text-[10px] uppercase tracking-wide mb-0.5">{product.spec2Label}</div>
                    <div className="text-white font-semibold font-mono">{product.spec2Value}</div>
                  </div>
                </div>

                {/* Dot indicators */}
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  {HERO_PRODUCTS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i, i > activeIdx ? 'right' : 'left')}
                      aria-label={`Go to product ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeIdx
                          ? 'w-6 h-2 bg-brand-orange'
                          : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mini thumbnail strip */}
            <div className="grid grid-cols-6 gap-2">
              {HERO_PRODUCTS.map((p, i) => (
                <button
                  key={p.slug}
                  onClick={() => goTo(i, i > activeIdx ? 'right' : 'left')}
                  aria-label={`Show ${p.name}`}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    i === activeIdx
                      ? 'border-brand-orange shadow-lg shadow-brand-orange/30 scale-105'
                      : 'border-white/10 hover:border-white/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover bg-navy-900"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

