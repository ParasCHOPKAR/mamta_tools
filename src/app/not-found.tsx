import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Search, FileText } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-steel-50 px-4 py-16">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-steel-200 shadow-xl text-center space-y-5">
        <div className="text-6xl font-black text-brand-orange font-heading">
          404
        </div>
        <h1 className="text-xl font-bold text-navy-900">
          Precision Tool Page Not Found
        </h1>
        <p className="text-xs text-steel-500 leading-relaxed">
          The requested page or tool model might have been updated or moved. Browse our complete catalog or request assistance from our Pune sales engineering desk.
        </p>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/"
            className="w-full py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </Link>
          <Link
            href="/products"
            className="w-full py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Search className="w-4 h-4" /> Browse Cutting Tool Catalog
          </Link>
          <Link
            href="/request-a-quote"
            className="w-full py-2.5 bg-steel-100 hover:bg-steel-200 text-navy-900 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <FileText className="w-4 h-4" /> Submit RFQ / Part Drawing
          </Link>
        </div>
      </div>
    </div>
  );
}

