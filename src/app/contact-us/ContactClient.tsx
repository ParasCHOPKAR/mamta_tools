'use client';

import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Globe, Clock, Send, 
  CheckCircle2, Shield, MessageCircle 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Tooling Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Pune Engineering & Export Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Contact MAMTA Tools
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              Connect with our tooling specialists in Pune. Whether you need standard catalog delivery, custom tool engineering, or international distributor support, we are here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Info & Facilities */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-steel-200 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">Manufacturing Works & R&D</h3>
                    <p className="text-xs text-steel-600 mt-1 leading-relaxed">
                      {COMPANY_INFO.factoryAddress.street}, {COMPANY_INFO.factoryAddress.taluka}, {COMPANY_INFO.factoryAddress.statePin}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-steel-100">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">Corporate & Sales Office</h3>
                    <p className="text-xs text-steel-600 mt-1 leading-relaxed">
                      {COMPANY_INFO.salesOffice.street}, {COMPANY_INFO.salesOffice.locality}, {COMPANY_INFO.salesOffice.statePin}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="bg-white p-6 rounded-2xl border border-steel-200 shadow-sm space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <div>
                    <span className="text-steel-400 block font-medium">Primary Telephone:</span>
                    <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`} className="font-bold text-navy-900 hover:text-brand-orange text-sm">
                      {COMPANY_INFO.phonePrimary}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="text-steel-400 block font-medium">WhatsApp Business:</span>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline text-sm">
                      {COMPANY_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  <div>
                    <span className="text-steel-400 block font-medium">Domestic Sales Desk:</span>
                    <a href={`mailto:${COMPANY_INFO.emailSales}`} className="font-bold text-navy-900 hover:text-brand-orange">
                      {COMPANY_INFO.emailSales}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <span className="text-steel-400 block font-medium">Global Exports Desk:</span>
                    <a href={`mailto:${COMPANY_INFO.emailExports}`} className="font-bold text-navy-900 hover:text-brand-orange">
                      {COMPANY_INFO.emailExports}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-steel-100">
                  <Clock className="w-5 h-5 text-steel-400 flex-shrink-0" />
                  <div>
                    <span className="text-steel-400 block font-medium">Working Hours:</span>
                    <span className="text-navy-900 font-medium">Monday – Saturday: 9:00 AM – 7:00 PM IST (GMT +5:30)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-steel-200 shadow-xl p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Direct Enquiry
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mt-1 mb-6">
                  Send Us a Direct Message
                </h2>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900">Message Transmitted!</h3>
                    <p className="text-xs sm:text-sm text-steel-600 max-w-md mx-auto">
                      Thank you for contacting MAMTA Tools. Our representative will respond to <strong>{formData.email}</strong> within 2-4 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-navy-900 text-white text-xs font-semibold rounded-lg mt-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-steel-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-steel-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-steel-700 mb-1">Phone / Mobile *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 / International"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-steel-700 mb-1">Subject / Area of Interest</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none bg-white"
                        >
                          <option value="General Tooling Enquiry">General Tooling Enquiry</option>
                          <option value="Bulk Order Quotation">Bulk Order Quotation</option>
                          <option value="Distributor Partnership">Distributor Partnership</option>
                          <option value="International Export Shipping">International Export Shipping</option>
                          <option value="Custom Tooling Development">Custom Tooling Development</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-steel-700 mb-1">Detailed Message *</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Please describe your cutting tool requirement, part details, delivery timeline, or inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {loading ? 'Sending Message...' : 'Send Message To Pune Office'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

