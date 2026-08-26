import Reveal, { staggerDelay } from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CONFIG from "../data/config.js";

export default function Testimonials() {
  const [lead, ...rest] = CONFIG.testimonials;
  return (
    <section className="wrap section">
      <SectionHead title="What clients say" />
      <div className="quotes">
        <Reveal className="quote-card lead">
          <p>"{lead.quote}"</p>
          <div className="quote-by">
            <div className="avatar">{lead.name.charAt(0)}</div>
            <div>
              <strong>{lead.name}</strong>
              <span>{lead.role}</span>
            </div>
          </div>
        </Reveal>
        {rest.map((t, i) => (
          <Reveal key={t.name} delay={staggerDelay(i + 1)} className="quote-card">
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
