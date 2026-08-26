import { Rocket, ArrowUpRight } from "lucide-react";
import DeliveryStrip from "../components/DeliveryStrip.jsx";
import Dot from "../components/Dot.jsx";
import CONFIG from "../data/config.js";

export default function Hero({ go }) {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden />
      <div className="grain" aria-hidden />

      <div className="hero-grid">
        <div className="hero-copy">
          <span className="available">
            <span className="available-dot" /> Available for new projects
          </span>

          <h1 className="hero-title">
            Beautiful pages.
            <br />
            <em>Shipped in 72 hours.</em>
          </h1>

          <DeliveryStrip />

          <p className="hero-sub">{CONFIG.role}</p>

          <div className="hero-cta">
            <button className="btn btn-primary big" onClick={() => go("contact")}>
              <Rocket size={18} /> Start a project
            </button>
            <button className="btn btn-ghost big" onClick={() => go("work")}>
              See the work <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="hero-art"
          style={{ backgroundImage: `url(${CONFIG.heroImage})` }}
        />
      </div>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              More bookings <Dot /> Faster pages <Dot /> Fixed deadlines <Dot />
              Mobile-first <Dot /> 72-hour delivery <Dot /> No lock-in <Dot />
              Clear pricing <Dot /> Landing pages <Dot />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
