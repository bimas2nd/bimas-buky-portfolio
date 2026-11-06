import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bimasbuky.vercel.app";

const description =
  "Portfolio of Bimas Buky — a Junior Full Stack Engineer in South Jakarta working across Next.js, TypeScript, Python, databases, networking and cybersecurity.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bimas Buky — Junior Full Stack Engineer",
    template: "%s — Bimas Buky",
  },
  description,
  applicationName: "Bimas Buky — Portfolio",
  authors: [{ name: "Bimas Buky", url: siteUrl }],
  creator: "Bimas Buky",
  keywords: [
    "Bimas Buky",
    "Full Stack Engineer",
    "Junior Full Stack Engineer",
    "Next.js Developer",
    "TypeScript",
    "Python",
    "Cybersecurity",
    "Networking",
    "Jakarta",
    "Indonesia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Bimas Buky",
    title: "Bimas Buky — Junior Full Stack Engineer",
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bimas Buky — Junior Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bimas Buky — Junior Full Stack Engineer",
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${jetBrainsMono.variable}`}
    >
      <body className="bg-canvas font-sans text-ink antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
