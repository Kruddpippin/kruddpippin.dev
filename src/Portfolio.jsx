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

      {/*
        Brand accent instead of WhatsApp's official green: green is more
        instantly recognizable as WhatsApp, but it doesn't exist anywhere
        else in this palette and would clash with the coral system. Staying
        on-palette is the deliberate choice here.
      */}
      <a
        href="https://wa.me/2347014280380?text=Hi%20Signal%20Labs%2C%20I%27d%20like%20a%20page%20built."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Signal Labs on WhatsApp"
        className="whatsapp-fab"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-7.94 7.94 7.86 7.86 0 0 0 1.05 3.93L4 20l4.24-1.11a7.93 7.93 0 0 0 3.8.97h.01a7.94 7.94 0 0 0 7.94-7.94 7.86 7.86 0 0 0-2.4-5.6zm-5.55 12.2h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.66.67-2.44-.16-.25a6.58 6.58 0 0 1-1.01-3.5 6.6 6.6 0 0 1 6.61-6.61 6.56 6.56 0 0 1 4.67 1.94 6.56 6.56 0 0 1 1.93 4.67 6.6 6.6 0 0 1-6.6 6.6zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.51.64-.63.77-.11.13-.23.15-.43.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.09-.62-1.49-.16-.39-.33-.34-.45-.34-.11-.01-.25-.01-.38-.01a.73.73 0 0 0-.53.25c-.18.2-.7.68-.7 1.66s.72 1.93.82 2.06c.1.13 1.41 2.16 3.43 3.03.48.21.85.33 1.14.42.48.15.92.13 1.26.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z" />
        </svg>
      </a>
    </div>
  );
}
