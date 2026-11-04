'use client';

import React, { useState } from 'react';
import { 
  FileUp, Send, CheckCircle2, ShieldCheck, 
  Trash2, FileText, AlertCircle, Clock 
} from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '@/data/siteData';

export default function RfqClient() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    toolCategory: 'Face Milling Cutters',
    dimensionsSpecs: '',
    quantity: '10-25 pcs',
    workpieceMaterial: 'Alloy Steel (EN8, EN19, EN24, 4140)',
    spindleInterface: 'BT40 (Standard VMC)',
    deliveryUrgency: 'Normal (1-2 weeks)',
    notes: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refId, setRefId] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const newFiles = files.map((file) => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      }));
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRefId('MT-RFQ-' + Math.floor(100000 + Math.random() * 900000));
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Technical Drawing Evaluation & RFQ
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Request a Formal Quotation
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              Upload your 2D component drawings, 3D CAD models, or tool specifications. Our Pune application engineers deliver detailed tool layout drawings and quotations within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-steel-200 shadow-xl overflow-hidden">
            <div className="bg-navy-900 px-6 sm:px-8 py-5 text-white flex items-center justify-between border-b border-navy-800">
              <div>
                <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                  Industrial B2B RFQ
                </span>
                <h2 className="text-xl font-bold">Cutting Tool Specification Sheet</h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Confidentiality Protected</span>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 sm:p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Quotation Request Successfully Registered!</h3>
                <p className="text-sm text-steel-600 max-w-lg mx-auto">
                  Your inquiry has been allocated to our senior application engineering desk. A formal quotation and proposal 3D drawing will be sent to <strong>{formData.email}</strong>.
                </p>

                <div className="bg-steel-50 p-6 rounded-xl border border-steel-200 text-left max-w-md mx-auto text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-steel-500">Quotation Ref ID:</span>
                    <span className="font-mono font-bold text-brand-orange text-sm">{refId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-steel-500">Tool Category:</span>
                    <span className="font-semibold text-navy-900">{formData.toolCategory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-steel-500">Workpiece Material:</span>
                    <span className="text-navy-900">{formData.workpieceMaterial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-steel-500">Drawings Uploaded:</span>
                    <span className="text-emerald-700 font-semibold">{uploadedFiles.length} file(s) attached</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setUploadedFiles([]);
                    }}
                    className="px-6 py-2.5 bg-navy-900 text-white text-xs font-semibold rounded-lg"
                  >
                    Submit Another Tool Specification
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 border-b border-steel-200 pb-2 mb-4">
                    1. Contact & Organization Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-steel-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-steel-700 mb-1">Company / Plant Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bharat Precision Engineering Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-steel-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="purchasing@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-steel-700 mb-1">Mobile / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 / International format"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Technical Tool Specifications */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 border-b border-steel-200 pb-2 mb-4">
                    2. Tooling & Machining Parameters
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-steel-700 mb-1">Cutting Tool Category *</label>
                      <select
                        value={formData.toolCategory}
                        onChange={(e) => setFormData({ ...formData, toolCategory: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none bg-white"
                      >
                        {PRODUCT_CATEGORIES.map((c) => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                        <option value="Custom Engineered Special Tool">Custom Engineered Special Tool (To Drawing)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-steel-700 mb-1">Workpiece Material to Machine *</label>
                      <select
                        value={formData.workpieceMaterial}
                        onChange={(e) => setFormData({ ...formData, workpieceMaterial: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none bg-white"
                      >
                        <option value="Alloy Steel (EN8, EN19, EN24, 4140)">Alloy Steel (EN8, EN19, EN24, 4140)</option>
                        <option value="Stainless Steel (AISI 304, 316, Duplex)">Stainless Steel (AISI 304, 316, Duplex)</option>
                        <option value="Grey / Ductile Cast Iron (SG Iron)">Grey / Ductile Cast Iron (SG Iron)</option>
                        <option value="Die / Mold Steel (P20, H13, D2 up to 55 HRC)">Die / Mold Steel (P20, H13, D2 up to 55 HRC)</option>
                        <option value="Aluminium & Non-Ferrous Alloys">Aluminium & Non-Ferrous Alloys</option>
                        <option value="High Temp Alloys (Inconel, Titanium)">High Temp Alloys (Inconel, Titanium)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-steel-700 mb-1">Machine Spindle Interface</label>
                      <select
                        value={formData.spindleInterface}
                        onChange={(e) => setFormData({ ...formData, spindleInterface: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none bg-white"
                      >
                        <option value="BT40 (Standard VMC)">BT40 (Standard VMC)</option>
                        <option value="BT50 (Heavy VMC / HMC)">BT50 (Heavy VMC / HMC)</option>
                        <option value="HSK63A / HSK100A (High Speed)">HSK63A / HSK100A (High Speed)</option>
                        <option value="CAT40 / CAT50 (US Standard)">CAT40 / CAT50 (US Standard)</option>
                        <option value="Straight Cylindrical Shank (Weldon / Collet)">Straight Cylindrical Shank (Weldon / Collet)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-steel-700 mb-1">Required Quantity</label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none bg-white"
                      >
                        <option value="1-5 pcs (Sample / Trial)">1-5 pcs (Sample / Trial)</option>
                        <option value="10-25 pcs (Batch)">10-25 pcs (Batch)</option>
                        <option value="25-100 pcs (Production)">25-100 pcs (Production)</option>
                        <option value="100+ pcs (Annual OEM Contract)">100+ pcs (Annual OEM Contract)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-steel-700 mb-1">
                      Tool Dimensions or Model Numbers
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ø80mm Face Mill 45°, or Ø32mm U-Drill 3D with BT40 shank"
                      value={formData.dimensionsSpecs}
                      onChange={(e) => setFormData({ ...formData, dimensionsSpecs: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                </div>

                {/* Technical Drawing Upload */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 border-b border-steel-200 pb-2 mb-3">
                    3. Technical Drawing Upload
                  </h3>
                  <div className="border-2 border-dashed border-steel-300 hover:border-brand-orange rounded-xl p-6 text-center bg-steel-50/50 transition-colors">
                    <FileUp className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <label className="cursor-pointer">
                      <span className="text-xs font-bold text-navy-900 hover:text-brand-orange">
                        Click to upload component drawings
                      </span>
                      <span className="text-xs text-steel-500 block mt-0.5">
                        Supported: PDF, DWG, DXF, STEP, STP, PNG, JPG (Max 25 MB per file)
                      </span>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.dwg,.dxf,.step,.stp,.png,.jpg,.jpeg"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Uploaded File List */}
                  {uploadedFiles.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {uploadedFiles.map((f, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2.5 bg-steel-100 rounded-lg text-xs">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-brand-orange" />
                            <span className="font-semibold text-navy-900">{f.name}</span>
                            <span className="text-steel-500 text-[11px]">({f.size})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Operational Notes */}
                <div>
                  <label className="block text-xs font-semibold text-steel-700 mb-1">
                    Special Machining Requirements or Delivery Urgency
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on cutting depth, existing cycle times, machine make/model, or target delivery destination (Domestic / International Export)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-steel-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-brand-orange/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? 'Transmitting Drawing & Technical Specs...' : 'Submit Quotation Request (24h Turnaround)'}
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

