import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | MAMTA Tools Pune India | Works & Sales Office",
  description: "Contact MAMTA Tools in Pune, India. Manufacturing plant at Talawade, Corporate sales office at Pimpri, direct phone numbers, WhatsApp, and global exports desk.",
  keywords: [
    "contact MAMTA Tools",
    "cutting tools manufacturer contact Pune",
    "Mamta Tools Talawade address",
    "Mamta Tools Pimpri phone",
    "industrial tooling supplier India"
  ]
};

export default function ContactPage() {
  return <ContactClient />;
}

