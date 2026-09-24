import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, MapPin } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { certificates, education, experience, profile, skillGroups } from "@/data/profile";
import { projectCategories, projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  return (
    <main id="main-content">
      <section className="hero shell">
        <div className="hero-topline"><span>Portfolio / 2026</span><span className="availability"><i /> Open to thoughtful collaborations</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Data Scientist · AI/ML Engineer</p>
            <h1>Data scientist and AI/ML engineer turning complex data into practical, <em>intelligent systems.</em></h1>
            <p className="hero-intro">I&apos;m Mark Jacob Nyumba. I work across data analysis, machine learning, data engineering, reliable AI and backend product development—bringing geospatial thinking and digital transformation experience to real-world problems.</p>
            <div className="hero-actions">
              <Link href="/projects" className="button primary">Explore projects <ArrowRight size={17} /></Link>
              <a href={profile.github} target="_blank" rel="noreferrer" className="button text-button"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
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
        <SectionHeading index="01" eyebrow="Selected work" title="Projects shaped by real questions." body="A selection spanning applied machine learning, geospatial analysis and AI-enabled product engineering." />
        <div className="featured-grid">{featured.map((project) => <ProjectCard key={project.slug} project={project} featured />)}</div>
        <div className="section-link"><Link href="/projects">View all seven projects <ArrowRight size={16} /></Link></div>
      </section>

      <section className="section skills-section">
        <div className="shell">
          <SectionHeading index="02" eyebrow="Capabilities" title="From raw signal to reliable system." body="I combine analytical depth with the engineering needed to move an idea into a usable, testable form." />
          <div className="skills-grid">{skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <span className="skill-number">0{index + 1}</span><h3>{group.title}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}</div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading index="03" eyebrow="Two connected tracks" title="Analysis and application, in dialogue." />
        <div className="tracks-grid">{projectCategories.map((category, index) => {
          const categoryProjects = projects.filter((project) => project.category === category);
          return (
            <Link href={`/projects#${index === 0 ? "data-science" : "software-ai"}`} className={`track-card track-${index + 1}`} key={category}>
              <div><span className="track-index">TRACK / 0{index + 1}</span><h3>{category}</h3><p>{index === 0 ? "Forecasting, computer vision and model adaptation—built around reproducible questions and honest evaluation." : "AI workflows and geospatial products—designed as clear, inspectable systems rather than black boxes."}</p></div>
              <div className="track-bottom"><span>{categoryProjects.length} projects</span><ArrowUpRight /></div>
            </Link>
          );
        })}</div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="shell">
          <SectionHeading index="04" eyebrow="Experience" title="Work grounded in careful execution." />
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
