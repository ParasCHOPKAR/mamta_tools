'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Globe, Award, Shield, 
  Download, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '@/data/siteData';
import CatalogDownloadModal from './CatalogDownloadModal';

export default function Footer() {
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-navy-950 text-steel-300 pt-16 pb-8 border-t border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top Newsletter / Quick RFQ Strip */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-6 md:p-8 mb-14 border border-navy-700/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Precision Cutting Solutions
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Need a Custom Cutting Tool or High-Volume Quote?
              </h3>
              <p className="text-xs md:text-sm text-steel-400 max-w-xl">
                Upload your component blueprint or tool specification. Our Pune application engineers deliver customized 3D models and pricing within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/request-a-quote"
                className="px-5 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs md:text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                Request an RFQ <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setCatalogModalOpen(true)}
                className="px-5 py-3 bg-navy-950 hover:bg-navy-900 text-white text-xs md:text-sm font-semibold rounded-lg border border-steel-700 hover:border-steel-500 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-brand-orange" />
                Download Catalogue
              </button>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Company Profile */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block group">
                <div className="bg-white px-3.5 py-2 rounded-xl shadow-md border border-steel-200/20 inline-flex items-center group-hover:shadow-lg transition-shadow">
                  <img
                    src="/images/logo.png"
                    alt="MAMTA Tools"
                    width={100}
                    height={40}
                    style={{ maxHeight: '40px', width: 'auto' }}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </Link>

              <p className="text-xs text-steel-400 leading-relaxed pr-4">
                Established in 2004 in Pune, India by Mr. Ambadas Mallappa Ghagare, MAMTA Tools is an ISO 9001:2015 certified manufacturer and exporter of indexable milling cutters, U-drills, boring tools, and custom tooling solutions engineered for heavy metalworking and mass production.
              </p>

              <div className="flex items-center gap-2 p-3 bg-navy-900/80 rounded-lg border border-navy-800 text-xs text-steel-200">
                <Award className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div>
                  <span className="font-semibold block text-white">{COMPANY_INFO.certification}</span>
                  <span className="text-[11px] text-steel-400">Strict Runout & Quality Traceability Standards</span>
                </div>
              </div>

              <div className="text-xs text-steel-400">
                <div className="font-semibold text-steel-300 mb-1">Target International Markets:</div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {COMPANY_INFO.exportCountries.map((c) => (
                    <span key={c.code} className="bg-navy-900 px-2 py-0.5 rounded text-steel-300 border border-navy-800">
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Product Categories */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-orange pl-2.5">
                Tool Categories
              </h4>
              <ul className="space-y-1.5 text-xs">
                {PRODUCT_CATEGORIES.slice(0, 10).map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/products/category/${cat.slug}`}
                      className="text-steel-400 hover:text-brand-orange transition-colors truncate block"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/products"
                    className="text-brand-orange font-semibold hover:underline block pt-1"
                  >
                    + View All 20 Categories →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/in-house-products"
                    className="text-emerald-400 font-semibold hover:underline block pt-0.5"
                  >
                    ★ In-House Pune Lines
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands"
                    className="text-steel-400 hover:text-brand-orange"
                  >
                    Partner Brands & Inserts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Corporate & Quick Links (16 Pages) */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-teal pl-2.5">
                Navigation & Links
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/industries" className="hover:text-white transition-colors">Industries We Serve</Link></li>
                <li><Link href="/manufacturing-infrastructure" className="hover:text-white transition-colors">Manufacturing & Infrastructure</Link></li>
                <li><Link href="/quality-assurance" className="hover:text-white transition-colors">Quality Assurance</Link></li>
                <li><Link href="/custom-tooling" className="hover:text-white transition-colors">Custom Tooling Solutions</Link></li>
                <li><Link href="/export-global-supply" className="hover:text-white transition-colors">Export & Global Supply</Link></li>
                <li><Link href="/technical-resources" className="hover:text-white transition-colors">Technical Resources & Speeds</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog / Knowledge Centre</Link></li>
                <li><Link href="/distributor-enquiry" className="hover:text-white transition-colors">Distributor / Dealer Enquiry</Link></li>
                <li><Link href="/faqs" className="hover:text-white transition-colors">Frequently Asked Questions (FAQs)</Link></li>
                <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Facilities */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-orange pl-2.5">
                Pune Facilities
              </h4>
              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Manufacturing Plant:</strong>
                    <span className="text-steel-400">
                      Gat No. 189, Behind Jyotiba Temple, Jyotiba Nagar, Talawade, Pune - 411062, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Sales & Corporate Office:</strong>
                    <span className="text-steel-400">
                      Shop 1, Navina Apt, Yashwant Nagar, Telco Road near Gawali Matha, Pimpri, Pune - 411018
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-white text-steel-300">
                    {COMPANY_INFO.phonePrimary}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.emailSales}`} className="hover:text-white text-steel-300">
                    {COMPANY_INFO.emailSales}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.emailExports}`} className="hover:text-white text-steel-300">
                    {COMPANY_INFO.emailExports}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & SEO Bar */}
          <div className="pt-8 border-t border-navy-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-steel-500">
            <div>
              © 2004 - {new Date().getFullYear()} {COMPANY_INFO.legalName}. All Rights Reserved. ISO 9001:2015 Certified.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-steel-400">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-steel-400">Terms of Supply</Link>
              <span>•</span>
              <Link href="/sitemap.xml" className="hover:text-steel-400">XML Sitemap</Link>
              <span>•</span>
              <span className="text-steel-600">Made for Global CNC Machining</span>
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

