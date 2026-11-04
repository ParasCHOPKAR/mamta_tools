import React from 'react';
import type { Metadata } from 'next';
import { FAQS } from '@/data/siteData';
import { FaqJsonLd } from '@/components/JsonLd';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | MAMTA Tools",
  description: "Find clear answers on MAMTA Tools CNC cutting tools, ISO insert compatibility, Pune manufacturing capabilities, export logistics, and distributor applications.",
  keywords: [
    "cutting tools FAQs",
    "U-drill questions",
    "milling cutter compatibility FAQ",
    "custom tooling lead time",
    "Mamta Tools FAQs"
  ]
};

export default function FaqsPage() {
  return (
    <>
      <FaqJsonLd faqs={FAQS} />
      <FaqClient />
    </>
  );
}

