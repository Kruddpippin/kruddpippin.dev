import { useState, useEffect, useRef } from "react";

export default function Countdown() {
  const [t, setT] = useState(72 * 3600);
  const [bounce, setBounce] = useState(false);
  const clockRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setT((prev) => (prev <= 0 ? 72 * 3600 : prev - 1));
      setBounce(true);
      setTimeout(() => setBounce(false), 400);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hh = String(Math.floor(t / 3600)).padStart(2, "0");
  const mm = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
  const ss = String(t % 60).padStart(2, "0");
  return (
    <div className="countdown">
      <span className="cd-label">Your page, live in</span>
      <div ref={clockRef} className={`cd-clock${bounce ? " cd-bounce" : ""}`}>
        <b>{hh}</b><i>:</i><b>{mm}</b><i>:</i><b>{ss}</b>
      </div>
    </div>
  );
}
