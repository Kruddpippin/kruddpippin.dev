import { MousePointerClick, Code2, Gauge, Rocket } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";

const steps = [
  {
    icon: <MousePointerClick size={20} />,
    day: "Day 0",
    t: "Brief",
    d: "You send your content, brand and one reference. The clock starts.",
  },
  {
    icon: <Code2 size={20} />,
    day: "Day 1–2",
    t: "Build",
    d: "I design and build your page, sending updates so you're never in the dark.",
  },
  {
    icon: <Gauge size={20} />,
    day: "Day 2",
    t: "Polish",
    d: "Speed, responsiveness and copy tightened until it's genuinely fast.",
  },
  {
    icon: <Rocket size={20} />,
    day: "Day 3",
    t: "Ship",
    d: "Deployed live under your account, code handed over. You're ready to sell.",
  },
];

export default function Process() {
  return (
    <section id="process" className="wrap section">
      <SectionHead kicker="How it works" title="From brief to live in three days" />
      <div className="process">
        {steps.map((step, i) => (
          <Reveal key={step.t} delay={i * 100} className="step">
            <div className="step-top">
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="step-icon">{step.icon}</span>
            </div>
            <span className="step-day">{step.day}</span>
            <h4>{step.t}</h4>
            <p>{step.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
