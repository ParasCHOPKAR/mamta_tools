'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, Mail, Globe, Menu, X, ChevronDown, 
  Award, Shield, FileText, Wrench, ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '@/data/siteData';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { 
      label: 'Products', 
      href: '/products', 
      hasDropdown: true 
    },
    { label: 'In-House', href: '/in-house-products' },
    { label: 'Industries', href: '/industries' },
    { label: 'Manufacturing', href: '/manufacturing-infrastructure' },
    { label: 'Quality', href: '/quality-assurance' },
    { label: 'Resources', href: '/technical-resources' },
    { label: 'Contact', href: '/contact-us' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all">
      {/* Top Notification & Contact Bar */}
      <div className="bg-navy-950 text-steel-300 text-[11px] py-1.5 px-4 border-b border-navy-900 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-steel-200">
              <Award className="w-3.5 h-3.5 text-brand-orange" />
              <span>{COMPANY_INFO.certification}</span>
            </span>
            <span className="flex items-center gap-1 text-steel-400">
              <Globe className="w-3.5 h-3.5 text-brand-teal" />
              <span>Exporting to USA, Germany, UK, UAE, Saudi Arabia, SE Asia</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.emailSales}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-teal" />
              <span>{COMPANY_INFO.emailSales}</span>
            </a>
            <Link 
              href="/distributor-enquiry" 
              className="text-brand-orange hover:underline font-semibold"
            >
              Distributor Network
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-200 ${scrolled ? 'py-2.5 shadow-md bg-white/95 backdrop-blur-md' : 'py-3.5 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group py-0.5">
            <img
              src="/images/logo.png"
              alt="MAMTA Tools - Precision Cutting Tools"
              width={120}
              height={48}
              style={{ maxHeight: '48px', width: 'auto' }}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="sr-only">MAMTA Tools - Precision Cutting Tools</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-xs font-semibold rounded-md inline-flex items-center gap-1 transition-colors ${
                        isActive 
                          ? 'text-brand-orange bg-steel-100' 
                          : 'text-navy-900 hover:text-brand-orange hover:bg-steel-50'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </Link>

                    {/* Mega Dropdown */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-[580px] max-h-[460px] overflow-y-auto bg-white rounded-xl shadow-2xl border border-steel-200 p-4 grid grid-cols-2 gap-2 animate-fadeIn z-50">
                        <div className="col-span-2 pb-2 mb-2 border-b border-steel-100 flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-navy-900">
                            Industrial Tooling Categories
                          </span>
                          <Link 
                            href="/products" 
                            className="text-xs text-brand-orange hover:underline font-semibold inline-flex items-center gap-1"
                          >
                            View All Products <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/products/category/${cat.slug}`}
                            className="p-2 rounded-lg hover:bg-steel-50 transition-colors flex items-start gap-2.5 group/item"
                          >
                            <div className="w-7 h-7 rounded bg-steel-100 group-hover/item:bg-navy-900 text-steel-700 group-hover/item:text-brand-orange flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                              <Wrench className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-navy-900 group-hover/item:text-brand-orange transition-colors">
                                {cat.name}
                              </div>
                              <div className="text-[10px] text-steel-500 line-clamp-1">
                                {cat.headline}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                    isActive 
                      ? 'text-brand-orange bg-steel-100' 
                      : 'text-navy-900 hover:text-brand-orange hover:bg-steel-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy-900 hover:bg-steel-100 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-steel-200 px-4 py-6 shadow-xl animate-fadeIn max-h-[80vh] overflow-y-auto">
          <div className="space-y-1 pb-4 border-b border-steel-100">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  pathname === link.href 
                    ? 'text-brand-orange bg-steel-50 font-bold' 
                    : 'text-navy-900 hover:bg-steel-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/distributor-enquiry"
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-navy-900 hover:bg-steel-50"
            >
              Distributor / Dealer Enquiry
            </Link>
            <Link
              href="/faqs"
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-navy-900 hover:bg-steel-50"
            >
              Frequently Asked Questions (FAQs)
            </Link>
          </div>

          <div className="pt-4 space-y-3">
            <div className="text-xs text-steel-500 font-semibold uppercase tracking-wider">
              Product Categories
            </div>
            <div className="grid grid-cols-1 gap-1">
              {PRODUCT_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products/category/${cat.slug}`}
                  className="text-xs text-steel-700 hover:text-brand-orange py-1.5 px-2 rounded block"
                >
                  • {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-steel-100 mt-4 space-y-2 text-xs text-steel-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-teal" />
              <span>{COMPANY_INFO.emailSales}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>{COMPANY_INFO.certification}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

