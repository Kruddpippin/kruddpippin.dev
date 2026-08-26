import Reveal, { staggerDelay } from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CONFIG from "../data/config.js";

export default function Testimonials() {
  return (
    <section className="wrap section">
      <SectionHead title="What clients say" />
      <div className="quotes">
        {CONFIG.testimonials.map((t, i) => (
          <Reveal key={t.name} delay={staggerDelay(i)} className="quote-card">
            <p>"{t.quote}"</p>
            <div className="quote-by">
              <div className="avatar">{t.name.charAt(0)}</div>
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
