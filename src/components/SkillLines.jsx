/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { gsap, useGSAP, REDUCED_MOTION } from "@/lib/motion";

// Big-word skill lines with animated SVG chips.

function WebChip() {
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true">
      <rect x="22" y="10" width="76" height="44" rx="6" className="sk-line" />
      <line x1="22" y1="20" x2="98" y2="20" className="sk-line" />
      <rect x="30" y="27" width="34" height="6" rx="2" className="sk-fill sk-grow" style={{ "--d": "0s" }} />
      <rect x="30" y="37" width="60" height="4" rx="2" className="sk-fill sk-grow" style={{ "--d": ".3s" }} />
      <rect x="30" y="44" width="46" height="4" rx="2" className="sk-fill sk-grow" style={{ "--d": ".6s" }} />
    </svg>
  );
}

function InterfaceChip() {
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true">
      <rect x="20" y="22" width="36" height="20" rx="10" className="sk-line" />
      <circle cx="31" cy="32" r="6" className="sk-fill sk-toggle" />
      <rect x="64" y="18" width="36" height="12" rx="4" className="sk-line" />
      <rect x="64" y="34" width="36" height="12" rx="4" className="sk-line sk-press" />
    </svg>
  );
}

function BackendChip() {
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true">
      {[14, 28, 42].map((y, i) => (
        <g key={y}>
          <rect x="34" y={y} width="52" height="10" rx="3" className="sk-line" />
          <circle cx="42" cy={y + 5} r="2" className="sk-fill sk-blink" style={{ "--d": `${i * 0.35}s` }} />
          <line x1="52" y1={y + 5} x2="78" y2={y + 5} className="sk-line sk-dim" />
        </g>
      ))}
    </svg>
  );
}

function AgentChip() {
  const tools = [
    [24, 18],
    [24, 46],
    [96, 18],
    [96, 46],
  ];
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true">
      {tools.map(([x, y], i) => (
        <g key={i}>
          <line x1="60" y1="32" x2={x} y2={y} className="sk-line sk-dim" />
          <rect x={x - 5} y={y - 5} width="10" height="10" rx="2" className="sk-line" />
          <circle r="2.2" className="sk-fill">
            <animateMotion dur="1.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" path={`M60 32 L${x} ${y}`} />
          </circle>
        </g>
      ))}
      <circle cx="60" cy="32" r="8" className="sk-line sk-glow" />
      <circle cx="60" cy="32" r="3" className="sk-fill" />
    </svg>
  );
}

function DataChip() {
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true">
      <path d="M14 32 H52" className="sk-line sk-dash" />
      {[0, 1, 2].map((i) => (
        <circle key={i} r="2.4" className="sk-fill">
          <animateMotion dur="1.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" path="M14 32 H54" />
        </circle>
      ))}
      <rect x="58" y="14" width="48" height="36" rx="4" className="sk-line" />
      {[24, 32, 40].map((y, r) =>
        [64, 80, 94].map((x, c) => (
          <rect key={`${r}-${c}`} x={x} y={y - 2} width="8" height="3" rx="1.5" className="sk-fill sk-cell" style={{ "--d": `${(r * 3 + c) * 0.12}s` }} />
        )),
      )}
    </svg>
  );
}

function MiniAppChip() {
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true">
      <rect x="44" y="6" width="32" height="52" rx="7" className="sk-line" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={50 + (i % 2) * 11} y={16 + Math.floor(i / 2) * 11} width="8" height="8" rx="2" className="sk-fill sk-pop" style={{ "--d": `${i * 0.25}s` }} />
      ))}
      <rect x="50" y="42" width="20" height="5" rx="2.5" className="sk-line" />
    </svg>
  );
}

const SKILLS = [
  { a: "Web", b: "development", Chip: WebChip },
  { a: "Interface", b: "engineering", Chip: InterfaceChip },
  { a: "Back-end", b: "systems", Chip: BackendChip },
  { a: "AI", b: "agents", Chip: AgentChip },
  { a: "Data", b: "pipelines", Chip: DataChip },
  { a: "Mini", b: "apps", Chip: MiniAppChip },
];

export function SkillLines({ items = SKILLS }) {
  const root = useRef(null);

  // animate only while on screen
  useEffect(() => {
    const el = root.current;
    if (!el || !("IntersectionObserver" in window)) return undefined;
    const svgs = [...el.querySelectorAll("svg")];
    const io = new IntersectionObserver(([e]) => {
      el.classList.toggle("is-paused", !e.isIntersecting);
      svgs.forEach((svg) => (e.isIntersecting ? svg.unpauseAnimations?.() : svg.pauseAnimations?.()));
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`not ${REDUCED_MOTION}`, () => {
        root.current.querySelectorAll(".sk-row").forEach((row) => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 88%", once: true } });
          tl.from(row.querySelectorAll(".sk-word"), { opacity: 0, filter: "blur(8px)", yPercent: 20, duration: 0.9, ease: "power3.out", stagger: 0.08 }, 0)
            .from(row.querySelector(".sk-chip"), { scale: 0.2, opacity: 0, duration: 0.9, ease: "expo.out", clearProps: "transform,opacity" }, 0.1);
        });
      });
    },
    { scope: root },
  );
  return (
    <ul className="sk" ref={root}>
      {items.map(({ a, b, Chip }) => (
        <li key={a} className="sk-row">
          <span className="sk-word">{a}</span>
          <span className="sk-chip">
            <Chip />
          </span>
          <span className="sk-word">{b}</span>
        </li>
      ))}
    </ul>
  );
}
