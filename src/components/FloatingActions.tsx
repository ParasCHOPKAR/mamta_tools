'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, X, Send } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  // Track scroll position to show/hide the "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const defaultMessage = "Hello MAMTA Tools, I am interested in your precision cutting tools and would like to request product details and a quotation.";

  const handleStartChat = () => {
    const textToSend = customMsg.trim() ? customMsg : defaultMessage;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setWhatsAppOpen(false);
  };

  const phoneUrl = `tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Chat Popup Box */}
      {whatsAppOpen && (
        <div className="pointer-events-auto mb-2 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-steel-200 overflow-hidden animate-fadeIn">
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
                <div className="font-bold text-sm leading-tight">MAMTA Tools Sales</div>
                <div className="text-[11px] text-emerald-200 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>Technical Specialist Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setWhatsAppOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#ECE5DD] space-y-3">
            <div className="bg-white p-3 rounded-xl shadow-sm text-xs text-steel-800 rounded-tl-none border border-steel-200/50">
              <p className="font-semibold text-navy-900 mb-1">
                Welcome to MAMTA Tools! 🇮🇳
              </p>
              <p className="text-steel-600 leading-relaxed">
                Need help with tool selection, insert grades, or immediate export pricing? Chat with our Pune engineering team directly.
              </p>
            </div>
            <textarea
              rows={2}
              placeholder="Type your tool model or machining requirement..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full p-2.5 text-xs bg-white rounded-lg border border-steel-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none shadow-sm text-navy-900 placeholder:text-steel-400"
            />
            <button
              onClick={handleStartChat}
              className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
            >
              <img
                src="/images/whatsapp.svg"
                alt=""
                width={18}
                height={18}
                className="w-4 h-4 object-contain brightness-0 invert"
              />
              <span>Start WhatsApp Chat Now</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Buttons Stack */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-3 pointer-events-auto">
        {/* 1. Scroll-To-Top Button (Top bar floating button) */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll back to top"
          className={`group relative w-11 h-11 sm:w-12 sm:h-12 bg-white hover:bg-navy-900 text-navy-900 hover:text-white rounded-full shadow-lg border border-steel-200 hover:border-navy-900 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
            showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
          
          {/* Tooltip on hover */}
          <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 bg-navy-900 text-white text-[11px] font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Back to Top
          </span>
        </button>

        {/* 2. Direct Phone Call Button */}
        <a
          href={phoneUrl}
          aria-label={`Call MAMTA Tools at ${COMPANY_INFO.phonePrimary}`}
          className="group relative w-12 h-12 sm:w-13 sm:h-13 bg-navy-900 hover:bg-brand-orange text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
        >
          <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
          
          {/* Tooltip on hover */}
          <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 bg-navy-900 text-white text-[11px] font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call: {COMPANY_INFO.phonePrimary}
          </span>
        </a>

        {/* 3. WhatsApp Floating Button */}
        <button
          onClick={() => setWhatsAppOpen(!whatsAppOpen)}
          type="button"
          aria-label="Chat on WhatsApp with MAMTA Tools"
          className="group relative w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white p-2.5 cursor-pointer"
        >
          <img
            src="/images/whatsapp.svg"
            alt="WhatsApp Chat"
            width={36}
            height={36}
            className="w-full h-full object-contain pointer-events-none drop-shadow-sm transition-transform group-hover:scale-105"
          />

          {/* Online Notification Pulse Badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-orange border-2 border-white"></span>
          </span>

          {/* Tooltip on hover */}
          <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 bg-navy-900 text-white text-[11px] font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}

