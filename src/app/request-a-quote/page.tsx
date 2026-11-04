import React from 'react';
import type { Metadata } from 'next';
import RfqClient from './RfqClient';

export const metadata: Metadata = {
  title: "Request a Quote (RFQ) & Technical Drawing Upload | MAMTA Tools",
  description: "Request an industrial cutting tools quotation from MAMTA Tools. Upload component 2D/3D CAD drawings (PDF, DWG, STEP) for rapid cycle time and pricing evaluation within 24 hours.",
  keywords: [
    "cutting tools RFQ",
    "request tooling quote India",
    "drawing upload cutting tools",
    "custom tool quotation",
    "MAMTA Tools quote"
  ]
};

export default function RequestQuotePage() {
  return <RfqClient />;
}

