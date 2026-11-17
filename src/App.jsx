import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Lewati ke konten utama
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
