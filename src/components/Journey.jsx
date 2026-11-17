import { Award, BriefcaseBusiness, CalendarDays, GraduationCap } from "lucide-react";
import { certifications, education, experiences } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <SectionHeading
          index="04"
          label="Perjalanan"
          title={
            <>
              Belajar, membangun, dan <span className="text-accent">terus berkembang</span>.
            </>
          }
          description="Pengalaman yang membentuk cara saya bekerja — dari dukungan teknis sehari-hari hingga membangun sistem yang dipakai untuk mengelola dokumen perusahaan."
        />

        <div className="journey__grid">
          <div className="journey__main">
            <Reveal className="journey__block">
              <div className="journey__block-head">
                <span className="journey__block-icon" aria-hidden="true">
                  <BriefcaseBusiness size={19} />
                </span>
                <div>
                  <h3>Pengalaman</h3>
                  <p>Magang dan proyek nyata</p>
                </div>
              </div>

              <ol className="timeline">
                {experiences.map((experience) => (
                  <li className="timeline__item" key={`${experience.role}-${experience.company}`}>
                    <span className="timeline__dot" aria-hidden="true" />
                    <div className="timeline__header">
                      <div>
                        <h4>{experience.role}</h4>
                        <p>{experience.company}</p>
                      </div>
                      <span className="timeline__period">
                        <CalendarDays size={13} />
                        {experience.period}
                      </span>
                    </div>
                    <p className="timeline__description">{experience.description}</p>
                    <ul className="timeline__highlights">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="education-card" delay={0.08}>
              <span className="education-card__icon" aria-hidden="true">
                <GraduationCap size={22} />
              </span>
              <div className="education-card__copy">
                <span className="education-card__label">Pendidikan</span>
                <h3>
                  {education.degree} — {education.school}
                </h3>
                <p>{education.description}</p>
              </div>
              <span className="education-card__period">{education.period}</span>
            </Reveal>
          </div>

          <Reveal className="certifications" delay={0.1}>
            <div className="certifications__head">
              <span className="certifications__icon" aria-hidden="true">
                <Award size={21} />
              </span>
              <div>
                <h3>Sertifikasi</h3>
                <p>
                  {String(certifications.length).padStart(2, "0")} kredensial yang mendukung
                  keahlian teknis dan komunikasi.
                </p>
              </div>
            </div>

            <ul className="certifications__list">
              {certifications.map((certification) => (
                <li className="cert-card" key={`${certification.title}-${certification.date}`}>
                  <span className="cert-card__icon" aria-hidden="true">
                    <Award size={17} />
                  </span>
                  <div className="cert-card__content">
                    <div className="cert-card__meta">
                      <span className="cert-card__topic">{certification.topic}</span>
                      <span className="cert-card__date">{certification.date}</span>
                    </div>
                    <h4>{certification.title}</h4>
                    <p>{certification.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
