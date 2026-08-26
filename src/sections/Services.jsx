import { Check, ArrowRight } from "lucide-react";
import Reveal, { staggerDelay } from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CONFIG from "../data/config.js";

export default function Services({ go }) {
  return (
    <section id="services" className="wrap section">
      <SectionHead title="One clear price. One clear deadline." />
      <div className="price-grid">
        {CONFIG.packages.map((pkg, i) => (
          <Reveal
            key={pkg.name}
            delay={staggerDelay(i)}
            className={`price-card ${pkg.featured ? "featured" : ""}`}
          >
            {pkg.tag && <span className="price-tag">{pkg.tag}</span>}
            <h3>{pkg.name}</h3>
            <div className="price">
              <span className="price-currency">{pkg.price.slice(0, 1)}</span>
              {pkg.price.slice(1)}
              {pkg.priceSuffix && <span className="price-suffix">{pkg.priceSuffix}</span>}
            </div>
            <p className="price-blurb">{pkg.blurb}</p>
            <ul>
              {pkg.features.map((f) => (
                <li key={f}>
                  <Check size={16} /> {f}
                </li>
              ))}
            </ul>
            <button
              className={`btn ${pkg.featured ? "btn-primary" : "btn-ghost"} full`}
              onClick={() => go("contact")}
            >
              Start a project <ArrowRight size={16} />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
