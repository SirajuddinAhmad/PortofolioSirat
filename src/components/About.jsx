import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Download,
  GraduationCap,
  MapPin,
  Target,
} from "lucide-react";
import { facts, profile } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FACT_ICONS = {
  education: GraduationCap,
  experience: BriefcaseBusiness,
  focus: Target,
  location: MapPin,
};

const VALUES = [
  "Fokus pada solusi, bukan sekadar menambah fitur.",
  "Rapi dalam kode dan konsisten dalam desain.",
  "Cepat beradaptasi dengan teknologi maupun kebutuhan baru.",
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading
          index="01"
          label="Tentang Saya"
          title={
            <>
              Developer dengan <span className="text-accent">mata desainer</span>.
            </>
          }
          description="Saya percaya produk digital yang baik lahir dari keseimbangan antara logika teknis dan kepekaan visual."
        />

        <div className="about__grid">
          <Reveal className="about__content">
            <p className="about__lead">
              Lulusan S1 Universitas Bina Sarana Informatika dengan pengalaman magang sebagai Web
              Developer dan IT Support. Saya terbiasa membangun sistem dari nol — mulai dari
              memahami masalah, merancang alur, hingga menulis kode dan merapikan tampilan.
            </p>
            <p>
              Proyek seperti EDMS dan Presensi Pro mengajarkan saya bahwa teknologi yang baik bukan
              sekadar fitur lengkap, tetapi juga mudah dipahami dan dipakai. Latar desain grafis
              membantu saya menjaga detail visual tanpa melupakan tujuan produk.
            </p>

            <ul className="about__values">
              {VALUES.map((value) => (
                <li key={value}>
                  <span className="about__check" aria-hidden="true">
                    <Check size={13} strokeWidth={2.6} />
                  </span>
                  {value}
                </li>
              ))}
            </ul>

            <div className="about__actions">
              <a className="btn btn--primary" href={profile.cv} download>
                Unduh CV
                <Download size={17} />
              </a>
              <a className="text-link" href="#journey">
                Lihat perjalanan
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>

          <div className="about__facts">
            {facts.map((fact, index) => {
              const Icon = FACT_ICONS[fact.icon];

              return (
                <Reveal className="fact-card" key={fact.label} delay={index * 0.07}>
                  <span className="fact-card__icon" aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <span className="fact-card__label">{fact.label}</span>
                  <h3>{fact.value}</h3>
                  <p>{fact.detail}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
