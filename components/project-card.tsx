import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const caseStudyHref = `/projects/${project.slug}`;
  const preview = project.media?.cardPreview;

  return (
    <article className={`project-card card-${project.accent} ${featured ? "featured-card" : ""}`}>
      <div className="project-card-link">
        {preview ? (
          <a
            href={preview.href ?? caseStudyHref}
            className="project-card-visual-link"
            target={preview.href ? "_blank" : undefined}
            rel={preview.href ? "noreferrer" : undefined}
            aria-label={preview.href ? `Open the ${project.title} interactive dashboard in a new tab` : `Read the ${project.title} case study`}
          >
            <div className={`project-card-image ${featured ? "" : "is-compact"}`}>
              <Image src={preview.src} alt={preview.alt} width={1440} height={1050} sizes={featured ? "(max-width: 720px) calc(100vw - 32px), 50vw" : "(max-width: 720px) calc(100vw - 32px), (max-width: 980px) 50vw, 33vw"} />
              {preview.href && <span className="project-preview-cta">Open dashboard <ArrowUpRight size={14} aria-hidden="true" /></span>}
            </div>
          </a>
        ) : (
          <Link href={caseStudyHref} className="project-card-visual-link" aria-label={`Read the ${project.title} case study`}>
            <ProjectVisual project={project} compact={!featured} />
          </Link>
        )}
        <Link href={caseStudyHref} className="project-card-content" aria-label={`Read the ${project.title} case study`}>
          <div className="project-card-meta"><span>{project.number}</span><span>{project.category}</span></div>
          <h3>{project.title}</h3>
          <span className="project-card-ownership">{project.ownership}</span>
          <p>{project.summary}</p>
          <div className="project-card-bottom">
            <ul aria-label="Technologies">{project.technology.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
            <span className="project-card-cta">Explore case study <span className="round-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span></span>
          </div>
        </Link>
      </div>
    </article>
  );
}
