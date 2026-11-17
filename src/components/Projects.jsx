import { ArrowUpRight } from "lucide-react";
import { profile, projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          index="03"
          label="Proyek"
          title={
            <>
              Kerja nyata, <span className="text-accent">bukan sekadar konsep</span>.
            </>
          }
          description="Dari sistem internal untuk mengelola arsip hingga landing page yang siap dikonversi — setiap proyek dikerjakan dengan fokus pada fungsi dan pengalaman."
        />

        <Reveal className="projects__toolbar" delay={0.05}>
          <p>
            <strong>{String(projects.length).padStart(2, "0")}</strong> proyek dipilih
          </p>
          <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
            Lihat semua di GitHub
            <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
