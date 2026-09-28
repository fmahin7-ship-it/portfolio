import type { Metadata } from "next";
import { IBM_Plex_Mono, Literata, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Farhan Masud | Software & AI Engineer",
  description:
    "Farhan Masud is a Melbourne-based software and AI engineer building dependable products, agent workflows, and RAG systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable} ${literata.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
