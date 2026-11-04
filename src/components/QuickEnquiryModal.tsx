'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Clock, FileText } from 'lucide-react';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  modelNumber?: string;
}

export default function QuickEnquiryModal({
  isOpen,
  onClose,
  productName = 'General Tooling Enquiry',
  modelNumber = 'Standard Models',
}: QuickEnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    quantity: '10-50 pcs',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate lead generation submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-steel-200 overflow-hidden">
        {/* Header */}
        <div className="bg-navy-900 px-6 py-4 flex items-center justify-between border-b border-navy-800">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-orange">
              Instant B2B Quotation
            </span>
            <h3 className="text-lg font-bold text-white">Quick Product Enquiry</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-steel-400 hover:text-white hover:bg-navy-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-navy-900 mb-2">Enquiry Transmitted Successfully!</h4>
            <p className="text-sm text-steel-600 mb-6">
              Thank you for contacting MAMTA Tools. Our tooling technical sales engineer will send formal specifications and pricing within <strong className="text-navy-900">2-4 business hours</strong>.
            </p>
            <div className="bg-steel-50 p-4 rounded-lg text-left text-xs text-steel-700 mb-6 space-y-1">
              <div><strong>Product:</strong> {productName}</div>
              <div><strong>Model / Item:</strong> {modelNumber}</div>
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Reference ID:</strong> MT-ENQ-{Math.floor(100000 + Math.random() * 900000)}</div>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 bg-navy-900 hover:bg-navy-800 text-white font-medium rounded-lg transition-colors"
            >
              Done / Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Target Tool Banner */}
            <div className="bg-steel-50 p-3 rounded-lg border border-steel-200 flex items-start gap-3">
              <FileText className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-navy-900">{productName}</span>
                <span className="text-steel-500 block">Ref Model: {modelNumber}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-steel-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-steel-700 mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Precision Gears Pvt Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-steel-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="purchasing@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-steel-700 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-steel-700 mb-1">
                  Country / Region *
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white"
                >
                  <option value="India">India (Domestic)</option>
                  <option value="United States">United States (USA)</option>
                  <option value="Germany">Germany (Europe)</option>
                  <option value="United Kingdom">United Kingdom (UK)</option>
                  <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                  <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Other">Other International Country</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-steel-700 mb-1">
                  Estimated Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white"
                >
                  <option value="1-5 pcs (Trial / Sample)">1-5 pcs (Trial / Sample)</option>
                  <option value="10-50 pcs">10-50 pcs (Batch)</option>
                  <option value="50-200 pcs">50-200 pcs (Production)</option>
                  <option value="200+ pcs">200+ pcs (OEM Contract)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-steel-700 mb-1">
                Technical Requirements / Material to Machine
              </label>
              <textarea
                rows={3}
                placeholder="Mention diameter, workpiece material (e.g., EN8, SS304, D2), machine spindle (BT40/BT50), or delivery schedule..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5 text-xs text-steel-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Confidential B2B Data</span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Request Quotation'}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

