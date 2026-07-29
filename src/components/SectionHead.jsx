import Reveal from "./Reveal.jsx";

export default function SectionHead({ title, lead }) {
  return (
    <Reveal className="section-head">
      <h2>{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
}
