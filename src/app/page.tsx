import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Award, Shield, Globe, ArrowRight, CheckCircle2, 
  Settings, Zap, Factory, Target, Phone, Download, 
  FileCheck, Users, Compass, Cpu, Layers 
} from 'lucide-react';
import { 
  COMPANY_INFO, INDUSTRIES, TESTIMONIALS 
} from '@/data/siteData';
import HomeProductsSection from '@/components/HomeProductsSection';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: "Precision Cutting Tools for Modern Manufacturing | MAMTA Tools India",
  description: "ISO 9001:2015 certified manufacturer of high-performance indexable face mills, end mills, high-feed cutters, U-drills, and micro-boring units in Pune, India. Global exporter to USA, Germany, UAE, and worldwide.",
  keywords: [
    "Precision Cutting Tools",
    "Face Milling Cutters India",
    "Indexable End Mills Pune",
    "U-Drill Manufacturer",
    "Micro Boring Units",
    "Industrial Tooling Exporter",
    "MAMTA Tools"
  ]
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* =========================================
          SECTION 1: HERO BANNER
      ========================================= */}
      <HeroSection />

      {/* =========================================
          SECTIONS 2 & 4: FEATURED PRODUCT CATEGORIES & IN-HOUSE PRODUCTS
      ========================================= */}
      <HomeProductsSection />

      {/* =========================================
          SECTION 3: WHY CHOOSE MAMTA TOOLS?
      ========================================= */}
      <section className="py-20 bg-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              The MAMTA Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 font-heading">
              Why Global Manufacturers Choose MAMTA Tools
            </h2>
            <p className="text-sm md:text-base text-steel-300 mt-3">
              Founded in 2004 by Mr. Ambadas Mallappa Ghagare, we combine German metrology standards with cost-competitive Indian manufacturing agility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-navy-950/70 border border-navy-800 hover:border-brand-orange/60 transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Sub-Micron Runout Accuracy</h3>
              <p className="text-xs text-steel-300 leading-relaxed">
                Every milling body and boring unit is precision ground on multi-axis CNC machines to achieve radial and axial runouts under 0.005mm, maximizing insert edge life.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-navy-950/70 border border-navy-800 hover:border-brand-orange/60 transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Through-Coolant Engineering</h3>
              <p className="text-xs text-steel-300 leading-relaxed">
                Internal helical and axial high-pressure coolant channels deliver fluid right to the cutting wedge, purging chips instantly and preventing thermal stress.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-navy-950/70 border border-navy-800 hover:border-brand-orange/60 transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">ISO 9001:2015 TUV Austria</h3>
              <p className="text-xs text-steel-300 leading-relaxed">
                Internationally certified quality system with raw material spectro analysis, certified vacuum hardening, and coordinate measuring machine (CMM) verification reports.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-navy-950/70 border border-navy-800 hover:border-brand-orange/60 transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Custom Tooling from Blueprints</h3>
              <p className="text-xs text-steel-300 leading-relaxed">
                Send your component 2D/3D drawings. Our engineering team designs multi-operation combination step cutters that condense 3 operations into 1 pass.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-navy-950/70 border border-navy-800 hover:border-brand-orange/60 transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Export to 15+ Nations</h3>
              <p className="text-xs text-steel-300 leading-relaxed">
                Trusted in the USA, Germany, UK, Saudi Arabia, UAE, and SE Asia. Rapid air freight and sea freight logistics with rust-proof VCI vacuum packing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-navy-950/70 border border-navy-800 hover:border-brand-orange/60 transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Dedicated Application Support</h3>
              <p className="text-xs text-steel-300 leading-relaxed">
                Direct phone and WhatsApp access to experienced tooling specialists who recommend cutting speeds (Vc), feeds (fz), and insert grades for your specific alloys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: INDUSTRIES WE SERVE
      ========================================= */}
      <section className="py-20 bg-steel-100 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-900 bg-white px-3 py-1 rounded-full border border-steel-300 shadow-sm">
              Sectors & Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mt-3 font-heading">
              Industries We Serve
            </h2>
            <p className="text-sm md:text-base text-steel-600 mt-3">
              Our precision cutting solutions are deployed across the most demanding industrial production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-xl border border-steel-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 bg-navy-950 p-2">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-900">{ind.name}</h3>
                    <p className="text-xs text-brand-orange font-semibold mt-0.5">{ind.tagline}</p>
                    <p className="text-xs text-steel-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-steel-100">
                      <span className="text-[11px] font-bold text-navy-900 uppercase tracking-wider block mb-1">
                        Key Tooling Deployed:
                      </span>
                      <ul className="text-xs text-steel-600 space-y-1">
                        {ind.recommendedTools.slice(0, 2).map((t, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                            <span className="line-clamp-1">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-2">
                  <Link
                    href="/industries"
                    className="text-xs font-bold text-navy-900 hover:text-brand-orange inline-flex items-center gap-1"
                  >
                    Explore Sector Case Studies <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6 & 7: MANUFACTURING & QUALITY ASSURANCE
      ========================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Manufacturing Infrastructure */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                Pune Infrastructure
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
                Advanced Manufacturing & CNC Machining Capacity
              </h2>
              <p className="text-sm text-steel-600 leading-relaxed">
                Operating out of our Talawade, Pune manufacturing facility, MAMTA Tools combines high-rigidity CNC tool grinders, 5-axis vertical machining centers, wire EDM, and vacuum heat-treatment furnaces to build world-class cutting tools.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-steel-50 border border-steel-200">
                  <Factory className="w-6 h-6 text-brand-orange mb-2" />
                  <div className="text-sm font-bold text-navy-900">5-Axis Grinding</div>
                  <div className="text-xs text-steel-500">Sub-micron profile precision</div>
                </div>
                <div className="p-4 rounded-lg bg-steel-50 border border-steel-200">
                  <Settings className="w-6 h-6 text-brand-teal mb-2" />
                  <div className="text-sm font-bold text-navy-900">Vacuum Hardening</div>
                  <div className="text-xs text-steel-500">Core hardness HRC 48-52</div>
                </div>
                <div className="p-4 rounded-lg bg-steel-50 border border-steel-200">
                  <Cpu className="w-6 h-6 text-brand-blue mb-2" />
                  <div className="text-sm font-bold text-navy-900">CAD/CAM Simulation</div>
                  <div className="text-xs text-steel-500">SolidWorks & NX CAM design</div>
                </div>
                <div className="p-4 rounded-lg bg-steel-50 border border-steel-200">
                  <Layers className="w-6 h-6 text-emerald-600 mb-2" />
                  <div className="text-sm font-bold text-navy-900">Electroless Nickel</div>
                  <div className="text-xs text-steel-500">Corrosion & chip friction shield</div>
                </div>
              </div>

              <div>
                <Link
                  href="/manufacturing-infrastructure"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:underline"
                >
                  Inspect Our Machine List & Capabilities <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quality Assurance Preview */}
            <div className="bg-navy-950 text-white p-8 rounded-2xl border border-navy-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  Quality Assurance
                </span>
                <span className="text-xs text-steel-400">TUV Austria Certified</span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Zero Compromise On Runout, Balance & Hardness
              </h3>

              <p className="text-xs text-steel-300 leading-relaxed">
                Every MAMTA tool undergoes a 4-tier inspection protocol before dispatch. We measure insert pocket squareness, thread pitch accuracy, through-coolant pressure sealing, and dynamic balancing at high RPM.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 bg-navy-900 rounded-lg border border-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-sm text-white block">Zeiss CNC Coordinate Measuring Machine (CMM)</strong>
                    <span className="text-xs text-steel-400">Micron-accurate coordinate verification of multi-step pockets.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-navy-900 rounded-lg border border-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-sm text-white block">Dynamic Tool Balancer (G2.5 at 15,000 RPM)</strong>
                    <span className="text-xs text-steel-400">Protects high-speed machining center spindles from harmonic fatigue.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-navy-900 rounded-lg border border-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-sm text-white block">Mill Test Certificates & Material Traceability</strong>
                    <span className="text-xs text-steel-400">Full chemical spectro and heat-treatment certification batch tracking.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/quality-assurance"
                  className="w-full py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow"
                >
                  View Quality Certifications & QA Protocols <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 8: GLOBAL BUSINESS & EXPORT
      ========================================= */}
      <section className="py-20 bg-steel-900 text-white relative bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-teal/20 px-3 py-1 rounded-full border border-brand-teal/40">
              International Trade & Logistics
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 font-heading">
              Export & Global Supply Network
            </h2>
            <p className="text-sm md:text-base text-steel-300 mt-3">
              Serving machine shops and distributor chains across North America, Europe, the Middle East, and Southeast Asia with seamless logistics and export packaging.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {COMPANY_INFO.exportCountries.map((country) => (
              <div
                key={country.code}
                className="bg-steel-800/80 p-4 rounded-xl border border-steel-700 text-center hover:border-brand-orange transition-all"
              >
                <div className="text-xl font-black text-brand-orange mb-1">{country.code}</div>
                <div className="text-sm font-bold text-white">{country.name}</div>
                <div className="text-[11px] text-steel-400">{country.region}</div>
              </div>
            ))}
          </div>

          <div className="bg-steel-800 rounded-2xl p-8 border border-steel-700 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="text-sm font-bold text-white uppercase tracking-wider text-brand-orange">
                Export Packaging
              </div>
              <p className="text-xs text-steel-300">
                Coated with rust-preventive VCI oil, heavy-gauge vacuum sealed, and crated in fumigated export wooden cases.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-bold text-white uppercase tracking-wider text-brand-teal">
                Port Proximity
              </div>
              <p className="text-xs text-steel-300">
                Fast transit via Nhava Sheva (JNPT) sea port and Pune/Mumbai International Air Cargo hubs.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
                Incoterms & Currencies
              </div>
              <p className="text-xs text-steel-300">
                Quotes available in USD ($), EUR (€), GBP (£), AED, and INR under FOB, CIF, DAP, or EXW terms.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/export-global-supply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs md:text-sm font-bold rounded-lg shadow transition-all"
            >
              Learn More About International Supply & Dealerships <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 9: TESTIMONIALS & TRUST
      ========================================= */}
      <section className="py-20 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-900 bg-white px-3 py-1 rounded-full border border-steel-200 shadow-sm">
              Customer Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 mt-3 font-heading">
              Trusted by 500+ Machining Plants Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-steel-200 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {'★'.repeat(test.rating)}
                  </div>
                  <p className="text-xs text-steel-700 italic leading-relaxed">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-steel-100">
                  <div className="text-sm font-bold text-navy-900">{test.clientName}</div>
                  <div className="text-xs text-brand-orange font-medium">{test.role}</div>
                  <div className="text-[11px] text-steel-500">{test.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 10: FAST RFQ BANNER
      ========================================= */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            Direct Pune Engineering Hotline
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
            Ready to Accelerate Your Machining Cycle Times?
          </h2>
          <p className="text-sm text-steel-300 max-w-2xl mx-auto">
            Submit your cutting tool specifications or upload part drawings. Our Pune application engineers deliver detailed tool layout drawings and quotations within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/request-a-quote"
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm rounded-lg shadow-xl hover:shadow-brand-orange/40 transition-all flex items-center gap-2"
            >
              Upload Drawing & Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-bold text-sm rounded-lg border border-steel-700 transition-all"
            >
              Speak to Application Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
