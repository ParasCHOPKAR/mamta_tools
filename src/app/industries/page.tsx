import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, Check, Target, Wrench, Shield, Send 
} from 'lucide-react';
import { INDUSTRIES, COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Industries We Serve | Automotive, Aerospace, Die & Mold, Heavy Engineering",
  description: "Explore industrial cutting tool solutions engineered for automotive powertrain, aerospace airframes, high-speed die and mold roughing, oil & gas valve bodies, and heavy infrastructure.",
  keywords: [
    "automotive cutting tools India",
    "aerospace milling cutters",
    "die and mold tooling Pune",
    "heavy engineering cutting tools",
    "oil and gas valve machining tools",
    "MAMTA Tools industries"
  ]
};

export default function IndustriesPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Application Sectors
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Industries We Serve
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              MAMTA Tools engineers specialized cutting geometries designed to solve the toughest metallurgical challenges—from gummy titanium and work-hardening super duplex to abrasive high-silicon aluminum castings.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {INDUSTRIES.map((ind, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={ind.id}
                id={ind.slug}
                className={`bg-white rounded-2xl border border-steel-200 overflow-hidden shadow-card p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Visual */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:col-start-8' : ''}`}>
                  <div className="bg-navy-950 rounded-xl p-4 h-64 sm:h-72 flex items-center justify-center">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                    Sector Overview
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
                    {ind.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-brand-orange">
                    {ind.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-steel-600 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Challenges */}
                    <div className="bg-steel-50 p-4 rounded-xl border border-steel-200 space-y-2">
                      <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                        Machining Challenges:
                      </h4>
                      <ul className="text-xs text-steel-600 space-y-1">
                        {ind.machiningChallenges.map((ch, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-red-500 font-bold">•</span>
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="bg-steel-50 p-4 rounded-xl border border-steel-200 space-y-2">
                      <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                        MAMTA Tooling Deployed:
                      </h4>
                      <ul className="text-xs text-steel-600 space-y-1">
                        {ind.recommendedTools.map((rt, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{rt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      href="/request-a-quote"
                      className="px-4 py-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Inquire for this Sector
                    </Link>
                    <Link
                      href="/products"
                      className="px-4 py-2 bg-steel-100 hover:bg-steel-200 text-navy-900 text-xs font-semibold rounded-lg transition-colors"
                    >
                      Browse Related Cutters
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

