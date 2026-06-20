import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";

const Orb: React.FC<{
  color: string;
  size: number;
  x: number;
  y: number;
  phase: number;
  speed: number;
}> = ({ color, size, x, y, phase, speed }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const loopProgress = (frame / durationInFrames) * Math.PI * 2;

  const dx = Math.sin(loopProgress * speed + phase) * 8;
  const dy = Math.cos(loopProgress * speed * 0.7 + phase * 1.3) * 6;

  const scale = interpolate(
    Math.sin(loopProgress * speed * 0.5 + phase * 0.8),
    [-1, 1],
    [0.85, 1.2],
  );

  const opacity = interpolate(
    Math.sin(loopProgress * speed * 0.3 + phase * 1.5),
    [-1, 1],
    [0.35, 0.7],
  );

  return (
    <div
      style={{
        position: "absolute",
        left: `${x + dx}%`,
        top: `${y + dy}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(60px)",
        transform: `scale(${scale})`,
        opacity,
      }}
    />
  );
};

const FloatingLine: React.FC<{
  x1: number;
  y1: number;
  angle: number;
  length: number;
  color: string;
  phase: number;
}> = ({ x1, y1, angle, length, color, phase }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const loopProgress = (frame / durationInFrames) * Math.PI * 2;

  const opacity = interpolate(
    Math.sin(loopProgress + phase),
    [-1, 1],
    [0.03, 0.12],
  );

  const drift = Math.sin(loopProgress * 0.8 + phase) * 3;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x1 + drift}%`,
        top: `${y1}%`,
        width: length,
        height: 1,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        transform: `rotate(${angle}deg)`,
        opacity,
      }}
    />
  );
};

const Particle: React.FC<{
  x: number;
  y: number;
  color: string;
  phase: number;
  size: number;
}> = ({ x, y, color, phase, size }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const loopProgress = (frame / durationInFrames) * Math.PI * 2;

  const dx = Math.sin(loopProgress * 1.2 + phase) * 4;
  const dy = Math.cos(loopProgress * 0.9 + phase * 1.7) * 5;

  const opacity = interpolate(
    Math.sin(loopProgress * 0.6 + phase * 2),
    [-1, 1],
    [0, 0.6],
  );

  return (
    <div
      style={{
        position: "absolute",
        left: `${x + dx}%`,
        top: `${y + dy}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        opacity,
      }}
    />
  );
};

export const MyComposition = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const loopProgress = (frame / durationInFrames) * Math.PI * 2;

  const bgShift = interpolate(
    Math.sin(loopProgress * 0.5),
    [-1, 1],
    [0, 1],
  );

  return (
    <AbsoluteFill
      style={{
        background: interpolate(
          bgShift,
          [0, 1],
          [0, 1],
        )
          ? `radial-gradient(ellipse at ${50 + Math.sin(loopProgress) * 5}% ${50 + Math.cos(loopProgress * 0.7) * 5}%, #120C1E 0%, #0A0710 100%)`
          : "#0A0710",
      }}
    >
      {/* Large aurora orbs */}
      <Orb color="#FF6B57" size={500} x={15} y={20} phase={0} speed={1} />
      <Orb color="#9D7BFF" size={600} x={60} y={15} phase={2} speed={0.8} />
      <Orb color="#57E6C4" size={450} x={45} y={55} phase={4} speed={1.2} />
      <Orb color="#9D7BFF" size={350} x={80} y={50} phase={1.5} speed={0.9} />
      <Orb color="#FF6B57" size={300} x={30} y={70} phase={3} speed={1.1} />

      {/* Subtle floating lines */}
      <FloatingLine x1={10} y1={30} angle={15} length={300} color="#9D7BFF" phase={0} />
      <FloatingLine x1={60} y1={60} angle={-10} length={250} color="#57E6C4" phase={1.5} />
      <FloatingLine x1={30} y1={80} angle={5} length={200} color="#FF6B57" phase={3} />

      {/* Small particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Particle
          key={i}
          x={10 + (i * 67) % 80}
          y={10 + (i * 43) % 80}
          color={["#FF6B57", "#9D7BFF", "#57E6C4"][i % 3]}
          phase={i * 0.7}
          size={2 + (i % 3)}
        />
      ))}

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,7,16,0.6) 100%)",
        }}
      />

      {/* Grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </AbsoluteFill>
  );
};
