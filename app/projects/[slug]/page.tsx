import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/site-url";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = absoluteUrl(`/projects/${project.slug}/`);
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { title: project.title, description: project.summary, type: "article", url }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <main id="main-content" className="case-study">
      <header className="case-hero shell">
        <Link href="/projects" className="back-link"><ArrowLeft size={15} /> All projects</Link>
        <div className="case-hero-grid">
          <div className="case-title">
            <p className="eyebrow">Case study / {project.number}</p>
            <h1>{project.title}</h1>
            <p className="case-summary">{project.summary}</p>
          </div>
          <ProjectVisual project={project} />
        </div>
        <dl className="case-meta">
          <div><dt>Category</dt><dd>{project.category}</dd></div>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
          <div><dt>Ownership</dt><dd>{project.ownership}</dd></div>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
        </dl>
      </header>

      <article className="case-body shell">
        <section className="case-section"><span className="case-section-index">01</span><div><p className="eyebrow">Problem / challenge</p><h2>What needed to be understood?</h2><p>{project.challenge}</p></div></section>
        <section className="case-section"><span className="case-section-index">02</span><div><p className="eyebrow">Approach</p><h2>Working from question to system.</h2><ol className="approach-list">{project.approach.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></div></section>
        <section className="case-section"><span className="case-section-index">03</span><div><p className="eyebrow">Applied capabilities</p><h2>The thinking behind the build.</h2><dl className="capability-list">{project.capabilities.map((capability) => <div key={capability.skill}><dt>{capability.skill}</dt><dd>{capability.evidence}</dd></div>)}</dl></div></section>
        <section className="case-section"><span className="case-section-index">04</span><div><p className="eyebrow">Technology</p><h2>The working toolkit.</h2><ul className="tech-list">{project.technology.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        {project.media?.caseStudy && (
          <figure className="case-figure">
            {project.media.caseStudy.href ? (
              <a href={project.media.caseStudy.href} target="_blank" rel="noreferrer" aria-label={`Open the ${project.title} interactive dashboard in a new tab`}>
                <Image src={project.media.caseStudy.src} alt={project.media.caseStudy.alt} width={1440} height={1050} sizes="(max-width: 1240px) calc(100vw - 40px), 1200px" />
              </a>
            ) : (
              <Image src={project.media.caseStudy.src} alt={project.media.caseStudy.alt} width={1440} height={1050} sizes="(max-width: 1240px) calc(100vw - 40px), 1200px" />
            )}
            {project.media.caseStudy.caption && <figcaption>{project.media.caseStudy.caption}</figcaption>}
          </figure>
        )}
        <div className="case-pair">
          <section><p className="eyebrow">05 / Evidence & validation</p><h2>What supports the work.</h2><p>{project.evidence}</p></section>
          <section className="result-panel"><p className="eyebrow">06 / Result</p><h2>Where it arrived.</h2><p>{project.result}</p></section>
        </div>
        <section className="limitations"><p className="eyebrow">07 / Honest boundaries</p><h2>Limitations matter.</h2><p>{project.limitations}</p></section>
        <section className="project-links">
          <div>
            <p className="eyebrow">Project links</p>
            <h2>{project.links.length ? "Inspect the public work." : "No public link approved."}</h2>
            <p>{project.links.length ? "Only owner-confirmed public destinations are listed." : "This case study is complete without a speculative repository, report or demo URL."}</p>
          </div>
          {project.links.length > 0 && <div className="project-link-list">{project.links.map((link) => (
            <a className="button outline" href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label} <ArrowUpRight size={14} /></a>
          ))}</div>}
        </section>
      </article>
      <nav className="next-project shell" aria-label="Case study navigation">
        <span>Next case study / {nextProject.number}</span>
        <Link href={`/projects/${nextProject.slug}`}><span>{nextProject.title}</span><ArrowRight aria-hidden="true" /></Link>
      </nav>
    </main>
  );
}
