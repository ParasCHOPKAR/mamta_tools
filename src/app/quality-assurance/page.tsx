import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Award, Shield, CheckCircle2, Target, Gauge, 
  FileCheck, ArrowRight, Download 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Quality Assurance & ISO 9001:2015 Certification | MAMTA Tools",
  description: "MAMTA Tools is ISO 9001:2015 certified by TUV Austria. Explore our metrology lab, Zeiss CMM inspection, dynamic tool balancing, and 100% runout verification protocols.",
  keywords: [
    "ISO 9001 certified cutting tools",
    "TUV Austria certified tool manufacturer",
    "tooling quality assurance Pune",
    "CMM inspection cutting tools",
    "dynamic tool balancing"
  ]
};

export default function QualityAssurancePage() {
  const qaStages = [
    { stage: "Stage 1: Raw Material Spectroscopy", detail: "Every batch of hot-work alloy steel bars undergoes optical emission spectroscopy to verify chemical composition (Cr, Mo, V content) and ultrasonic testing for internal flaws." },
    { stage: "Stage 2: Vacuum Hardening & Cryogenic Treatment", detail: "Monitored atmospheric quenching ensuring core toughness and uniform surface hardness (HRC 48-52) with zero residual austenite." },
    { stage: "Stage 3: Multi-Axis In-Process Dimensional Control", detail: "Insert seat angle, pocket axial rake, radial rake, and thread pitch monitored with laser micrometers during 5-axis grinding." },
    { stage: "Stage 4: 100% CMM & Dynamic Balancing Verification", detail: "Zeiss Coordinate Measuring Machine (CMM) verification of complex 3D profiles and Schenck dynamic balancing to G2.5 at 15,000 RPM." },
  ];

  const metrologyEquipment = [
    { title: "Zeiss CNC Coordinate Measuring Machine (CMM)", spec: "Accuracy down to 0.001mm (1 micron) for multi-step pocket geometry." },
    { title: "Zoller / Kelch Optical Tool Presetter", spec: "Precise optical verification of cutting diameter, axial height, and cutting edge radius." },
    { title: "Schenck Dynamic Tool Balancer", spec: "ISO 1940 G2.5 grade balancing at speeds up to 15,000 RPM." },
    { title: "Mitutoyo Digital Height Gauges & Micrometers", spec: "Calibrated to national NABL standards for direct shop-floor gauging." },
    { title: "Digital Rockwell Hardness Tester", spec: "Direct HRC indentation verification across tool bodies and shanks." },
    { title: "Through-Coolant Hydrostatic Pressure Rig", spec: "Pressure testing up to 50 bar to confirm zero internal channel leakages." },
  ];

  return (
    <div className="w-full">
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              Zero-Defect Quality Policy
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Quality Assurance & Certifications
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              At MAMTA Tools, quality is measured in microns. Audited and certified to <strong>ISO 9001:2015 by TUV Austria</strong>, we enforce rigorous inspection regimes from virgin raw material to finished product packaging.
            </p>
          </div>
        </div>
      </section>

      {/* ISO Certificate Banner */}
      <section className="py-12 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-steel-50 rounded-2xl border border-steel-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Award className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  International Accreditation
                </span>
                <h3 className="text-xl font-bold text-navy-900">ISO 9001:2015 Certified Company</h3>
                <p className="text-xs text-steel-500 mt-0.5">Audited & Certified by TUV Austria Cert GmbH</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/request-a-quote"
                className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-lg shadow"
              >
                Request Quality Certificate Copy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Quality Protocol */}
      <section className="py-16 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Traceability & Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              Our 4-Stage Inspection Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qaStages.map((q, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <h3 className="text-sm font-bold text-navy-900">{q.stage}</h3>
                </div>
                <p className="text-xs text-steel-600 leading-relaxed pl-7">{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrology Equipment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Precision Metrology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              Metrology & Testing Equipment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrologyEquipment.map((eq, idx) => (
              <div key={idx} className="bg-steel-50 p-6 rounded-xl border border-steel-200 space-y-2">
                <Target className="w-6 h-6 text-brand-orange mb-1" />
                <h3 className="text-sm font-bold text-navy-900">{eq.title}</h3>
                <p className="text-xs text-steel-600">{eq.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

