/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import safaricom from "@/assets/logos/safaricom.png";
import kra from "@/assets/logos/kra.png";
import responsiblyMono from "@/assets/logos/responsibly.svg";
import responsiblyColor from "@/assets/logos/responsibly-color.svg";
import go10 from "@/assets/logos/go10.png";
import unity from "@/assets/logos/unity.png";
import apify from "@/assets/logos/apify.svg";

// Monochrome at rest; real colours on hover.
const items = [
  { name: "Safaricom", color: safaricom, h: 28 },
  { name: "Kenya Revenue Authority", color: kra, h: 34 },
  { name: "Responsibly", color: responsiblyColor, mono: responsiblyMono, h: 30 },
  { name: "GO10", color: go10, h: 28 },
  { name: "Unity Homes", color: unity, h: 30 },
  { name: "Apify", color: apify, h: 26 },
];

function Row({ hidden = false }) {
  return (
    <ul className="logos__row" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it.name} className="logos__item">
          <span className="logos__stack" style={{ height: it.h }}>
            <img
              src={it.mono ?? it.color}
              alt={hidden ? "" : it.name}
              className={`logos__mono${it.mono ? " is-drawn" : ""}`}
              loading="lazy"
              decoding="async"
            />
            <img src={it.color} alt="" aria-hidden="true" className="logos__color" loading="lazy" decoding="async" />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function LogoBand() {
  const viewport = useRef(null);
  const [copies, setCopies] = useState(1);

  // Repeat the set until one pass covers the viewport, so wide screens never see the loop's end.
  useEffect(() => {
    const vp = viewport.current;
    const row = vp.querySelector(".logos__row");
    const fit = () => {
      if (row.offsetWidth > 0) setCopies(Math.min(8, Math.max(1, Math.ceil(vp.offsetWidth / row.offsetWidth))));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(vp);
    ro.observe(row);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="logos" className="logos" aria-labelledby="logos-title">
      <h2 id="logos-title" className="logos__label container">
        I’ve built for teams at
      </h2>
      <div ref={viewport} className="logos__viewport">
        <div className="logos__track" style={{ "--copies": copies }}>
          {Array.from({ length: copies * 2 }, (_, i) => (
            <Row key={i} hidden={i > 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
