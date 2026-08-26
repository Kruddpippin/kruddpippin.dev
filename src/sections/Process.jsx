import Reveal, { staggerDelay } from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";

const steps = [
  {
    day: "Day 0",
    t: "Brief",
    d: "You send your content, brand and one reference. The clock starts.",
  },
  {
    day: "Day 1–2",
    t: "Build",
    d: "I design and build your page, sending updates so you're never in the dark.",
  },
  {
    day: "Day 2",
    t: "Polish",
    d: "Speed, responsiveness and copy tightened until it's genuinely fast.",
  },
  {
    day: "Day 3",
    t: "Ship",
    d: "Deployed live under your account, code handed over. You're ready to sell.",
  },
];

export default function Process() {
  return (
    <section id="process" className="wrap section">
      <SectionHead title="From brief to live in three days" />
      <div className="process">
        {steps.map((step, i) => (
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
