import { Zap, Clock, Check, Layers } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import CONFIG from "../data/config.js";

const skills = [
  "React", "Vite", "Responsive design", "Performance", "Conversion copy", "Deployment",
];

export default function About() {
  return (
    <section id="about" className="wrap section about">
      <Reveal className="about-text">
        <h2>
          I'm {CONFIG.fullName}. I make businesses look like they mean business.
        </h2>
        <p>
          Let's build you a fast, modern landing page with React and Vite — the same
          tools the best product teams use. Most freelance work goes quiet for
          a week and shows up late. We do the opposite: a fixed price, a fixed
          deadline, and clear updates the whole way through.
        </p>
        <p className="muted-line">{CONFIG.location}</p>
        <div className="about-skills">
          {skills.map((s) => (
            <span key={s}><Layers size={13} /> {s}</span>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120} className="about-card">
        <div className="about-card-row">
          <Zap size={18} />
          <div><strong>Fast by default</strong><span>Pages built to load in around a second.</span></div>
        </div>
        <div className="about-card-row">
          <Clock size={18} />
          <div><strong>On time, every time</strong><span>Late delivery means your money back.</span></div>
        </div>
        <div className="about-card-row">
          <Check size={18} />
          <div><strong>You own everything</strong><span>Full code handover, no lock-in.</span></div>
        </div>
      </Reveal>
    </section>
  );
}
