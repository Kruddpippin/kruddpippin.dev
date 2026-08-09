import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CONFIG from "../data/config.js";

export default function Work() {
  return (
    <section id="work" className="wrap section">
      <SectionHead title="Pages that earn their keep" />
      <div className="work-grid">
        {CONFIG.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className="work-card">
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="work-thumb"
              style={
                p.screenshot
                  ? {
                      backgroundImage: `url(${p.screenshot}), ${p.grad}`,
                      backgroundSize: "cover, cover",
                      backgroundPosition: "top center, center",
                    }
                  : p.live !== "#"
                  ? {
                      backgroundImage: `url(https://image.thum.io/get/width/1200/crop/630/${p.live}), ${p.grad}`,
                      backgroundSize: "cover, cover",
                      backgroundPosition: "top center, center",
                    }
                  : { background: p.grad }
              }
            >
              <span className="work-visit">
                Visit <ArrowUpRight size={16} />
              </span>
            </a>
            <div className="work-meta">
              <div>
                <h3>{p.title}</h3>
                <p>{p.type}</p>
              </div>
              <div className="tags">
                {p.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
