import { Rocket, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Countdown from "../components/Countdown.jsx";
import Dot from "../components/Dot.jsx";
import CONFIG from "../data/config.js";

export default function Hero({ go }) {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden />
      <div className="grain" aria-hidden />

      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal className="available">
            <span className="available-dot" /> Available for new projects
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-title">
              Beautiful pages.
              <br />
              <em>Shipped in 72 hours.</em>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <Countdown />
          </Reveal>

          <Reveal delay={260} className="hero-sub">
            {CONFIG.role}
          </Reveal>

          <Reveal delay={300} className="hero-cta">
            <button className="btn btn-primary big" onClick={() => go("contact")}>
              <Rocket size={18} /> Start a project
            </button>
            <button className="btn btn-ghost big" onClick={() => go("work")}>
              See the work <ArrowUpRight size={18} />
            </button>
          </Reveal>
        </div>

        <Reveal
          delay={140}
          className="hero-art"
          style={{ backgroundImage: `url(${CONFIG.heroImage})` }}
        >
          <div className="art-sticker">
            Built to
            <br />
            convert
          </div>
        </Reveal>
      </div>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              React <Dot /> Vite <Dot /> Conversion <Dot /> Speed <Dot />
              Landing pages <Dot /> Clean code <Dot /> Mobile-first <Dot />
              72-hour delivery <Dot />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
