'use client';

import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Shield } from 'lucide-react';

interface CatalogDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  catalogueTitle?: string;
}

export default function CatalogDownloadModal({
  isOpen,
  onClose,
  catalogueTitle = 'MAMTA Tools Master Industrial Catalogue 2026',
}: CatalogDownloadModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Automotive & Auto Components',
  });
  const [downloaded, setDownloaded] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDownloaded(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-steel-200 overflow-hidden">
        <div className="bg-navy-900 px-6 py-4 flex items-center justify-between border-b border-navy-800">
          <div>
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
              Technical Documentation
            </span>
            <h3 className="text-lg font-bold text-white">Download Tooling Catalogue</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-steel-400 hover:text-white hover:bg-navy-800"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {downloaded ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-navy-900">Catalogue Ready!</h4>
            <p className="text-sm text-steel-600">
              Your direct PDF download link has been verified. A copy has also been sent to <strong>{formData.email}</strong>.
            </p>
            <div className="pt-2">
              <a
                href="#download-initiated"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Catalogue PDF download initiated (MAMTA-Tools-Engineering-Catalogue-2026.pdf)");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-lg shadow-md transition-all"
              >
                <Download className="w-5 h-5" />
                Download PDF (34.2 MB)
              </a>
            </div>
            <button
              onClick={onClose}
              className="block w-full text-xs text-steel-500 hover:text-navy-900 pt-3"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="flex items-center gap-3 p-3 bg-steel-50 rounded-lg border border-steel-200">
              <FileText className="w-8 h-8 text-brand-orange flex-shrink-0" />
              <div>
                <div className="font-semibold text-xs text-navy-900">{catalogueTitle}</div>
                <div className="text-[11px] text-steel-500">Includes 2D drawings, speed/feed tables & insert codes</div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-steel-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-steel-700 mb-1">Company Name *</label>
              <input
                type="text"
                required
                placeholder="Your Machine Shop / Manufacturing Plant"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-steel-700 mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-steel-700 mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 / International"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-steel-700 mb-1">Primary Industry</label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none bg-white"
              >
                <option value="Automotive & Auto Components">Automotive & Auto Components</option>
                <option value="Die & Mold">Die & Mold</option>
                <option value="Aerospace & Defense">Aerospace & Defense</option>
                <option value="Heavy Engineering">Heavy Engineering</option>
                <option value="Oil & Gas / Valves">Oil & Gas / Valves</option>
                <option value="Tooling Dealer / Distributor">Tooling Dealer / Distributor</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                {loading ? 'Preparing Catalogue...' : 'Get Instant Access (PDF)'}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-steel-400">
              <Shield className="w-3.5 h-3.5" />
              <span>We respect your privacy. No spam.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

