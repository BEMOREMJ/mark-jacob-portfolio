import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow light">Have a thoughtful problem to solve?</p>
          <h2>Let&apos;s make the complex<br />clear and useful.</h2>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${profile.email}`} className="footer-email"><Mail aria-hidden="true" />{profile.email}</a>
          <div className="social-links" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="shell footer-base">
        <p>© {new Date().getFullYear()} Mark Jacob Nyumba</p>
        <p>Designed and built in Nairobi, Kenya.</p>
      </div>
    </footer>
  );
}
