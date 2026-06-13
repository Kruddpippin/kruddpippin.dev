import { useState, useEffect } from "react";

export default function Countdown() {
  const [t, setT] = useState(72 * 3600);
  useEffect(() => {
    const id = setInterval(() => {
      setT((prev) => (prev <= 0 ? 72 * 3600 : prev - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(Math.floor(t / 3600)).padStart(2, "0");
  const mm = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
  const ss = String(t % 60).padStart(2, "0");
  return (
    <div className="countdown">
      <span className="cd-label">Your page, live in</span>
      <div className="cd-clock">
        <b>{hh}</b><i>:</i><b>{mm}</b><i>:</i><b>{ss}</b>
      </div>
    </div>
  );
}
