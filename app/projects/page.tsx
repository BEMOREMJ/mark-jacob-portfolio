import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projectCategories, projectCategoryIds, projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected data science, data-engineering, machine-learning, geospatial and AI application projects by Mark Jacob Nyumba.",
  alternates: { canonical: absoluteUrl("/projects/") },
  openGraph: { url: absoluteUrl("/projects/") }
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="projects-page">
      <header className="page-hero shell">
        <div className="page-count">INDEX / {String(projects.length).padStart(2, "0")}</div>
        <p className="eyebrow">Project archive</p>
        <h1>Project <em>case studies</em></h1>
        <p>Explore forecasting experiments, AI workflows and the data pipelines behind them. Each case study describes my contribution, the result and how I checked it.</p>
      </header>
      {projectCategories.map((category, categoryIndex) => {
        const categoryProjects = projects.filter((project) => project.category === category);
        return (
          <section className="project-category shell" id={projectCategoryIds[category]} key={category}>
            <div className="category-heading"><span>0{categoryIndex + 1}</span><div><p>PROJECT TRACK</p><h2>{category}</h2></div><p>{categoryProjects.length} projects</p></div>
            <div className="project-list-grid">{categoryProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
          </section>
        );
      })}
    </main>
  );
}
