'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Globe, Award, ShieldCheck, 
  Download, ArrowRight, CheckCircle2, Sparkles
} from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '@/data/siteData';
import CatalogDownloadModal from './CatalogDownloadModal';

export default function Footer() {
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-navy-950 text-steel-300 pt-16 lg:pt-20 pb-10 border-t border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* CTA BANNER (top of footer) */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy-900 via-navy-900 to-navy-800 border border-steel-700/50 shadow-2xl p-8 sm:p-10 lg:p-12 mb-16 lg:mb-20">
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Left Column: Tagline + Headline + Supporting Text */}
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Precision Engineering On Demand</span>
                </div>
                
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Need a Custom Cutting Tool?
                </h2>
                
                <p className="text-steel-300 text-sm sm:text-base leading-relaxed">
                  Upload your workpiece drawings or tooling specifications. Our Pune application engineering team delivers custom-designed CAD models, tool path recommendations, and formal quotation within 24 hours.
                </p>
              </div>

              {/* Right Column: Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-sm sm:text-base font-bold shadow-md hover:shadow-glow-orange hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>Request an RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setCatalogModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-navy-950/70 hover:bg-navy-900 text-white text-sm sm:text-base font-semibold border border-steel-600 hover:border-steel-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <Download className="w-4 h-4 text-brand-orange" />
                  <span>Download Catalogue</span>
                </button>
              </div>
            </div>
          </div>

          {/* MAIN FOOTER GRID (5 columns on lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 xl:gap-12 mb-16">
            
            {/* Column 1-2 (span 2 on lg): Company Profile */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo in dark container */}
              <Link href="/" className="inline-block group">
                <div className="bg-[#0b1320] px-4 py-2.5 rounded-xl shadow-md border border-slate-800 inline-flex items-center group-hover:border-slate-700 transition-all">
                  <img
                    src="/images/logo.png"
                    alt="MAMTA Tools Logo"
                    width={130}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </Link>

              {/* Company Description (2-3 lines) */}
              <p className="text-sm text-steel-400 leading-relaxed max-w-md">
                Established in 2004 in Pune, India by Mr. Ambadas Mallappa Ghagare, MAMTA Tools is an ISO 9001:2015 certified manufacturer of high-precision indexable milling cutters, U-drills, boring bars, and bespoke tooling solutions for demanding industrial CNC machining.
              </p>

              {/* ISO Certification Badge */}
              <div className="flex items-center gap-3.5 p-3.5 bg-navy-900/90 rounded-xl border border-navy-800 text-xs text-steel-300 max-w-md shadow-inner-soft">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <span className="font-bold text-white text-sm block">{COMPANY_INFO.certification}</span>
                  <span className="text-xs text-steel-400">Strict Runout & Quality Traceability Standards</span>
                </div>
              </div>

              {/* Social Proof: 500+ Industrial Clients in 15+ Countries */}
              <div className="p-4 bg-navy-900/50 rounded-xl border border-navy-800/80 max-w-md space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-brand-teal" />
                    Global Footprint
                  </span>
                  <span className="text-brand-teal text-[11px] font-semibold bg-brand-teal/10 px-2 py-0.5 rounded-full border border-brand-teal/20">
                    Trusted Worldwide
                  </span>
                </div>
                <div className="text-sm font-bold text-brand-orange">
                  500+ Industrial Clients in 15+ Countries
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {COMPANY_INFO.exportCountries.map((c) => (
                    <span
                      key={c.code}
                      className="text-[11px] bg-navy-950/80 text-steel-400 px-2 py-0.5 rounded-md border border-navy-800/80"
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Product Categories (top 8 categories from PRODUCT_CATEGORIES) */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2 border-l-2 border-brand-orange pl-2.5">
                Product Categories
              </h3>
              
              <ul className="space-y-2.5 text-sm">
                {PRODUCT_CATEGORIES.slice(0, 8).map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/products/category/${cat.slug}`}
                      className="group flex items-center gap-2 text-steel-400 hover:text-brand-orange transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-steel-700 group-hover:bg-brand-orange group-hover:scale-125 transition-all shrink-0" />
                      <span className="truncate group-hover:translate-x-1 transition-transform duration-200">
                        {cat.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-navy-900/80 space-y-2.5">
                <Link
                  href="/products"
                  className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1.5 transition-colors group"
                >
                  <span>View All Categories</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/in-house-products"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal hover:text-brand-teal/80 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></span>
                  <span>In-House Pune Lines</span>
                </Link>

                <div>
                  <Link
                    href="/brands"
                    className="text-xs text-steel-400 hover:text-steel-200 transition-colors block"
                  >
                    Partner Brands & Inserts
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 4: Navigation & Links */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2 border-l-2 border-brand-teal pl-2.5">
                Navigation & Links
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-steel-400 block mb-2">
                    Company
                  </span>
                  <ul className="space-y-2 text-steel-400 text-xs sm:text-sm">
                    <li>
                      <Link href="/" className="hover:text-white transition-colors block">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us" className="hover:text-white transition-colors block">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/manufacturing-infrastructure" className="hover:text-white transition-colors block">
                        Manufacturing Infrastructure
                      </Link>
                    </li>
                    <li>
                      <Link href="/quality-assurance" className="hover:text-white transition-colors block">
                        Quality Assurance
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-steel-400 block mb-2">
                    Capabilities
                  </span>
                  <ul className="space-y-2 text-steel-400 text-xs sm:text-sm">
                    <li>
                      <Link href="/custom-tooling" className="hover:text-white transition-colors block">
                        Custom Tooling Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries" className="hover:text-white transition-colors block">
                        Industries We Serve
                      </Link>
                    </li>
                    <li>
                      <Link href="/export-global-supply" className="hover:text-white transition-colors block">
                        Export & Global Supply
                      </Link>
                    </li>
                    <li>
                      <Link href="/technical-resources" className="hover:text-white transition-colors block">
                        Technical Resources & Speeds
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-steel-400 block mb-2">
                    Support
                  </span>
                  <ul className="space-y-2 text-steel-400 text-xs sm:text-sm">
                    <li>
                      <Link href="/blog" className="hover:text-white transition-colors block">
                        Knowledge Centre & Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/distributor-enquiry" className="hover:text-white transition-colors block">
                        Distributor Enquiry
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs" className="hover:text-white transition-colors block">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="hover:text-white transition-colors block">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 5: Contact & Facilities */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2 border-l-2 border-brand-orange pl-2.5">
                Contact & Facilities
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Manufacturing Plant */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold text-xs sm:text-sm">
                      Manufacturing Plant:
                    </strong>
                    <p className="text-steel-400 text-xs leading-relaxed mt-0.5">
                      {COMPANY_INFO.factoryAddress.street}, {COMPANY_INFO.factoryAddress.taluka}, {COMPANY_INFO.factoryAddress.statePin}
                    </p>
                  </div>
                </div>

                {/* Sales Office */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-brand-teal" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold text-xs sm:text-sm">
                      Corporate & Sales Office:
                    </strong>
                    <p className="text-steel-400 text-xs leading-relaxed mt-0.5">
                      {COMPANY_INFO.salesOffice.street}, {COMPANY_INFO.salesOffice.locality}, {COMPANY_INFO.salesOffice.statePin}
                    </p>
                  </div>
                </div>

                {/* Direct Contact Links */}
                <div className="pt-3 border-t border-navy-900/80 space-y-3">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <span className="text-[11px] text-steel-400 block font-medium">Direct Line:</span>
                      <a
                        href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                        className="text-white font-medium hover:text-brand-orange transition-colors text-xs sm:text-sm"
                      >
                        {COMPANY_INFO.phonePrimary}
                      </a>
                    </div>
                  </div>

                  {/* Email Sales */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-brand-teal" />
                    </div>
                    <div>
                      <span className="text-[11px] text-steel-400 block font-medium">Sales & RFQ:</span>
                      <a
                        href={`mailto:${COMPANY_INFO.emailSales}`}
                        className="text-white font-medium hover:text-brand-teal transition-colors text-xs sm:text-sm break-all"
                      >
                        {COMPANY_INFO.emailSales}
                      </a>
                    </div>
                  </div>

                  {/* Email Exports */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <span className="text-[11px] text-steel-400 block font-medium">Global Exports:</span>
                      <a
                        href={`mailto:${COMPANY_INFO.emailExports}`}
                        className="text-white font-medium hover:text-brand-blue transition-colors text-xs sm:text-sm break-all"
                      >
                        {COMPANY_INFO.emailExports}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="pt-8 border-t border-navy-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-steel-400">
            {/* Left */}
            <div className="text-center md:text-left">
              © 2004-2025 Mamta Tools Private Limited
            </div>

            {/* Center */}
            <div className="flex items-center gap-1.5 font-medium text-steel-300">
              <span>Manufactured in Pune, India</span>
              <span className="text-base" role="img" aria-label="Indian Flag">🇮🇳</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4 text-steel-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>

        </div>
      </footer>

      {/* Catalog Download Modal */}
      <CatalogDownloadModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
      />
    </>
  );
}
