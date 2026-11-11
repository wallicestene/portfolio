/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Fingerprint,
  FlaskConical,
  Layers,
  Network,
  RefreshCw,
  Rss,
  ShieldCheck,
} from "lucide-react";
import { actors, person, practices } from "@/content/site";
import {
  gsap,
  useGSAP,
  REDUCED_MOTION,
  prefersReducedMotion,
} from "@/lib/motion";
import { useApifyStats } from "@/lib/useApifyStats";
import { cardPath, framePath } from "@/lib/notchPath";
import { FieldCanvas } from "@/components/FieldCanvas";
import { SectionLink } from "@/components/SectionLink";
import { Odometer } from "@/components/Odometer";

const HEADLINE = ["Fintech,", "the web, and", "the data underneath."];

const GAP = 10; // the black seam between the panel and anything cut into it
// Shared clock: the practice card and facts tile tick together; hovering either pauses both.
const TICK_MS = 5600;
const DIAL_MS = TICK_MS;
const Clock = createContext(null);

function useHeroClock() {
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(() => prefersReducedMotion());
  useEffect(() => {
    if (paused || stopped) return undefined;
    const id = setTimeout(() => setTick((t) => t + 1), TICK_MS);
    return () => clearTimeout(id);
  }, [tick, paused, stopped]);
  const hold = {
    onPointerEnter: () => setPaused(true),
    onPointerLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };
  return {
    tick,
    hold,
    running: !paused && !stopped,
    stop: () => setStopped(true),
  };
}

// Steps through items on the shared clock. Picking one shows it and stops the clock.
function useRotation(count) {
  const clock = useContext(Clock);
  const [offset, setOffset] = useState(0);
  const index = (((clock.tick + offset) % count) + count) % count;
  const pick = useCallback(
    (i) => {
      setOffset(i - clock.tick);
      clock.stop();
    },
    [clock],
  );
  return {
    index,
    pick,
    hold: clock.hold,
    running: clock.running,
    next: () => pick((index + 1) % count),
  };
}

/* ---------- facts tile ---------- */

