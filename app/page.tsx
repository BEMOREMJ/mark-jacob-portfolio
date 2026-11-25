import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { additionalExperience, career, certificates, education, experience, profile, skillGroups } from "@/data/profile";
import { projectCategories, projectCategoryIds, projects, type ProjectCategory } from "@/data/projects";

const trackDescriptions: Record<ProjectCategory, string> = {
  "Data Science & Machine Learning": "Forecasting, computer vision and model adaptation—built around reproducible questions and honest evaluation.",
  "Data Engineering": "Ingestion, modelling, quality gates and reproducible reporting—designed to preserve trusted data through reruns, backfills and failures.",
  "Software & AI Applications": "AI workflows and geospatial products—designed as clear, inspectable systems rather than black boxes."
};

const projectCountWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  return (
    <main id="main-content">
      <section className="hero shell">
        <div className="hero-topline"><span>Portfolio / 2026</span><span className="availability"><i /> {career.availability}</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{profile.name}</p>
            <h1>Data Scientist <em>&amp; AI/ML Engineer</em></h1>
            <p className="hero-intro">{career.summary}</p>
            <div className="hero-actions">
              <Link href="/projects" className="button primary">Explore projects <ArrowRight size={17} /></Link>
              <a href={career.cvPath} download className="button outline"><Download size={17} aria-hidden="true" /> Download CV (PDF)</a>
            </div>
          </div>
          <div className="hero-map" aria-label="Based in Nairobi, Kenya">
            <div className="map-grid" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><i className="map-point" /></div>
            <div className="location-card"><MapPin size={17} aria-hidden="true" /><span><small>BASE COORDINATE</small>Nairobi, Kenya</span></div>
            <span className="coordinate" aria-hidden="true">01°17′S / 36°49′E</span>
          </div>
        </div>
        <a className="scroll-cue" href="#selected-work">Selected work <ArrowDownRight size={16} /></a>
      </section>

      <section className="section shell" id="selected-work">
        <SectionHeading index="01" eyebrow="Selected work" title="Models, evaluations and the data behind them." />
        <div className="featured-grid">{featured.map((project) => <ProjectCard key={project.slug} project={project} featured />)}</div>
        <div className="section-link"><Link href="/projects">View all {projectCountWords[projects.length] ?? projects.length} projects <ArrowRight size={16} /></Link></div>
      </section>

      <section className="section skills-section">
        <div className="shell">
          <SectionHeading index="02" eyebrow="Capabilities" title="Technical skills" />
          <div className="skills-grid">{skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <span className="skill-number">0{index + 1}</span><h3>{group.title}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}</div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading index="03" eyebrow="Three connected tracks" title="Explore projects by discipline." />
        <div className="tracks-grid">{projectCategories.map((category, index) => {
          const categoryProjects = projects.filter((project) => project.category === category);
          return (
            <Link href={`/projects#${projectCategoryIds[category]}`} className={`track-card track-${index + 1}`} key={category}>
              <div><span className="track-index">TRACK / 0{index + 1}</span><h3>{category}</h3><p>{trackDescriptions[category]}</p></div>
              <div className="track-bottom"><span>{categoryProjects.length} projects</span><ArrowUpRight /></div>
            </Link>
          );
        })}</div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="shell">
          <SectionHeading index="04" eyebrow="Experience" title="Professional experience" />
          <div className="timeline">{experience.map((item, index) => (
            <article className="timeline-item" key={item.role}>
              <span className="timeline-number">0{index + 1}</span>
              <div>
                <p className="timeline-org">{item.organization}</p>
                <h3>{item.role}</h3>
                {item.dates && <p className="timeline-meta">{item.dates}{item.location ? ` · ${item.location}` : ""}</p>}
              </div>
              <p>{item.detail}</p>
            </article>
          ))}</div>
          <div className="earlier-roles">
            <h3>Earlier roles</h3>
            {additionalExperience.map((item) => <p key={item.role}><strong>{item.role}</strong> · {item.organization} · {item.dates}</p>)}
          </div>
        </div>
      </section>

      <section className="section shell credentials-section">
        <div className="education-block">
          <p className="eyebrow">05 / Education</p>
          {education.map((item) => <article className="education-item" key={item.credential}><h3>{item.credential}</h3><p>{item.school}</p><span>{item.detail}</span></article>)}
        </div>
        <div className="certificate-block">
          <p className="eyebrow">06 / Certifications</p>
          <ol>{certificates.map((certificate, index) => <li key={certificate}><span>{String(index + 1).padStart(2, "0")}</span>{certificate}</li>)}</ol>
        </div>
      </section>
    </main>
  );
}
