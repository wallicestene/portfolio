/* eslint-disable react/prop-types */
import { useLayoutEffect, useRef, useState } from "react";
import { education, experience } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import safaricom from "@/assets/logos/safaricom.png";
import kra from "@/assets/logos/kra.png";
import unity from "@/assets/logos/unity.png";
import go10 from "@/assets/logos/go10.png";
import responsibly from "@/assets/logos/responsibly-color.svg";


const LOGOS = { safaricom, kra, unity, go10, responsibly };
const CLIENT_NAMES = { go10: "GO10", responsibly: "Responsibly" };

const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, June: 5, July: 6, Aug: 7, Sept: 8, Oct: 9, Nov: 10, Dec: 11 };
const now = new Date();
const monthIndex = (label) => {
  if (label === "Present") return now.getFullYear() * 12 + now.getMonth();
  const [m, y] = label.split(" ");
  return Number(y) * 12 + (MONTHS[m] ?? 0);
};
const duration = (start, end) => {
  const months = Math.max(1, monthIndex(end) - monthIndex(start) + (end === "Present" ? 0 : 1));
  if (months < 12) return `${months} mo`;
  return `${Math.floor(months / 12)} yr${months % 12 ? ` ${months % 12} mo` : ""}`;
};
const years = (start, end) => {
  const a = start.split(" ")[1];
  const b = end === "Present" ? "now" : end.split(" ")[1];
  return a === b ? a : `${a} – ${b}`;
};

const [eduStart, eduEnd] = education.period.split(" – ");
const places = [
  ...experience.map((e) => ({ ...e, name: e.id === "freelance" ? "Freelance" : e.label })),
  {
    id: "kca",
    name: "KCA University",
    company: education.school,
    role: education.degree,
    start: eduStart,
    end: eduEnd,
    summary: `${education.focus}. ${education.honours}.`,
    points: education.certifications,
    pointsTitle: "Certifications",
  },
];

function Place({ p }) {
  return (
    <div className="wk__detail" key={p.id}>
      {p.logo && <img className="wk__logo" src={LOGOS[p.logo]} alt="" />}
      <h3 className="wk__role">
        {p.role} <span>at {p.company}</span>
      </h3>
      <p className="wk__when">
        {p.start} – {p.end === "Present" ? "now" : p.end}
        <span>{duration(p.start, p.end)}</span>
      </p>
      <p className="wk__summary">{p.summary}</p>
      {p.pointsTitle && <p className="wk__label">{p.pointsTitle}</p>}
      <ul className="wk__points">
        {p.points.slice(0, 4).map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {p.clients && (
        <p className="wk__clients">
          {p.clients.map((c) => (
            <img key={c} src={LOGOS[c]} alt={CLIENT_NAMES[c]} />
          ))}
        </p>
      )}
      {p.tools && (
        <p className="wk__tools">
          <span className="sr-only">Tools: </span>
          {p.tools.join(" · ")}
        </p>
      )}
    </div>
  );
}

export function Experience() {
  const [active, setActive] = useState(0);
  const list = useRef(null);
  const tabs = useRef([]);
  const [mark, setMark] = useState(null);

  // highlight follows the open tab: down the side on desktop, along the row on phones
  useLayoutEffect(() => {
    const place = () => {
      const el = tabs.current[active];
      if (el) setMark({ top: el.offsetTop, left: el.offsetLeft, width: el.offsetWidth, height: el.offsetHeight });
    };
    place();
    const ro = new ResizeObserver(place);
    if (list.current) ro.observe(list.current);
    return () => ro.disconnect();
  }, [active]);

  const onKey = (e, i) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (i + step + places.length) % places.length;
    setActive(next);
    tabs.current[next]?.focus();
    tabs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  return (
    <Reveal id="experience" className="wk section" aria-labelledby="experience-title">
      <header className="section-head">
        <h2 id="experience-title" className="section-title">
          Experience.
        </h2>
      </header>

      <div className="wk__body" data-reveal>
        <div ref={list} className="wk__list" role="tablist" aria-label="Where I’ve worked and studied">
          {mark && (
            <span
              className="wk__mark"
              style={{ "--t": `${mark.top}px`, "--l": `${mark.left}px`, "--w": `${mark.width}px`, "--h": `${mark.height}px` }}
              aria-hidden="true"
            />
          )}
          {places.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => (tabs.current[i] = el)}
              type="button"
              role="tab"
              id={`wk-tab-${p.id}`}
              aria-selected={i === active}
              aria-controls="wk-panel"
              tabIndex={i === active ? 0 : -1}
              className="wk__tab"
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="wk__name">{p.name}</span>
              <span className="wk__years">{years(p.start, p.end)}</span>
            </button>
          ))}
        </div>

        <div id="wk-panel" role="tabpanel" aria-labelledby={`wk-tab-${places[active].id}`} className="wk__panel">
          <Place p={places[active]} />
        </div>
      </div>
    </Reveal>
  );
}
