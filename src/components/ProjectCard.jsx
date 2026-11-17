import { ArrowUpRight, CheckCircle2, ExternalLink, Lock } from "lucide-react";
import BrowserFrame from "./BrowserFrame";
import GitHubIcon from "./GitHubIcon";
import Reveal from "./Reveal";

function ProjectLinks({ project }) {
  return (
    <div className="project__links">
      {project.repo ? (
        <a href={project.repo} target="_blank" rel="noreferrer">
          <GitHubIcon size={16} />
          <span>GitHub</span>
        </a>
      ) : null}
      {project.demo ? (
        <a href={project.demo} target="_blank" rel="noreferrer">
          <ExternalLink size={15} />
          <span>Live Demo</span>
        </a>
      ) : (
        <span className="project__internal">
          <Lock size={12} />
          Sistem internal
        </span>
      )}
    </div>
  );
}

function ProjectMeta({ project }) {
  return (
    <div className="project__meta">
      <span className="project__category">{project.category}</span>
      {project.featured ? <span className="project__badge">Unggulan</span> : null}
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const primaryLink = project.demo || project.repo;

  return (
    <Reveal
      as="article"
      className={`project ${project.featured ? "project--featured" : ""}`.trim()}
      delay={(index % 2) * 0.08}
      amount={0.15}
    >
      <a
        className="project__media"
        href={primaryLink}
        target="_blank"
        rel="noreferrer"
        aria-label={`Buka ${project.title}`}
      >
        <BrowserFrame label={project.browserLabel}>
          <img
            src={project.image}
            alt={project.imageAlt}
            loading={project.featured ? "eager" : "lazy"}
            decoding="async"
            style={{ objectPosition: project.imagePosition }}
          />
        </BrowserFrame>
        <span className="project__open" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </a>

      {project.featured ? (
        <div className="project__body project__body--featured">
          <div className="project__intro">
            <ProjectMeta project={project} />
            <h3>{project.title}</h3>
            <p className="project__subtitle">{project.subtitle}</p>
          </div>

          <div className="project__details">
            <p className="project__description">{project.description}</p>

            <ul className="project__highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  <CheckCircle2 size={15} />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="project__footer">
              <ul className="tech-tags" aria-label="Teknologi yang digunakan">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      ) : (
        <div className="project__body">
          <ProjectMeta project={project} />
          <h3>{project.title}</h3>
          <p className="project__subtitle">{project.subtitle}</p>
          <p className="project__description">{project.description}</p>

          <div className="project__footer">
            <ul className="tech-tags" aria-label="Teknologi yang digunakan">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <ProjectLinks project={project} />
          </div>
        </div>
      )}
    </Reveal>
  );
}
