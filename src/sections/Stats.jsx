import Reveal from "../components/Reveal.jsx";
import CountUp from "../components/CountUp.jsx";
import CONFIG from "../data/config.js";

export default function Stats() {
  return (
    <section className="stats wrap">
      {CONFIG.stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 90} className="stat">
          <div className="stat-num">
            <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
          </div>
          <div className="stat-label">{s.label}</div>
        </Reveal>
      ))}
    </section>
  );
}
