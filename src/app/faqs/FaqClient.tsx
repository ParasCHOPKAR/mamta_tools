'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, HelpCircle, Search, FileText, 
  Send, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { FAQS, FAQItem } from '@/data/siteData';

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'General & Company',
    'Products & Specs',
    'Custom Tooling',
    'Export & Orders',
    'Distributor Network'
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchCat = activeCategory === 'All' || faq.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchQuery = !query || 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Customer Help & Support
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Frequently Asked Questions (FAQs)
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              Find answers regarding tooling specifications, ISO insert compatibility, custom cutter lead times, minimum order quantities, and international export logistics.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Main Content */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Search Box */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-steel-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions (e.g. export, inserts, lead time, custom)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-white border border-steel-300 rounded-xl shadow-sm focus:ring-2 focus:ring-brand-orange outline-none"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-orange text-white shadow'
                    : 'bg-white text-steel-700 hover:bg-steel-200 border border-steel-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white p-8 rounded-xl border border-steel-200 text-center text-steel-500 text-xs">
                No matching questions found. Please contact our engineering team directly.
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-steel-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-steel-50/50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-navy-900 leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-brand-orange flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-steel-600 leading-relaxed border-t border-steel-100 bg-steel-50/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-12 bg-white rounded-2xl border border-steel-200 p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-base font-bold text-navy-900">Still have technical or commercial questions?</h3>
              <p className="text-xs text-steel-500 mt-1">
                Our application engineering desk in Pune will resolve any cutting query or machine setup challenge.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/request-a-quote"
                className="px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg shadow whitespace-nowrap"
              >
                Request Custom RFQ
              </Link>
              <Link
                href="/contact-us"
                className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-lg whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

