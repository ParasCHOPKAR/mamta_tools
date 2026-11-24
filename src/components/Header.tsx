"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Disc,
  Wrench,
  Target,
  Cpu,
  Layers,
  Compass,
  Sparkles,
  FileText,
} from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/siteData";

const getCategoryIcon = (slug: string) => {
  if (slug.includes("face") || slug.includes("shell")) return Disc;
  if (slug.includes("drill") || slug.includes("core")) return Wrench;
  if (slug.includes("boring") || slug.includes("ckb")) return Target;
  if (slug.includes("shoulder") || slug.includes("end-mill") || slug.includes("ruffer")) return Wrench;
  if (slug.includes("modular") || slug.includes("shank")) return Layers;
  if (slug.includes("insert")) return Cpu;
  if (slug.includes("chamfer") || slug.includes("champer") || slug.includes("dovetail") || slug.includes("profile")) return Compass;
  return Disc;
};

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Scroll listener for elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    if (mobileMenuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, searchOpen]);

  // Focus search input on open
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  // Handle ESC key to dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Exactly the 9 links requested by user
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "In-House", href: "/in-house-products" },
    { label: "Industries", href: "/industries" },
    { label: "Manufacturing", href: "/manufacturing-infrastructure" },
    { label: "Quality", href: "/quality-assurance" },
    { label: "Resources", href: "/technical-resources" },
    { label: "Contact", href: "/contact-us" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Search filter
  const filteredCategories = searchQuery.trim()
    ? PRODUCT_CATEGORIES.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.headline.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : PRODUCT_CATEGORIES;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#070c15]/95 backdrop-blur-md border-slate-800 shadow-xl py-2.5 sm:py-3"
          : "bg-[#070d17]/90 backdrop-blur-md border-slate-800/80 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* =================================================================
            1. BRAND LOGO
            ================================================================= */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 py-0.5">
          <div className="relative h-10 sm:h-11 w-36 sm:w-44 flex items-center">
            <Image
              src="/images/logo.png"
              alt="MAMTA TOOLS - Precision Cutting Tools"
              fill
              priority
              className="object-contain object-left transition-transform group-hover:scale-[1.03]"
            />
          </div>
          <span className="sr-only">MAMTA Tools - Precision Cutting Tools</span>
        </Link>

        {/* =================================================================
            2. DESKTOP CENTER NAVIGATION LINKS (All 9 requested links)
            ================================================================= */}
        <nav
          className="hidden lg:flex items-center gap-4.5 xl:gap-6 2xl:gap-7 text-xs xl:text-[13px] font-semibold text-slate-300"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);

            if (link.hasDropdown) {
              return (
                <div key={link.label} className="relative py-2 group/dropdown">
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 transition-colors pb-1 ${
                      isActive
                        ? "text-white font-bold border-b-2 border-[#f28c28]"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover/dropdown:rotate-180 group-hover/dropdown:text-white transition-transform duration-200" />
                  </Link>

                  {/* Solid Opaque Products Mega-Dropdown (All 20 Categories - Zero Transparency) */}
                  <div
                    className="absolute top-full -left-28 sm:-left-36 pt-2 w-[860px] xl:w-[940px] z-50 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 pointer-events-none group-hover/dropdown:pointer-events-auto"
                    style={{ maxWidth: "min(94vw, 960px)" }}
                  >
                    <div className="bg-[#0b1322] border border-slate-700 rounded-2xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-white">
                      {/* Top Header of Dropdown */}
                      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-750 border-slate-700">
                        <div className="flex items-center gap-2.5">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f28c28] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f28c28]"></span>
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                            All 20 Precision Tooling Categories ({PRODUCT_CATEGORIES.length} Core Lines • 32+ SKUs)
                          </span>
                        </div>
                        <Link
                          href="/products"
                          className="text-xs text-[#f28c28] hover:text-[#ff9d3b] font-bold inline-flex items-center gap-1 group transition-colors"
                        >
                          <span>Explore Full Catalog</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* All 20 Categories in 3 Clean Columns (Solid opaque cards) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[460px] overflow-y-auto pr-1">
                        {PRODUCT_CATEGORIES.map((cat) => {
                          const Icon = getCategoryIcon(cat.slug);
                          return (
                            <Link
                              key={cat.id}
                              href={`/products/category/${cat.slug}`}
                              className="p-2.5 rounded-xl bg-[#101b2d] hover:bg-[#182740] border border-slate-700/80 hover:border-[#f28c28] transition-all flex items-center gap-2.5 group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-[#162338] border border-slate-650 border-slate-600/70 flex items-center justify-center text-[#f28c28] shrink-0 group-hover:scale-105 group-hover:border-[#f28c28] transition-transform">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-[11px] font-bold text-white group-hover:text-[#f28c28] truncate transition-colors leading-tight">
                                  {cat.name}
                                </div>
                                <div className="text-[9px] text-slate-400 truncate leading-tight mt-0.5">
                                  {cat.productCount}+ tools • Industrial grade
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Bottom Banner */}
                      <div className="mt-3.5 pt-3 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <Sparkles className="w-3.5 h-3.5 text-[#f28c28]" />
                          In-House Pune Facility: Custom tools, step cutters & blueprints quoted in 24h
                        </span>
                        <Link
                          href="/custom-tooling"
                          className="text-[#f28c28] hover:text-[#ff9d3b] font-bold inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Custom Tooling Request</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors pb-1 ${
                  isActive
                    ? "text-white font-bold border-b-2 border-[#f28c28]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* =================================================================
            3. RIGHT UTILITY AREA (Search + Get a Quote + Mobile Toggle)
            ================================================================= */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 text-slate-300 hover:text-white transition-colors rounded-full hover:bg-slate-800/80"
            title="Search products and catalogue"
            aria-label="Search"
          >
            <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* Primary CTA: Get a Quote */}
          <Link
            href="/request-a-quote"
            className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#f28c28] hover:bg-[#e07b18] text-white text-xs sm:text-[13px] font-bold rounded-full transition-all flex items-center gap-1.5 shadow-lg shadow-orange-500/25 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700/60"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* =================================================================
          4. MOBILE SLIDE-IN DRAWER (Solid opaque dark cockpit theme)
          ================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b1322] border-b border-slate-700 px-5 py-5 space-y-3 text-sm font-semibold animate-in slide-in-from-top-2 duration-200 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="pb-3 mb-2 border-b border-slate-700 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Navigation Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="space-y-1">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className={`w-full flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-slate-800 text-[#f28c28] font-bold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform ${
                          mobileProductsOpen ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </button>

                    {/* Expandable All 20 Categories on Mobile */}
                    {mobileProductsOpen && (
                      <div className="pl-3 pr-1 py-1 space-y-1 bg-[#101b2d] rounded-xl border border-slate-700">
                        <Link
                          href="/products"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-1.5 px-2 text-xs font-bold text-[#f28c28]"
                        >
                          <span>Explore All Products ({PRODUCT_CATEGORIES.length} Categories)</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <div className="grid grid-cols-1 gap-0.5 max-h-60 overflow-y-auto">
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/products/category/${cat.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="py-1.5 px-2 rounded text-[11px] text-slate-300 hover:text-[#f28c28] flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f28c28]/60"></span>
                              <span className="truncate">{cat.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-slate-800 text-[#f28c28] font-bold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-700 space-y-2">
            <Link
              href="/request-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#f28c28] hover:bg-[#e07b18] text-white rounded-xl font-bold text-sm shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote (RFQ)</span>
            </Link>
          </div>
        </div>
      )}

      {/* =================================================================
          5. SEARCH OVERLAY MODAL (Solid opaque modal)
          ================================================================= */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-[#070c15]/90 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150">
          <div className="w-full max-w-2xl bg-[#0b1322] border border-slate-700 rounded-2xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-white relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <div className="flex items-center gap-2 text-slate-300">
                <Search className="w-5 h-5 text-[#f28c28]" />
                <span className="font-bold text-sm">Quick Search Catalogue</span>
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search face mills, U-drills, boring heads, inserts, alloys..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121c2d] border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#f28c28] transition-colors"
              />
            </div>

            <div className="mt-4 max-h-72 overflow-y-auto space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1">
                Matching Categories ({filteredCategories.length})
              </div>
              {filteredCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products/category/${cat.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#141f30] border border-slate-700 flex items-center justify-center text-[#f28c28]">
                      <Disc className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#f28c28] transition-colors">
                        {cat.name}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {cat.productCount}+ tools available
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Press ESC to close</span>
              <Link
                href={`/products?q=${encodeURIComponent(searchQuery)}`}
                onClick={() => setSearchOpen(false)}
                className="text-[#f28c28] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>View all search results</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
