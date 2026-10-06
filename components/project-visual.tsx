import type { Project } from "@/data/projects";

const visualLabels: Record<Project["category"], string> = {
  "Data Science & Machine Learning": "MODEL / STUDY",
  "Data Engineering": "PIPELINE / WAREHOUSE",
  "Software & AI Applications": "SYSTEM / PRODUCT"
};

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${project.accent} visual-${project.slug} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <span className="visual-index">{project.number}</span>
      <div className="contours"><i /><i /><i /><i /></div>
      <div className="visual-axis"><span /> <span /> <span /> <span /> <span /></div>
      <div className="visual-signal"><i /><i /><i /><i /><i /><i /></div>
      <span className="visual-label">{visualLabels[project.category]}</span>
    </div>
  );
}
