import { Layers } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import CONFIG from "../data/config.js";

const skills = [
  "React", "Vite", "Responsive design", "Performance", "Conversion copy", "Deployment",
];

export default function About() {
  return (
    <section id="about" className="wrap section statement">
      <Reveal className="statement-kicker">About</Reveal>

      <div className="statement-main">
        <Reveal>
          <h2>
            Signal Labs builds businesses that look like they
            mean <em>business</em>.
          </h2>
          <p>
            We build fast, modern landing pages with React and Vite, the same
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
      </div>
    </section>
  );
}
