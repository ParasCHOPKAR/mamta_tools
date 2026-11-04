import React from 'react';
import type { Metadata } from 'next';
import DistributorEnquiryClient from './DistributorEnquiryClient';

export const metadata: Metadata = {
  title: "Distributor & Dealer Enquiry | Partner With MAMTA Tools",
  description: "Apply for authorized MAMTA Tools regional and international cutting tool dealership. Gain protected territorial exclusivity, tiered wholesale pricing, and technical field support.",
  keywords: [
    "cutting tools dealership India",
    "tooling distributor inquiry",
    "become cutting tool dealer",
    "industrial supply distributor partnership",
    "MAMTA Tools dealership"
  ]
};

export default function DistributorEnquiryPage() {
  return <DistributorEnquiryClient />;
}

