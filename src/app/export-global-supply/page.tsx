import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Globe, Plane, Ship, ShieldCheck, Award, 
  Check, ArrowRight, FileText, Send 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Export & Global Supply | Cutting Tools Exporter USA, Germany, UAE | MAMTA Tools",
  description: "MAMTA Tools is an established exporter of CNC cutting tools, face mills, and U-drills to the USA, Germany, UK, UAE, Saudi Arabia, South Africa, and Southeast Asia. Learn about our export packaging and logistics.",
  keywords: [
    "cutting tools exporter India",
    "industrial tooling export USA",
    "cutting tools supplier Germany",
    "CNC tools UAE Saudi Arabia",
    "global cutting tools distributor"
  ]
};

export default function ExportGlobalSupplyPage() {
  const exportHighlights = [
    { title: "Export-Grade Anti-Corrosion Packaging", desc: "Every tool body is coated with heavy-duty volatile corrosion inhibitor (VCI) oil, vacuum sealed inside heavy-gauge plastic packaging, and boxed in reinforced export crates." },
    { title: "Strategic Logistics Hubs", desc: "Fast customs clearance and air/sea dispatch via Mumbai/Nhava Sheva (JNPT) sea port and Pune / Mumbai International Air Cargo terminals." },
    { title: "Transparent Incoterms & Documentation", desc: "We support FOB, CIF, DAP, and EXW agreements. Every shipment includes Commercial Invoices, Packing Lists, Certificates of Origin, and Mill Test Inspection Reports." },
    { title: "Multi-Currency Settlement", desc: "Invoicing and quotations available in US Dollars ($ USD), Euros (€ EUR), British Pounds (£ GBP), UAE Dirhams (AED), and Indian Rupees (INR)." },
  ];

  const targetMarkets = [
    { country: "United States (USA)", ports: "Air: Chicago O'Hare, JFK, Los Angeles. Sea: Houston, New York.", focus: "Aerospace aluminum tooling, oil & gas valve cutters, automotive die roughing." },
    { country: "Germany & Europe", ports: "Air: Frankfurt, Munich. Sea: Hamburg, Rotterdam.", focus: "High precision micro-vernier boring units, DIN standard milling bodies, custom form tools." },
    { country: "United Kingdom (UK)", ports: "Air: London Heathrow. Sea: Felixstowe, Southampton.", focus: "General heavy engineering face mills, indexable core drills, carbide insert supply." },
    { country: "United Arab Emirates & Saudi Arabia", ports: "Air: Dubai (DXB), Riyadh. Sea: Jebel Ali, Dammam.", focus: "High pressure pipeline flange cutters, RTJ groove profiling tools, deep hole U-drilling." },
    { country: "Southeast Asia (Indonesia, Thailand, Malaysia)", ports: "Air: Bangkok, Jakarta, KL. Sea: Laem Chabang, Tanjung Priok.", focus: "Automotive engine bracket tooling, motorcycle component machining, mold base face mills." },
    { country: "South Africa & Africa", ports: "Air: Johannesburg. Sea: Durban, Cape Town.", focus: "Heavy mining equipment cutters, structural steel fabrication drills, railway tooling." },
  ];

  return (
    <div className="w-full">
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-teal/20 px-3 py-1 rounded-full border border-brand-teal/40">
              International Trade Division
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Export & Global Supply Network
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              Serving industrial buyers, tooling distributors, and Tier-1 machine shops across 15+ countries with certified quality, competitive FOB/CIF pricing, and dependable delivery timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Export Logistics Highlights */}
      <section className="py-16 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportHighlights.map((h, idx) => (
              <div key={idx} className="bg-steel-50 p-6 rounded-xl border border-steel-200 space-y-2">
                <ShieldCheck className="w-6 h-6 text-brand-orange mb-1" />
                <h3 className="text-sm font-bold text-navy-900">{h.title}</h3>
                <p className="text-xs text-steel-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Regional Markets */}
      <section className="py-16 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Global Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 font-heading">
              Dedicated International Market Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetMarkets.map((m, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-brand-teal" />
                    <h3 className="text-base font-bold text-navy-900">{m.country}</h3>
                  </div>
                  <div className="text-xs text-steel-500 mt-2">
                    <strong>Transit Hubs:</strong> {m.ports}
                  </div>
                  <div className="text-xs text-steel-700 mt-2 bg-steel-50 p-3 rounded-lg border border-steel-100">
                    <strong>Industry Focus:</strong> {m.focus}
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/request-a-quote"
                    className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1"
                  >
                    Request Export RFQ for {m.country.split(' ')[0]} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Supply CTA */}
      <section className="py-16 bg-navy-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Interested in Distributor Partnership in Your Country?
          </h2>
          <p className="text-xs sm:text-sm text-steel-300">
            We offer territorial exclusivity, wholesale discount structures, and direct marketing support to qualified tooling dealers worldwide.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/distributor-enquiry"
              className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg shadow"
            >
              Apply for International Dealership
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white text-xs font-bold rounded-lg border border-steel-700"
            >
              Contact Export Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

