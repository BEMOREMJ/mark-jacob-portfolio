import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <main id="main-content" className="not-found shell"><p className="eyebrow">Error / 404</p><h1>This coordinate<br />doesn&apos;t resolve.</h1><p>The page may have moved, or the route may never have existed.</p><Link href="/" className="button primary"><ArrowLeft size={17} /> Return home</Link></main>;
}
