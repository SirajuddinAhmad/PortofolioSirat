import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand" href="#home" aria-label="Sirajuddin — kembali ke beranda">
              <span className="brand__mark" aria-hidden="true">
                S
              </span>
              <span className="brand__name">
                sirajuddin<span className="brand__dot">.</span>
              </span>
            </a>
            <p>Merancang dan membangun pengalaman digital yang rapi, cepat, dan bermakna.</p>
            <p className="footer__status">
              <span className="status-dot status-dot--small" aria-hidden="true" />
              {profile.availability}
            </p>
          </div>

          <nav className="footer__nav" aria-label="Navigasi footer">
            <h3>Jelajahi</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact">
            <h3>Tetap terhubung</h3>
            <a className="footer__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <SocialLinks />
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {profile.name}. Dibangun dengan React, Vite, dan Framer Motion.
          </p>
          <a className="footer__top-link" href="#home">
            Kembali ke atas
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
