import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Award, Shield, Calendar, MapPin, Users, Target, 
  CheckCircle2, ArrowRight, Factory, Wrench 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: "About Us | 20+ Years Precision Cutting Tools Manufacturer Pune",
  description: "Learn about MAMTA Tools, established in 2004 in Pune, India by Mr. Ambadas Mallappa Ghagare. ISO 9001:2015 certified manufacturer of indexable milling cutters, U-drills, and custom tooling.",
};

export default function AboutUsPage() {
  const milestones = [
    { year: "2004", title: "Establishment in Pune", desc: "Founded by Mr. Ambadas Mallappa Ghagare with manual and conventional tool and cutter grinders serving local Pune auto ancillaries." },
    { year: "2008", title: "First CNC 5-Axis Expansion", desc: "Installed state-of-the-art CNC tool grinding and VMC machining centers to launch indexable face milling cutters." },
    { year: "2014", title: "U-Drills & Micro Boring Lines", desc: "Pioneered proprietary 3D/5D indexable U-drill bodies and vernier graduated micro-finish boring heads with IT6 tolerance." },
    { year: "2018", title: "ISO 9001:2015 Certification", desc: "Formal TUV Austria ISO 9001:2015 certification awarded for quality management system, material traceability, and metrology." },
    { year: "2022", title: "Global Export Acceleration", desc: "Expanded direct exports to USA, Germany, UK, UAE, and Southeast Asia with custom VCI vacuum packaging and rapid air cargo." },
    { year: "2026", title: "Advanced Tooling R&D Center", desc: "Talawade facility upgraded with in-house CAD/CAM simulation, Zeiss CMM inspection, and high-feed tooling lines." },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Company Profile & Heritage
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 font-heading">
              Two Decades of Precision Engineering Excellence
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              MAMTA Tools is an ISO 9001:2015 certified manufacturer, trader, and global exporter of high-precision CNC cutting tools, indexable milling cutters, drilling systems, and custom tooling solutions based in Pune, Maharashtra, India.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Genesis */}
      <section className="py-16 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-navy-900 bg-steel-100 px-3 py-1 rounded">
                Founder&apos;s Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">
                Founded on Integrity, Precision & Customer Commitment
              </h2>
              <p className="text-sm text-steel-700 leading-relaxed">
                Under the visionary leadership of <strong>Mr. Ambadas Mallappa Ghagare</strong>, MAMTA Tools was established in 2004 with a singular focus: delivering industrial cutting tools that match European dimensional repeatability at cost structures that maximize bottom-line profitability for machine shops.
              </p>
              <p className="text-sm text-steel-700 leading-relaxed">
                What began as a localized tooling enterprise in Pune&apos;s industrial corridor has flourished into a world-class manufacturing brand trusted by over 500 automotive Tier-1 suppliers, die & mold manufacturers, aerospace subcontractors, and international distributors across North America, Europe, and the Middle East.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 bg-steel-50 rounded-xl border border-steel-200">
                  <div className="text-2xl font-bold text-navy-900 font-heading">2004</div>
                  <div className="text-xs text-steel-500 font-medium">Year Established</div>
                </div>
                <div className="p-4 bg-steel-50 rounded-xl border border-steel-200">
                  <div className="text-2xl font-bold text-brand-orange font-heading">TUV Austria</div>
                  <div className="text-xs text-steel-500 font-medium">ISO 9001:2015 Certified</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-navy-900 text-white p-8 rounded-2xl border border-navy-800 shadow-xl space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-navy-800 pb-3">
                  Company Vital Information
                </h3>
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-steel-400 block font-medium">Company Name:</span>
                    <span className="text-white font-bold text-sm">{COMPANY_INFO.name} ({COMPANY_INFO.legalName})</span>
                  </div>
                  <div>
                    <span className="text-steel-400 block font-medium">Chief Executive Officer / Founder:</span>
                    <span className="text-brand-orange font-semibold">{COMPANY_INFO.founder}</span>
                  </div>
                  <div>
                    <span className="text-steel-400 block font-medium">Manufacturing Plant:</span>
                    <span className="text-steel-200">{COMPANY_INFO.factoryAddress.street}, {COMPANY_INFO.factoryAddress.taluka}, {COMPANY_INFO.factoryAddress.statePin}</span>
                  </div>
                  <div>
                    <span className="text-steel-400 block font-medium">Corporate Office:</span>
                    <span className="text-steel-200">{COMPANY_INFO.salesOffice.street}, {COMPANY_INFO.salesOffice.locality}, {COMPANY_INFO.salesOffice.statePin}</span>
                  </div>
                  <div>
                    <span className="text-steel-400 block font-medium">Business Activity:</span>
                    <span className="text-steel-200">Manufacturer, Exporter, Supplier & Tooling Consultant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-16 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-steel-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Our Mission</h3>
              <p className="text-xs text-steel-600 leading-relaxed">
                To design and manufacture cutting tools of unmatched rigidity, accuracy, and tool life, enabling manufacturing enterprises worldwide to optimize machining cycle times, eliminate tool chatter, and reduce operating costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-steel-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Our Vision</h3>
              <p className="text-xs text-steel-600 leading-relaxed">
                To be recognized globally among the most dependable precision cutting tool brands from India, renowned for technological innovation, custom tooling speed, and strict adherence to international quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-steel-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Quality Pledge</h3>
              <p className="text-xs text-steel-600 leading-relaxed">
                Zero defects through 100% inspection on CMMs, dynamic balancers, and optical profile projectors. Every tool body leaving our facility is certified for runout accuracy within 0.005mm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 20-Year Milestones Timeline */}
      <section className="py-16 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Evolution of Excellence
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              Our 20+ Year Engineering Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-steel-50 p-6 rounded-xl border border-steel-200 hover:border-brand-orange transition-all relative"
              >
                <span className="text-3xl font-black text-brand-orange font-heading">
                  {m.year}
                </span>
                <h4 className="text-base font-bold text-navy-900 mt-2">{m.title}</h4>
                <p className="text-xs text-steel-600 mt-2 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Partner With a Proven Industrial Tooling Manufacturer
          </h2>
          <p className="text-xs sm:text-sm text-steel-300">
            Contact our engineering team to discuss your tooling requirements, custom cutter blueprints, or distributor opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/request-a-quote"
              className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs rounded-lg shadow transition-all"
            >
              Request a Quotation
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white font-bold text-xs rounded-lg border border-steel-700 transition-all"
            >
              Contact Pune Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

