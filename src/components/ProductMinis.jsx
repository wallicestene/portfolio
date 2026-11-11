/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Check, ChevronDown, Search, CalendarDays } from "lucide-react";
import { pesapalSession } from "@/content/site";
import { shots } from "@/content/shots";

// Live mini demos for the project cards; static under reduced motion.

// Cycles timed states while `running`, else holds the final one.
function useSteps(durations, running, finished) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!running) return undefined;
    const id = setTimeout(() => setStep((s) => (s + 1) % durations.length), durations[step]);
    return () => clearTimeout(id);
  }, [step, running, durations]);
  return running ? step : finished;
}

// Types text once `start` is true.
function useTyped(text, start, speed = 38) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) {
      setN(0);
      return undefined;
    }
    if (n >= text.length) return undefined;
    const id = setTimeout(() => setN((v) => v + 1), speed);
    return () => clearTimeout(id);
  }, [n, start, text, speed]);
  return text.slice(0, n);
}

// Counts up once `start` is true.
function useCount(to, start, ms = 1100) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) {
      setV(0);
      return undefined;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / ms);
      setV(Math.round(to * (1 - (1 - k) ** 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, start, ms]);
  return v;
}

/* ---------- Dapi ---------- */
const DAPI_ROWS = [
  ["Pritam International Private …", "10/27/2026"],
  ["La Cabana Food Distributing, Inc.", "07/29/2026"],
  ["Conroe Welding Supply, Inc.", "10/29/2026"],
  ["Guangzhou Jiugong Resear…", "10/27/2026"],
];
const DAPI_STEPS = [900, 700, 900, 3000, 500];

function DapiMini({ running }) {
  const step = useSteps(DAPI_STEPS, running, 3);
  return (
    <div className="mini mini--dapi" data-step={step}>
      <p className="mini__title">FDA warning letters, 2026</p>
      <ul className="dm__rows">
        {DAPI_ROWS.map(([co, date], i) => (
          <li key={co} className={i === 1 && step >= 2 && step <= 3 ? "is-hit" : undefined}>
            <span>{co}</span>
            <span>{date}</span>
          </li>
        ))}
        <span className="dm__scan" aria-hidden="true" />
      </ul>
      <div className="dm__receipt">
        <p className="dm__receipt-co">La Cabana Food Distributing, Inc.</p>
        <p>From fda.gov’s own data</p>
        <p className="dm__seal">
          <Check size={12} strokeWidth={2.5} aria-hidden="true" /> Sealed <code>389f7792…53ea14</code>
        </p>
      </div>
    </div>
  );
}

/* ---------- Soko Mbele ---------- */
const SOKO_STEPS = [1100, 500, 3200, 400];

function SokoMini({ running }) {
  const step = useSteps(SOKO_STEPS, running, 2);
  const counted = useCount(5055, running && step === 2);
  const value = running ? counted : 5055;
  return (
    <div className="mini mini--soko" data-step={step}>
      <div className="sm__fields">
        <span className="sm__field">
          <em>Selling</em> Maize <ChevronDown size={12} aria-hidden="true" />
        </span>
        <span className="sm__field sm__field--qty">
          <em>How much</em> 10 bags
        </span>
      </div>
      <span className="sm__field sm__field--wide">
        <em>Nearest town</em> Meru, Meru County
      </span>
      <span className="sm__button">See where to sell</span>
      <div className="sm__answer">
        <p className="sm__where">Sell today at Maua</p>
        <p className="sm__gain">
          <small>+KSh</small> {value.toLocaleString("en-US")}
        </p>
        <p className="sm__note">more than selling at Gakoromone, after transport</p>
      </div>
    </div>
  );
}

/* ---------- Earnest Motors ---------- */
const EARNEST_FILTERS = [
  ["Make", "All makes"],
  ["Model", "Select make first"],
  ["Year", "Any year"],
  ["Category", "All categories"],
];
const EARNEST_STEPS = [900, 900, 900, 900, 900];

