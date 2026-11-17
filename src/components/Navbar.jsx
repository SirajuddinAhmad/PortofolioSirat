import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";

const SECTION_IDS = navLinks.map((link) => link.id);

export default function Navbar() {
  const scrolled = useScrolled(12);
  const activeSection = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const desktopQuery = window.matchMedia("(min-width: 981px)");
    const handleViewportChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleViewportChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`.trim()}
    >
      <nav className="container navbar" aria-label="Navigasi utama">
        <a className="brand" href="#home" aria-label="Sirajuddin — kembali ke beranda">
          <span className="brand__mark" aria-hidden="true">
            S
          </span>
          <span className="brand__name">
            sirajuddin<span className="brand__dot">.</span>
          </span>
        </a>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${activeSection === link.id ? "is-active" : ""}`.trim()}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <ThemeToggle />
          <a className="btn btn--primary btn--sm navbar__cta" href="#contact">
            Mari Bicara
            <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            className="icon-button navbar__menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <nav className="container mobile-menu__inner" aria-label="Navigasi mobile">
              <ul className="mobile-menu__links">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.25 }}
                  >
                    <a
                      href={`#${link.id}`}
                      className={activeSection === link.id ? "is-active" : ""}
                      onClick={closeMenu}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={18} />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-menu__footer">
                <a className="btn btn--primary" href="#contact" onClick={closeMenu}>
                  Mulai percakapan
                  <ArrowUpRight size={16} />
                </a>
                <SocialLinks />
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
