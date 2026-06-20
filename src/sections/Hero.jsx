import { Sparkles, Rocket, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Countdown from "../components/Countdown.jsx";
import Dot from "../components/Dot.jsx";
import CONFIG from "../data/config.js";

export default function Hero({ go }) {
  return (
    <section id="home" className="hero">
      <div className="aurora" aria-hidden />
      <div className="grain" aria-hidden />

      <div className="hero-inner">
        <Reveal className="eyebrow">
          <Sparkles size={14} /> Available for new projects
        </Reveal>

        <div className="hero-video-zone">
          <video
            className="hero-bg-video"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden
            src="/hero-bg.mp4"
          />
          <div className="hero-video-overlay" aria-hidden />

          <Reveal delay={80}>
            <h1 className="hero-title">
              Beautiful pages.
              <br />
              <span className="grad-text">Shipped in 72 hours.</span>
            </h1>
          </Reveal>

          <Reveal delay={160} className="hero-sub">
            {CONFIG.role}
          </Reveal>

          <Reveal delay={220}>
            <Countdown />
          </Reveal>
        </div>

        <Reveal delay={300} className="hero-cta">
          <button className="btn btn-primary big" onClick={() => go("contact")}>
            <Rocket size={18} /> Start a project
          </button>
          <button className="btn btn-ghost big" onClick={() => go("work")}>
            See the work <ArrowUpRight size={18} />
          </button>
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
