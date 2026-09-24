import type { Project } from "@/data/projects";

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${project.accent} visual-${project.slug} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <span className="visual-index">{project.number}</span>
      <div className="contours"><i /><i /><i /><i /></div>
      <div className="visual-axis"><span /> <span /> <span /> <span /> <span /></div>
      <div className="visual-signal"><i /><i /><i /><i /><i /><i /></div>
      <span className="visual-label">{project.category === "Data Science & Machine Learning" ? "MODEL / STUDY" : "SYSTEM / PRODUCT"}</span>
    </div>
  );
}
