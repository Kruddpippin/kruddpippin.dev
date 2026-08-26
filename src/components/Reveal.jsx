import { useState, useEffect, useRef } from "react";

export function staggerDelay(i, step = 60, max = 240) {
  return Math.min(i * step, max);
}

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div", style = {} }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
