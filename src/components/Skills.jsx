import { Database, MonitorSmartphone, Palette, Sparkles, Wrench } from "lucide-react";
import { skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUP_ICONS = {
  frontend: MonitorSmartphone,
  backend: Database,
  tools: Wrench,
  design: Palette,
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          index="02"
          label="Keahlian"
          title={
            <>
              Alat yang saya gunakan <span className="text-accent">setiap hari</span>.
            </>
          }
          description="Bukan sekadar daftar logo — ini kombinasi alat yang saya pakai untuk membangun, menguji, dan merapikan produk."
        />

        <div className="skills__grid">
          {skillGroups.map((group, index) => {
            const Icon = GROUP_ICONS[group.id];

            return (
              <Reveal className="skill-card" key={group.id} delay={index * 0.06}>
                <div className="skill-card__top">
                  <span className="skill-card__icon" aria-hidden="true">
                    <Icon size={21} />
                  </span>
                  <span className="skill-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <ul className="skill-card__tags" aria-label={`Keahlian ${group.title}`}>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="skills__note" delay={0.1}>
          <span className="skills__note-icon" aria-hidden="true">
            <Sparkles size={18} />
          </span>
          <p>
            <strong>Terus berkembang.</strong> Saya juga memanfaatkan Generative AI untuk
            mempercepat riset, eksplorasi desain, dan alur kerja pengembangan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
