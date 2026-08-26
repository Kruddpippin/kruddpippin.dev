import { ArrowUpRight } from "lucide-react";
import Reveal, { staggerDelay } from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CONFIG from "../data/config.js";

export default function Work() {
  return (
    <section id="work" className="wrap section">
      <SectionHead title="Pages that earn their keep" />
      <div className="work-grid">
        {CONFIG.projects.map((p, i) => {
          const imgSrc = p.screenshot || (p.live !== "#" ? `https://image.thum.io/get/width/1200/crop/630/${p.live}` : null);
          return (
            <Reveal key={p.title} delay={staggerDelay(i)} className="work-card">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="work-thumb"
                aria-label={`Visit ${p.title}`}
                style={{ background: p.grad }}
              >
                {imgSrc && (
                  <img
                    src={imgSrc}
                    alt=""
                    width={p.screenshotWidth || 1200}
                    height={p.screenshotHeight || 630}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span className="work-visit">
                  Visit <ArrowUpRight size={16} />
                </span>
              </a>
              <h3>{p.title}</h3>
              <p className="work-type">{p.type}</p>
              <div className="tags">
                {p.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
