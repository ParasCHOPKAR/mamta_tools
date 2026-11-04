'use client';

import React, { useState } from 'react';
import { 
  Building2, CheckCircle2, Shield, Send, Users, 
  MapPin, TrendingUp, Award, FileCheck 
} from 'lucide-react';

export default function DistributorEnquiryClient() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    stateCountry: 'India',
    yearsInBusiness: '3-5 years',
    currentBrands: '',
    targetTerritory: '',
    estimatedAnnualVolume: 'USD $50,000 - $100,000',
    facilities: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const benefits = [
    { title: "Protected Regional Exclusivity", desc: "Dedicated geographical territory rights with direct inbound inquiry pass-throughs from your region." },
    { title: "Aggressive Tiered OEM Margins", desc: "Direct factory wholesale pricing structures engineered to give your dealership a strong competitive edge against multinational tool brands." },
    { title: "Marketing Collateral & Co-Branding", desc: "Printed product catalogues, display demo cutter samples, 3D CAD models, and promotional exhibition materials." },
    { title: "Technical Application Support", desc: "Direct hotline access to MAMTA Pune engineers to support your clients with speed/feed programming and custom cutter drawings." },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Dealer Network Expansion
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Become an Authorized Tooling Distributor
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              Join the growing global MAMTA Tools network. We partner with industrial supply houses, CNC tooling dealers, and machinery distributors across India and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Distributor Benefits */}
      <section className="py-16 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Dealer Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              Why Partner With MAMTA Tools?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-steel-50 p-6 rounded-xl border border-steel-200 space-y-2">
                <TrendingUp className="w-6 h-6 text-brand-orange mb-2" />
                <h3 className="text-base font-bold text-navy-900">{b.title}</h3>
                <p className="text-xs text-steel-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-steel-200 shadow-xl overflow-hidden">
            <div className="bg-navy-900 p-6 sm:p-8 text-white border-b border-navy-800">
              <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                Partnership Application
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mt-1">
                Authorized Dealership Application Form
              </h2>
              <p className="text-xs text-steel-300 mt-1">
                Our Managing Director and Channel Sales team review applications within 48 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 sm:p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Application Received!</h3>
                <p className="text-sm text-steel-600 max-w-lg mx-auto">
                  Thank you for your interest in becoming a MAMTA Tools channel partner. Our Head of Global Business Development will contact you at <strong>{formData.email}</strong> to discuss territory terms and catalog sample packs.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-navy-900 text-white text-xs font-semibold rounded-lg"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-steel-700 mb-1">
                      Dealership / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Industrial Tools LLP"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-steel-700 mb-1">
                      Contact Person & Designation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma (Managing Partner)"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-steel-700 mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="director@dealership.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-steel-700 mb-1">
                      Mobile / WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 / International"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-steel-700 mb-1">
                      City / Headquarters *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chennai / Dubai / Munich"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-steel-700 mb-1">
                      Country / Region *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="India / USA / Germany / UAE"
                      value={formData.stateCountry}
                      onChange={(e) => setFormData({ ...formData, stateCountry: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-steel-700 mb-1">
                      Years in Tooling Business
                    </label>
                    <select
                      value={formData.yearsInBusiness}
                      onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none bg-white"
                    >
                      <option value="1-2 years">1-2 years (Emerging)</option>
                      <option value="3-5 years">3-5 years (Established)</option>
                      <option value="5-10 years">5-10 years (Major Regional)</option>
                      <option value="10+ years">10+ years (National Distributor)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-steel-700 mb-1">
                      Target Exclusivity Territory *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Western Maharashtra, GCC Countries, California"
                      value={formData.targetTerritory}
                      onChange={(e) => setFormData({ ...formData, targetTerritory: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-steel-700 mb-1">
                      Estimated Annual Tooling Sales
                    </label>
                    <select
                      value={formData.estimatedAnnualVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedAnnualVolume: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none bg-white"
                    >
                      <option value="USD $20,000 - $50,000">USD $20,000 - $50,000 (INR 15 - 40 Lakhs)</option>
                      <option value="USD $50,000 - $100,000">USD $50,000 - $100,000 (INR 40 - 80 Lakhs)</option>
                      <option value="USD $100,000 - $250,000">USD $100,000 - $250,000 (INR 80 Lakhs - 2 Cr)</option>
                      <option value="USD $250,000+">USD $250,000+ (High Volume)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-steel-700 mb-1">
                    Current Product Lines & Sales Infrastructure
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your current customer base (e.g., Tier-1 automotive, CNC job shops), existing tooling brands carried, warehouse capacity, and sales engineer team size..."
                    value={formData.facilities}
                    onChange={(e) => setFormData({ ...formData, facilities: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? 'Submitting Partnership Application...' : 'Submit Dealership Application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