// Keeps brand names like "M-PESA" from breaking at their hyphen in a narrow tile.
function keepWhole(text) {
  const parts = text.split(/(M-PESA)/);
  return parts.map((part, i) =>
    part === "M-PESA" ? (
      <span key={i} className="nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function ago(iso) {
  const mins = Math.max(
    1,
    Math.round((Date.now() - new Date(iso).getTime()) / 60000),
  );
  if (mins < 60) return `${mins}m`;
  const hours = Math.round(mins / 60);
  return hours < 48 ? `${hours}h` : `${Math.round(hours / 24)}d`;
}

function useFacts() {
  const hp = useApifyStats(actors[0]);
  const gm = useApifyStats(actors[1]);
  const live = hp.live && gm.live;
  const lastRun = [hp.lastRun, gm.lastRun].filter(Boolean).sort().pop();
  return [
    { value: "20+", label: "actors I’ve built on Apify" },
    { value: "300", label: "cups of coffee this year" },
    {
      value: "4",
      label: "countries my clients are in: Denmark, the UK, the US and Canada",
    },
    { value: "1,500", label: "bugs fixed this year" },
    { value: "99%+", label: "successful runs across client data jobs" },
    { value: "10+", label: "projects completed this year" },
    { value: "400K", label: "lines of code written" },
    {
      value: (hp.runs + gm.runs).toLocaleString("en-US"),
      label: live
        ? "runs of my public Apify actors, live"
        : "runs of my public Apify actors",
    },
    ...(live && lastRun
      ? [
          {
            value: ago(lastRun),
            label: "since someone last ran one of my actors, live",
          },
        ]
      : []),
  ];
}

function FactsTile({ tileRef }) {
  const items = useFacts();
  const n = items.length;
  const { index, pick, hold, running, next } = useRotation(n);
  const item = items[index % n];

  return (
    <div ref={tileRef} className="facts" data-inlay {...hold}>
      <ul className="sr-only">
        {items.map((it) => (
          <li key={it.label}>
            {it.value} {it.label}
          </li>
        ))}
      </ul>
      <p className="facts__head" aria-hidden="true">
        <span>In numbers</span>
        <span className="facts__count">
          {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </p>
      <button
        type="button"
        className="facts__face"
        aria-label="Show the next fact"
        onClick={() => {
          next();
        }}
      >
        <span className="facts__value" data-value={item.value}>
          <Odometer value={item.value} id={index} />
        </span>
        <span key={`l${index}`} className="facts__label" aria-hidden="true">
          {keepWhole(item.label)}
        </span>
      </button>
      <div className="facts__bars" role="group" aria-label="Choose a fact">
        {items.map((it, i) => (
          <button
            key={it.label}
            type="button"
            className={`facts__seg${i === index && running ? " is-running" : ""}`}
            style={{ "--ms": `${DIAL_MS}ms` }}
            aria-label={`${it.value} ${it.label}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => pick(i)}
          >
            <span />
          </button>
        ))}
      </div>
      {/* narrow phones: one progress line; tap the number to advance */}
      <span className="facts__line" aria-hidden="true">
        <span key={index} className={running ? "is-running" : undefined} style={{ "--ms": `${DIAL_MS}ms` }} />
      </span>
    </div>
  );
}

/* ---------- practice card ---------- */

const ICONS = {
  layers: Layers,
  flask: FlaskConical,
  retry: RefreshCw,
  feed: Rss,
  agent: Network,
  receipt: Fingerprint,
  check: ShieldCheck,
};
const CARD_MS = TICK_MS;

// A route goes through the router; a #section scrolls the home page.
function Destination({ to, ...props }) {
  return to.startsWith("#") ? (
    <SectionLink to={to.slice(1)} {...props} />
  ) : (
    <Link to={to} {...props} />
  );
}

function PracticeCard({ cardRef, variant }) {
  const surface = useRef(null);
  const { index, pick, hold, running } = useRotation(practices.length);
  const p = practices[index];
  const Icon = ICONS[p.icon];

  useLayoutEffect(() => {
    const el = surface.current;
    const apply = () => {
      el.style.clipPath = `path("${cardPath(el.offsetWidth, el.offsetHeight, { w: 62, h: 62 }, 22)}")`;
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`practice practice--${variant}${running ? " is-running" : ""}`}
      data-inlay={variant === "inlay" ? "" : undefined}
      role="group"
      aria-roledescription="carousel"
      aria-label="How I build"
      style={{ "--card-ms": `${CARD_MS}ms` }}
      {...hold}
    >
      <div ref={surface} className="practice__surface" />
      <div className="practice__body">
        <div className="practice__art" aria-hidden="true">
          <span className="practice__glow" />
          <span key={p.icon + index} className="practice__icon">
            <Icon size={56} strokeWidth={1.25} />
          </span>
        </div>
        <div key={index} className="practice__text" aria-live="polite">
          <p className="practice__from">{p.from}</p>
          <p className="practice__title">{p.title}</p>
          <p className="practice__detail">{p.detail}</p>
        </div>
        <div
          className="practice__bars"
          role="group"
          aria-label="Choose a practice"
        >
          {practices.map((it, i) => (
            <button
              key={it.title}
              type="button"
              className={`practice__bar${i === index && running ? " is-running" : ""}`}
              aria-label={`${it.from}: ${it.title}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => pick(i)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
      <Destination
        to={p.to}
        className="round-btn practice__go"
        aria-label={`More on ${p.from.toLowerCase()}`}
      >
        <svg className="practice__timer" viewBox="0 0 52 52" aria-hidden="true">
          {/* keyed so the ring restarts each beat */}
          <circle key={index} cx="26" cy="26" r="24.5" pathLength="1" />
        </svg>
        <ArrowUpRight size={20} strokeWidth={1.75} aria-hidden="true" />
      </Destination>
    </div>
  );
}

/* ---------- the frame ---------- */

export function Hero() {
  const clock = useHeroClock();
  const root = useRef(null);
  const panel = useRef(null);
  const copy = useRef(null);
  const cardRef = useRef(null);
  const factsRef = useRef(null);

  // Opening progress; all 1 once it has played.
  const intro = useRef({ scale: 1, cut: 1, text: 1 });
  const carve = useRef(() => {});

  // Carve the panel around the nav, the headline lines and the corner tiles.
  useLayoutEffect(() => {
    const el = panel.current;
    const apply = () => {
      const { scale, cut, text } = intro.current;
      const p = el.getBoundingClientRect();
      const pTop = p.top + window.scrollY;
      const desktop = window.matchMedia("(min-width: 64em)").matches;
      const radius = window.matchMedia("(min-width: 48em)").matches ? 26 : 20;

      let shelf = null;
      const pill = document.querySelector(".nav__links");
      if (desktop && pill) {
        const r = pill.getBoundingClientRect(); // fixed, so the same at any scroll
        shelf = {
          w: (r.right - p.left + GAP + 4) * cut,
          h: (r.bottom - pTop + GAP + 4) * cut,
        };
        if (cut < 0.02) shelf = null;
      }

      // layout offsets, not screen boxes, so entrance transforms never skew the carve
      const c = copy.current;
      const rel = (node) => ({
        top: c.offsetTop + node.offsetTop,
        right: c.offsetLeft + node.offsetLeft + node.offsetWidth,
      });
      const padX = desktop ? 30 : 18;
      const padY = desktop ? 22 : 16;
      const lines = [...c.querySelectorAll("[data-line]")].map(rel);
      const actions = rel(c.querySelector(".frame__actions"));
      // one step per line; the last step also holds the actions under it
      const raw = lines.map((l, i) => ({
        top: i === 0 ? l.top - padY : l.top - 2,
        right:
          (i === lines.length - 1
            ? Math.max(l.right, actions.right)
            : l.right) + padX,
      }));
      // fold steps too shallow to round into the one above
      const H0 = el.offsetHeight;
      const steps = raw
        .reduce((acc, s) => {
          const prev = acc[acc.length - 1];
          if (prev && Math.abs(s.right - prev.right) < radius * 2.2)
            prev.right = Math.max(prev.right, s.right);
          else acc.push({ ...s });
          return acc;
        }, [])
        // while opening, the staircase grows out of the bottom-left corner
        .map((st) => ({
          right: st.right * text,
          top: H0 - (H0 - st.top) * text,
        }));

      // tiles seated in the right-hand corners: whichever corner each one sits in on this layout
      const tiles = [cardRef.current, factsRef.current].filter(
        (t) => t?.offsetWidth,
      );
      const W = el.offsetWidth;
      const H = el.offsetHeight;
      let topRight = null;
      let bottomRight = null;
      for (const t of tiles) {
        if (cut < 0.02) continue;
        const bite = { w: (W - t.offsetLeft + GAP) * cut, h: 0 };
        if (t.offsetTop < 2)
          topRight = { ...bite, h: (t.offsetTop + t.offsetHeight + GAP) * cut };
        else bottomRight = { ...bite, h: (H - t.offsetTop + GAP) * cut };
      }
      const d = framePath(
        W,
        H,
        {
          shelf,
          steps: text < 0.02 ? [] : steps,
          topRight,
          bottomRight,
          inner: radius + GAP,
          scale,
        },
        radius,
      );
      el.style.clipPath = `path("${d}")`;
    };
    carve.current = apply;
    apply();
    const ro = new ResizeObserver(apply);
    [
      el,
      copy.current,
      cardRef.current,
      factsRef.current,
      document.querySelector(".nav__links"),
    ].forEach((n) => n && ro.observe(n));
    document.fonts?.ready.then(apply);
    return () => ro.disconnect();
  }, []);

  // Opening: panel grows, cut-outs open, headline sharpens word by word, tiles and nav settle.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`not ${REDUCED_MOTION}`, () => {
        const state = intro.current;
        const redraw = () => carve.current();
        Object.assign(state, { scale: 0.9, cut: 0, text: 0 });
        redraw();
        const nav = document.querySelector(".nav");
        const tl = gsap.timeline({
          defaults: { ease: "expo.out" },
          onComplete: () => {
            Object.assign(state, { scale: 1, cut: 1, text: 1 });
            redraw();
            root.current?.classList.remove("is-opening");
          },
        });
        root.current.classList.add("is-opening");
        tl.from(
          ".frame__panel",
          { opacity: 0, duration: 0.7, ease: "power2.out" },
          0,
        )
          .to(state, { scale: 1, duration: 1.5, onUpdate: redraw }, 0)
          .to(state, { cut: 1, duration: 1.4, onUpdate: redraw }, 0.2)
          .to(state, { text: 1, duration: 1.3, onUpdate: redraw }, 0.3)
          .from(
            ".frame__w",
            {
              opacity: 0,
              filter: "blur(10px)",
              yPercent: 18,
              duration: 1.1,
              ease: "power3.out",
              stagger: 0.055,
            },
            0.35,
          )
          .from(
            "[data-inlay]",
            {
              opacity: 0,
              scale: 0.9,
              duration: 1.2,
              stagger: 0.12,
              transformOrigin: (i, el) =>
                el.offsetTop < 2 ? "100% 0%" : "100% 100%",
            },
            0.4,
          )
          .from(
            "[data-load]",
            { opacity: 0, y: 12, duration: 0.8, ease: "power3.out" },
            1.0,
          );
        if (nav)
          tl.from(
            nav,
            {
              opacity: 0,
              y: -8,
              duration: 0.9,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
            0.45,
          );
        return () => {
          Object.assign(state, { scale: 1, cut: 1, text: 1 });
          redraw();
        };
      });
    },
    { scope: root },
  );

  return (
    <Clock.Provider value={clock}>
      <section
        ref={root}
        id="hero"
        className="frame"
        aria-labelledby="hero-title"
      >
        <div className="frame__main">
          <div ref={panel} className="frame__panel">
            <FieldCanvas />
          </div>
          <div ref={copy} className="frame__copy">
            <h1 id="hero-title" className="frame__title">
              {HEADLINE.map((line, i) => (
                <span key={line} className="frame__line">
                  <span data-line>
                    {line.split(" ").map((w, j, all) => (
                      <span key={j} className="frame__w">
                        {w}
                        {j < all.length - 1 ? " " : ""}
                      </span>
                    ))}
                  </span>
                  {/* a real space between lines, so it reads as one sentence */}
                  {i < HEADLINE.length - 1 && " "}
                </span>
              ))}
            </h1>
            <div className="frame__actions" data-load>
              <SectionLink
                to="work"
                className="round-btn"
                aria-label="View my work"
              >
                <ArrowDown size={20} strokeWidth={1.75} aria-hidden="true" />
              </SectionLink>
              <a
                href={person.resume.href}
                download={person.resume.filename}
                className="frame__resume"
              >
                Download résumé
              </a>
            </div>
          </div>
          <PracticeCard cardRef={cardRef} variant="inlay" />
          <FactsTile tileRef={factsRef} />
        </div>
        <PracticeCard variant="below" />
      </section>
    </Clock.Provider>
  );
}
