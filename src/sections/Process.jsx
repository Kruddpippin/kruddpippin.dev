import Reveal, { staggerDelay } from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CONFIG from "../data/config.js";

export default function Process() {
  return (
    <section id="process" className="wrap section">
      <SectionHead title="From brief to live in three days" />
      <div className="process">
        {CONFIG.process.map((step, i) => (
          <Reveal key={step.t} delay={staggerDelay(i)} className="step">
            <span className="step-num">{i + 1}</span>
            <span className="step-day">{step.day}</span>
            <h4>{step.t}</h4>
            <p>{step.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