function EarnestMini({ running }) {
  const step = useSteps(EARNEST_STEPS, running, -1);
  return (
    <div className={`mini mini--earnest${running ? " is-running" : ""}`}>
      <div className="em__hero">
        <img src={shots["earnest-home"]} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="em__filters">
        {EARNEST_FILTERS.map(([label, value], i) => (
          <span key={label} className={`em__filter${i === step ? " is-focus" : ""}`}>
            <em>{label}</em>
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Wesh ---------- */
const WESH_STEPS = [500, 1300, 2800, 400];

function WeshMini({ running }) {
  const step = useSteps(WESH_STEPS, running, 2);
  return (
    <div className={`mini mini--wesh${running ? " is-running" : ""}`} data-step={step}>
      <img className="wm__map" src={shots.wesh} alt="" loading="lazy" decoding="async" />
      <p className="wm__lines">
        <span className={step >= 1 && step <= 2 ? "is-in" : undefined}>A tool that hunts.</span>
        <span className={step === 2 ? "is-in" : undefined}>A local who closes.</span>
      </p>
      <span className="wm__cta">Browse listings</span>
    </div>
  );
}

/* ---------- Vesper ---------- */
function VesperMini({ running }) {
  const line = "Your social media workspace";
  const typed = useTyped(line, running, 45);
  const text = running ? typed : line;
  return (
    <div className="mini mini--vesper">
      <p className="vm__nav">
        <b>Vesper</b>
        <span>Features</span>
        <span>Channels</span>
      </p>
      <p className="vm__title">
        {text}
        <i className="vm__caret" aria-hidden="true" />
      </p>
      <p className="vm__form">
        <span>Enter your email address</span>
        <b>Get Started</b>
      </p>
    </div>
  );
}

/* ---------- Pesapal RDBMS ---------- */
const PESAPAL_QUERY = pesapalSession[0].prompt;
const PESAPAL_OUT = pesapalSession[1].output;

function PesapalMini({ running }) {
  const [cycle, setCycle] = useState(0);
  const typed = useTyped(PESAPAL_QUERY, running, 34);
  const done = !running || typed.length === PESAPAL_QUERY.length;
  // replay after a pause
  useEffect(() => {
    if (!running || !done) return undefined;
    const id = setTimeout(() => setCycle((c) => c + 1), 3600);
    return () => clearTimeout(id);
  }, [running, done]);
  return (
    <div className="mini mini--pesapal" key={cycle}>
      <pre className="pm__line">
        <code>
          <span className="pm__prompt">PESAPAL-DB &gt; </span>
          {running ? typed : PESAPAL_QUERY}
          {!done && <i className="pm__caret" aria-hidden="true" />}
        </code>
      </pre>
      {done && (
        <pre className="pm__out">
          <code>{PESAPAL_OUT.join("\n")}</code>
        </pre>
      )}
    </div>
  );
}

/* ---------- Bookify ---------- */
const BOOKIFY_CHIPS = ["All", "Rooms", "Beach", "Bed and breakfast", "Cabins", "Camping", "Pools"];
const BOOKIFY_STEPS = BOOKIFY_CHIPS.map(() => 1000);

function BookifyMini({ running }) {
  const step = useSteps(BOOKIFY_STEPS, running, 0);
  return (
    <div className="mini mini--bookify">
      <p className="bm__title">
        Find Your Perfect <b>Getaway</b>
      </p>
      <div className="bm__search">
        <span>
          <em>Where</em>Search destinations
        </span>
        <span>
          <em>Check in</em>
          <CalendarDays size={11} aria-hidden="true" /> Nov 14
        </span>
        <b aria-hidden="true">
          <Search size={12} strokeWidth={2.5} />
        </b>
      </div>
      <div className="bm__chips" style={{ "--shift": Math.max(0, step - 2) }}>
        {BOOKIFY_CHIPS.map((c, i) => (
          <span key={c} className={i === step ? "is-on" : undefined}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

const MINIS = {
  dapi: DapiMini,
  "soko-mbele": SokoMini,
  "earnest-motors": EarnestMini,
  wesh: WeshMini,
  vesper: VesperMini,
  "pesapal-rdbms": PesapalMini,
  bookify: BookifyMini,
};

export function ProductMini({ slug, running }) {
  const Mini = MINIS[slug];
  return Mini ? <Mini running={running} /> : null;
}
