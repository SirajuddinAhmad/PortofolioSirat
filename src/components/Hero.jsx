import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Atom, MapPin, PenTool, Server } from "lucide-react";
import { profile, stats } from "../data/portfolio";
import Avatar from "./Avatar";
import BrowserFrame from "./BrowserFrame";
import SocialLinks from "./SocialLinks";

const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
      </div>

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "visible"}
        >
          <motion.p className="hero__eyebrow" variants={itemVariants}>
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </motion.p>

          <motion.h1 id="hero-title" className="hero__title" variants={itemVariants}>
            <span className="hero__name">{profile.name}</span>
            <span className="hero__headline">
              Merancang web yang cepat, rapi, dan <span className="hero__accent">bermakna.</span>
            </span>
          </motion.h1>

          <motion.p className="hero__lead" variants={itemVariants}>
            Web Developer &amp; IT Support dengan latar desain grafis. Saya membangun aplikasi dan
            landing page yang tidak hanya bekerja baik, tetapi juga terasa jelas, cepat, dan nyaman
            digunakan.
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <a className="btn btn--primary btn--lg" href="#projects">
              Lihat Proyek
              <ArrowRight size={18} />
            </a>
            <a className="btn btn--ghost btn--lg" href="#contact">
              Hubungi Saya
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div className="hero__meta" variants={itemVariants}>
            <SocialLinks />
            <span className="hero__meta-divider" aria-hidden="true" />
            <span className="hero__location">
              <MapPin size={15} aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>

          <motion.ul className="hero__stats" variants={itemVariants}>
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        >
          <div className="hero__visual-halo" aria-hidden="true" />
          <div className="hero__visual-ring" aria-hidden="true" />

          <div className="hero__browser-wrap">
            <BrowserFrame label="EDMS · Digital Archive" className="hero__browser">
              <img
                src="/projects/edms.jpg"
                alt="Cuplikan dashboard EDMS dengan ringkasan arsip dan indikator kinerja"
                width="1365"
                height="604"
                fetchPriority="high"
                decoding="async"
              />
            </BrowserFrame>
          </div>

          <div className="floating-card hero__profile">
            <Avatar />
            <div className="hero__profile-copy">
              <strong>Sirajuddin A. K.</strong>
              <span>Web Developer</span>
            </div>
            <span className="hero__profile-status" title="Terbuka untuk peluang baru">
              <span className="status-dot status-dot--small" aria-hidden="true" />
              <span className="sr-only">Tersedia untuk peluang baru</span>
            </span>
          </div>

          <div className="floating-card hero__stack" aria-hidden="true">
            <span className="hero__stack-icons">
              <span>
                <Atom size={15} />
              </span>
              <span>
                <Server size={15} />
              </span>
              <span>
                <PenTool size={15} />
              </span>
            </span>
            <span className="hero__stack-label">Code × Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
