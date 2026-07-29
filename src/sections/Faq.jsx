import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CONFIG from "../data/config.js";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="wrap section">
      <SectionHead title="Good to know" />
      <div className="faq">
        {CONFIG.faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <button
              className={`faq-item ${openFaq === i ? "open" : ""}`}
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            >
              <span className="faq-q">
                {f.q}
                <ChevronDown size={18} className="faq-chev" />
              </span>
              <span className="faq-a">{f.a}</span>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
