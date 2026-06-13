import { Quote, Star } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CONFIG from "../data/config.js";

export default function Testimonials() {
  return (
    <section className="wrap section">
      <SectionHead kicker="Words" title="What clients say" />
      <div className="quotes">
        {CONFIG.testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 90} className="quote-card">
            <Quote className="quote-mark" size={26} />
            <p>{t.quote}</p>
            <div className="quote-by">
              <div className="avatar">{t.name.charAt(0)}</div>
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} fill="currentColor" />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
