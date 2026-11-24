'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, X, Send } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  // Track scroll position to show/hide the "Scroll to Top" button (scrollY > 300)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Check initial scroll
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const defaultMessage =
    'Hello MAMTA Tools, I am interested in your precision cutting tools and would like to request product details and a quotation.';

  const handleStartChat = () => {
    const textToSend = customMsg.trim() ? customMsg.trim() : defaultMessage;
    const cleanNumber = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setWhatsAppOpen(false);
  };

  const phoneUrl = `tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Chat Popup Box */}
      {whatsAppOpen && (
        <div className="pointer-events-auto mb-2 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-steel-200 overflow-hidden animate-fadeInUp">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-1.5 flex items-center justify-center shadow-md flex-shrink-0">
                <img
                  src="/images/whatsapp.svg"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base leading-tight text-white">
                  MAMTA Tools Sales
                </h3>
                <div className="text-[11px] text-emerald-200 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  <span>Technical Specialist Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setWhatsAppOpen(false)}
              className="text-emerald-100 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#ECE5DD] space-y-3.5">
            {/* Welcome message bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-card border border-steel-200/60">
              <div className="text-[11px] font-semibold text-brand-teal uppercase tracking-wider mb-1">
                MAMTA Tools Engineering
              </div>
              <p className="font-bold text-xs sm:text-sm text-navy-950 mb-1">
                Welcome to MAMTA Tools! 🇮🇳
              </p>
              <p className="text-xs text-steel-700 leading-relaxed">
                Need help with tool selection, insert grades, custom tooling, or export pricing? Chat with our Pune engineering team directly.
              </p>
              <div className="text-[10px] text-steel-400 text-right mt-1 font-mono">
                Just now ✓✓
              </div>
            </div>

            {/* Custom Message Textarea */}
            <textarea
              rows={2}
              placeholder="Type your tool model or machining requirement..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleStartChat();
                }
              }}
              className="w-full p-3 text-xs sm:text-sm bg-white rounded-xl border border-steel-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent resize-none shadow-inner-soft text-navy-950 placeholder:text-steel-400"
            />

            {/* Start Chat Button */}
            <button
              onClick={handleStartChat}
              className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <img
                src="/images/whatsapp.svg"
                alt=""
                width={18}
                height={18}
                className="w-4 h-4 object-contain brightness-0 invert"
              />
              <span>Start WhatsApp Chat Now</span>
              <Send className="w-3.5 h-3.5 ml-0.5 opacity-90" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Buttons Stack */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-3 pointer-events-auto">
        {/* 1. Scroll-to-top Button: Appears when scrollY > 300 */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Back to Top"
          className={`group relative w-11 h-11 sm:w-12 sm:h-12 bg-white hover:bg-steel-50 text-navy-900 hover:text-navy-950 rounded-full shadow-lg border border-steel-200 hover:border-steel-300 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
            showScrollTop
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />

          {/* Tooltip: "Back to Top" on hover (desktop) */}
          <span className="hidden sm:inline-flex items-center absolute right-full mr-3.5 px-2.5 py-1.5 bg-navy-950 text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap pointer-events-none border border-navy-800">
            Back to Top
          </span>
        </button>

        {/* 2. Direct Phone Call Button */}
        <a
          href={phoneUrl}
          aria-label={`Call MAMTA Tools at ${COMPANY_INFO.phonePrimary}`}
          className="group relative w-12 h-12 sm:w-13 sm:h-13 bg-navy-900 hover:bg-brand-orange text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
        >
          <Phone className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />

          {/* Tooltip: phone number on hover */}
          <span className="hidden sm:inline-flex items-center absolute right-full mr-3.5 px-2.5 py-1.5 bg-navy-950 text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap pointer-events-none border border-navy-800">
            {COMPANY_INFO.phonePrimary}
          </span>
        </a>

        {/* 3. WhatsApp Floating Button (largest, most prominent) */}
        <button
          onClick={() => setWhatsAppOpen((prev) => !prev)}
          type="button"
          aria-label="Chat on WhatsApp"
          className="group relative w-14 h-14 sm:w-15 sm:h-15 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white p-3 cursor-pointer"
        >
          <img
            src="/images/whatsapp.svg"
            alt="Chat on WhatsApp"
            width={36}
            height={36}
            className="w-full h-full object-contain pointer-events-none drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />

          {/* Animated pulse badge (brand-orange) top-right */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-orange border-2 border-white"></span>
          </span>

          {/* Tooltip: "Chat on WhatsApp" */}
          <span className="hidden sm:inline-flex items-center absolute right-full mr-3.5 px-2.5 py-1.5 bg-navy-950 text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap pointer-events-none border border-navy-800">
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}
