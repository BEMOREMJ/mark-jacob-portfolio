import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? "featured-card" : ""}`}>
      <Link href={`/projects/${project.slug}`} className="project-card-link" aria-label={`Read the ${project.title} case study`}>
        <ProjectVisual project={project} compact={!featured} />
        <div className="project-card-content">
          <div className="project-card-meta"><span>{project.number}</span><span>{project.category}</span></div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="project-card-bottom">
            <ul aria-label="Technologies">{project.technology.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
            <span className="round-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </div>
        </div>
      </Link>
    </article>
  );
}
