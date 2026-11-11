/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { layers } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { prefersReducedMotion } from "@/lib/motion";

// Capability layers: a list beside an isometric stack; auto-advances until a layer is picked.

const STEP_MS = 5600;
const S = 180; // plate side, in plate units
const T = 10; // plate thickness
const GAP = 84; // distance between plates
const CX = 170; // the drawing's centre line
const TOP = 46;
const W = 0.866 * S; // half the projected width
const H = 0.5 * S; // half the projected height
const iso = (y) => `matrix(0.866 0.5 -0.866 0.5 ${CX} ${y})`;

// Plate drawings in plate units (0–180), kept clear of the plate above.
function InterfaceArt() {
  return (
    <>
      <rect x="20" y="104" width="60" height="18" />
      <rect x="20" y="138" width="60" height="16" />
      <line x1="40" y1="138" x2="40" y2="154" />
      <line x1="60" y1="138" x2="60" y2="154" />
      <rect x="98" y="30" width="46" height="20" rx="10" />
      <circle className="art__knob" cx="108" cy="40" r="6" />
      <rect x="96" y="76" width="66" height="78" />
      <line x1="106" y1="96" x2="150" y2="96" />
      <line x1="106" y1="110" x2="140" y2="110" />
      <line x1="106" y1="124" x2="146" y2="124" />
    </>
  );
}

function ProductArt() {
  return (
    <>
      <rect x="16" y="16" width="148" height="148" />
      <line x1="56" y1="16" x2="56" y2="164" />
      <line x1="56" y1="38" x2="164" y2="38" />
      {[58, 84, 110, 136].map((y, i) => (
        <rect key={y} x="70" y={y} width="80" height="14" className="art__row" style={{ "--d": `${i * 0.18}s` }} />
      ))}
    </>
  );
}

// an agent at the centre, wired to the tools it uses
const AGENT_TOOLS = [
  [36, 150],
  [96, 164],
  [158, 156],
  [160, 36],
  [150, 96],
];
function AgentsArt() {
  return (
    <>
      {AGENT_TOOLS.map(([x, y]) => (
        <line key={`l${x}`} x1="118" y1="120" x2={x} y2={y} />
      ))}
      <circle cx="118" cy="120" r="13" />
      <circle cx="118" cy="120" r="5" className="art__hub" />
      {AGENT_TOOLS.map(([x, y], i) => (
        <g key={`n${x}`}>
          <rect x={x - 7} y={y - 7} width="14" height="14" />
          <circle cx={x} cy={y} r="2.6" className="art__digit" style={{ "--d": `${i * 0.3}s` }} />
        </g>
      ))}
    </>
  );
}

function DataArt() {
  const cells = [];
  for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) cells.push([30 + c * 20, 30 + r * 20]);
  return (
    <>
      {cells.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" className="art__cell" />
      ))}
      {[90, 110, 130, 150].map((y, i) => (
        <circle key={y} cx="30" cy={y} r="3.2" className="art__flow" style={{ "--d": `${i * 0.45}s` }} />
      ))}
    </>
  );
}

function SecurityArt() {
  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x={16 + i * 26} y="122" width="20" height="24" />
          <circle cx={26 + i * 26} cy="134" r="2.4" className="art__digit" style={{ "--d": `${i * 0.22}s` }} />
        </g>
      ))}
      <rect x="104" y="46" width="44" height="34" />
      <path d="M114 46 V36 a12 12 0 0 1 24 0 V46" />
    </>
  );
}

const ART = { interface: InterfaceArt, product: ProductArt, agents: AgentsArt, data: DataArt, security: SecurityArt };

function Plate({ i, layer, active, onPick }) {
  const offset = active === i ? 0 : i < active ? -30 : 30;
  const y = TOP + i * GAP;
  const Art = ART[layer.id];
  return (
    <g
      className={`plate${active === i ? " is-active" : ""}`}
      style={{ transform: `translateY(${offset}px)` }}
      onClick={() => onPick(i)}
    >
      <polygon className="plate__side" points={`${CX - W},${y + H} ${CX},${y + S} ${CX},${y + S + T} ${CX - W},${y + H + T}`} />
      <polygon className="plate__side plate__side--right" points={`${CX},${y + S} ${CX + W},${y + H} ${CX + W},${y + H + T} ${CX},${y + S + T}`} />
      <g transform={iso(y)}>
        <rect className="plate__top" width={S} height={S} />
        <g className="plate__art">
          <Art />
        </g>
      </g>
      <line className="plate__leader" x1={CX + W + 8} y1={y + H} x2={CX + W + 26} y2={y + H} />
      <text className="plate__label" x={CX + W + 32} y={y + H + 4}>
        {layer.name}
      </text>
    </g>
  );
}

function LayerStack({ active, onPick }) {
  const height = TOP + (layers.length - 1) * GAP + S + T + 50;
  return (
    <svg className="lstack" viewBox={`0 0 440 ${height}`} aria-hidden="true">
      {/* bottom plate first, so each plate above covers the one below */}
      {layers
        .map((layer, i) => ({ layer, i }))
        .reverse()
        .map(({ layer, i }) => (
          <Plate key={layer.id} i={i} layer={layer} active={active} onPick={onPick} />
        ))}
    </svg>
  );
}

// Auto-advance while visible; pauses on hover or focus, stops once a layer is picked.
function useLayerTour(rootRef) {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [rootRef]);

  const running = inView && !paused && !stopped;
  useEffect(() => {
    if (!running) return undefined;
    const id = setTimeout(() => setActive((a) => (a + 1) % layers.length), STEP_MS);
    return () => clearTimeout(id);
  }, [active, running]);

  const pick = (i) => {
    setActive(i);
    setStopped(true);
  };
  const hold = {
    onPointerEnter: () => setPaused(true),
    onPointerLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };
  return { active, pick, hold, running };
}

export function Capabilities() {
  const body = useRef(null);
  const { active, pick, hold, running } = useLayerTour(body);

  return (
    <Reveal id="capabilities" className="layers section" aria-labelledby="capabilities-title">
      <header className="section-head layers__head">
        <h2 id="capabilities-title" className="section-title">
          What I do.
        </h2>
        <p className="section-sub">Front end, back end and the data underneath. I work on every layer of a product.</p>
      </header>

      <div ref={body} className={`layers__body${running ? " is-running" : ""}`} style={{ "--step": `${STEP_MS}ms` }} {...hold}>
        <div className="layers__stage" data-reveal>
          <LayerStack active={active} onPick={pick} />
        </div>

        <ul className="layers__list" data-reveal>
          {layers.map((l, i) => {
            const open = active === i;
            return (
              <li key={l.id} id={`layer-${l.id}`} className={`layer${open ? " is-active" : ""}`}>
                <h3>
                  <button
                    type="button"
                    className="layer__head"
                    aria-expanded={open}
                    aria-controls={`layer-panel-${l.id}`}
                    onClick={() => pick(i)}
                  >
                    <span className="layer__name">{l.name}</span>
                    <span className="layer__line">{l.line}</span>
                  </button>
                </h3>
                <div id={`layer-panel-${l.id}`} className="layer__panel" inert={open ? undefined : ""}>
                  <div className="layer__inner">
                    <p className="layer__proof">{l.proof}</p>
                    <p className="layer__meta">
                      <span className="layer__tools">
                        <span className="sr-only">Tools: </span>
                        {l.tools.join(" · ")}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="layer__progress" aria-hidden="true" />
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}
