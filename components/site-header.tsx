import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="header-inner shell">
        <Link href="/" className="wordmark" aria-label="Mark Jacob Nyumba, home">
          <span className="wordmark-mark" aria-hidden="true">MJ</span>
          <span>Mark Jacob</span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <Link href="/projects">Projects</Link>
          <Link href="/#experience">Experience</Link>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
        </nav>
        <a className="header-contact" href={`mailto:${profile.email}`}>Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </header>
  );
}
