import CONFIG from "../data/config.js";

export default function DeliveryStrip() {
  return (
    <div className="delivery-strip">
      <span className="delivery-label">72 hours, start to finish</span>
      <div className="delivery-days">
        {CONFIG.process.map((step) => (
          <span key={step.t} className="delivery-day">
            <b>{step.day}</b>
            <span>{step.t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
