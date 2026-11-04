import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { OrganizationJsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mamtatools.net"),
  title: {
    default: "MAMTA Tools | Precision Cutting Tools, Milling Cutters & U-Drills Manufacturer India",
    template: "%s | MAMTA Tools",
  },
  description: "ISO 9001:2015 certified manufacturer & global exporter of high-precision CNC cutting tools, face milling cutters, indexable end mills, U-drills, and micro-boring units in Pune, India.",
  keywords: [
    "cutting tools manufacturer India",
    "face milling cutters",
    "indexable end mills",
    "high feed milling cutters",
    "U-drills manufacturer Pune",
    "micro vernier boring unit",
    "modular cutters and shanks",
    "carbide inserts supplier",
    "custom cutting tools exporter",
    "Mamta Tools Pune",
    "industrial tooling exporter USA Germany UAE",
  ],
  authors: [{ name: "MAMTA Tools" }],
  creator: "MAMTA Tools",
  publisher: "Mamta Tools Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mamtatools.net",
    siteName: "MAMTA Tools",
    title: "MAMTA Tools | Precision Cutting Tools for Modern Manufacturing",
    description: "ISO 9001:2015 certified manufacturer of indexable milling cutters, U-drills, boring tools, and custom tooling in Pune, India. Global export to USA, Europe, Middle East.",
    images: [
      {
        url: "/images/products/face-milling-cutter-100mm-en-steel/main.jpg",
        width: 1200,
        height: 630,
        alt: "MAMTA Tools Precision Cutting Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAMTA Tools | Precision Cutting Tools Manufacturer",
    description: "High-performance indexable face mills, end mills, U-drills, and boring tools. ISO 9001:2015 certified in Pune, India.",
    images: ["/images/products/face-milling-cutter-100mm-en-steel/main.jpg"],
  },
  alternates: {
    canonical: "https://www.mamtatools.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-navy-950 antialiased selection:bg-brand-orange selection:text-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
