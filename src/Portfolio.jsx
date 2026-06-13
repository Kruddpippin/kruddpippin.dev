import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { getScheduledTheme } from "./utils/theme.js";
import Nav from "./sections/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import Stats from "./sections/Stats.jsx";
import Work from "./sections/Work.jsx";
import Services from "./sections/Services.jsx";
import Process from "./sections/Process.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import About from "./sections/About.jsx";
import Faq from "./sections/Faq.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import "./styles/index.css";

export default function Portfolio() {
  const [theme, setTheme] = useState(getScheduledTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);

  /* auto theme: light 8 AM → dark 7 PM */
  useEffect(() => {
    const schedule = () => {
      const now = new Date();
      const h = now.getHours();
      const next = new Date(now);
      if (h < 8)        { next.setHours(8,  0, 0, 0); }
      else if (h < 19)  { next.setHours(19, 0, 0, 0); }
      else              { next.setDate(next.getDate() + 1); next.setHours(8, 0, 0, 0); }
      const id = setTimeout(() => { setTheme(getScheduledTheme()); schedule(); }, next - now);
      return id;
    };
    const id = schedule();
    return () => clearTimeout(id);
  }, []);

  /* scroll progress + back-to-top visibility */
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(scrolled * 100);
      setShowTop(h.scrollTop > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* active section highlighting in the nav */
  useEffect(() => {
    const ids = ["home", "work", "services", "process", "about", "contact"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = useCallback((id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div data-theme={theme} className="root">
      <div className="progress" style={{ width: `${progress}%` }} />

      <Nav
        theme={theme}
        setTheme={setTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        active={active}
        go={go}
      />
      <Hero go={go} />
      <Stats />
      <Work />
      <Services go={go} />
      <Process />
      <Testimonials />
      <About />
      <Faq />
      <Contact />
      <Footer go={go} />

      <button
        className={`back-top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
