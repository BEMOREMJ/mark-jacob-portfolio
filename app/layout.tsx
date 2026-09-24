import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "Mark Jacob Nyumba — Data Scientist & AI Engineer", template: "%s — Mark Jacob Nyumba" },
  description: "Portfolio of Mark Jacob Nyumba, a Nairobi-based data scientist and AI engineer working across machine learning, reliable AI systems, product engineering and geospatial analysis.",
  authors: [{ name: "Mark Jacob Nyumba" }],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Mark Jacob Nyumba — Data Scientist & AI Engineer",
    description: "Data, AI and geospatial thinking applied to useful, dependable systems.",
    url: absoluteUrl("/"),
    type: "website",
    locale: "en_KE"
  },
  twitter: { card: "summary", title: "Mark Jacob Nyumba — Data Scientist & AI Engineer", description: "Data, AI and geospatial thinking applied to useful, dependable systems." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
