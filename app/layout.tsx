import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";
import { career, profile } from "@/data/profile";
import "./globals.css";

const title = `${profile.name} — ${career.title}`;
const description = "Mark Jacob Nyumba builds and evaluates forecasting models and AI decision-support tools in Nairobi, Kenya.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: title, template: "%s — Mark Jacob Nyumba" },
  description,
  authors: [{ name: "Mark Jacob Nyumba" }],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/"),
    type: "website",
    locale: "en_KE"
  },
  twitter: { card: "summary", title, description }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
