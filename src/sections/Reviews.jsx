/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { person, upwork } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Odometer } from "@/components/Odometer";
import { UpworkLogo } from "@/components/UpworkLogo";
import { framePath } from "@/lib/notchPath";
import { gsap, useGSAP, REDUCED_MOTION, prefersReducedMotion } from "@/lib/motion";

const GAP = 10;
const BAND = 88; // panel showing between the seated card and the button
const reviews = upwork.reviews;
const average = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
// longer quotes stay up longer
const holdMs = (r) => Math.min(15000, 5000 + (r.quote?.length ?? 0) * 30);

const STAR = "M12 2.5l2.9 5.9 6.6.9-4.8 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.5 9.3l6.6-.9z";

function Stars({ size = 16, lit = true, label = "5 out of 5 stars" }) {
  return (
    <span className={`stars${lit ? " is-lit" : ""}`} role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" width={size} height={size} style={{ "--i": i }} aria-hidden="true">
          <path d={STAR} />
        </svg>
      ))}
    </span>
  );
}

function Quote({ r }) {
  if (!r.quote) {
    return (
      <div className="reviews__quote reviews__quote--stars">
        <Stars size={64} />
      </div>
    );
  }
  const paras = r.quote.split("\n\n");
  return (
    <blockquote className={`reviews__quote${r.quote.length > 240 ? " is-long" : ""}`}>
      {paras.map((p, i) => (
        <p key={i}>
          {i === 0 && "“"}
          {p.split(" ").map((w, k, all) => (
            <span key={k}>
              <span className="reviews__w">{w}</span>
              {k < all.length - 1 && " "}
            </span>
          ))}
          {i === paras.length - 1 && "”"}
        </p>
      ))}
    </blockquote>
  );
}

// Upwork record, drawn: a ring that fills to the score, a seal, a row of stars.
const Scorecard = forwardRef(function Scorecard({ seen }, ref) {
  return (
    <aside ref={ref} className={`score${seen ? " is-seen" : ""}`} aria-label="Upwork record">
      <div className="score__head">
        <h3 className="score__title">
          <UpworkLogo className="score__logo" />
        </h3>
        {person.links.upwork && (
          <a href={person.links.upwork} className="score__go" target="_blank" rel="noreferrer" aria-label="See my Upwork profile">
            <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden="true" />
          </a>
        )}
      </div>
      <div className="score__row">
        <svg className="score__ring" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="27" className="score__track" />
          <circle cx="32" cy="32" r="27" pathLength="1" className="score__fill" />
          <path d="M22 33l7 7 13-15" pathLength="1" className="score__check" />
        </svg>
        <p>
          <span className="score__value">
            {seen ? <Odometer value={upwork.jobSuccess} id="jss" /> : <span aria-hidden="true">0%</span>}
            <span className="sr-only">{upwork.jobSuccess}</span>
          </span>
          <span className="score__label">Job Success</span>
        </p>
      </div>
      <div className="score__row">
        <svg className="score__seal" viewBox="0 0 64 64" aria-hidden="true">
          <path pathLength="1" d="M32 5l23 13.3v27.4L32 59 9 45.7V18.3z" />
          <path pathLength="1" d={STAR} transform="translate(17 16) scale(1.25)" />
        </svg>
        <p>
          <span className="score__value score__value--word">{upwork.badge}</span>
          <span className="score__label">Talent badge</span>
        </p>
      </div>
      <div className="score__row">
        <span className="score__stars">
          <Stars size={10} lit={seen} label={`${average} out of 5 stars`} />
        </span>
        <p>
          <span className="score__value">{average}</span>
          <span className="score__label">on all reviews</span>
        </p>
      </div>
      <div className="score__endorsed">
        <span className="score__label">A client endorsed me as</span>
        <ul>
          {upwork.endorsements.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
});

export function Reviews() {
  const root = useRef(null);
  const panel = useRef(null);
  const surface = useRef(null);
  const card = useRef(null);
  const next = useRef(null);
  const [index, setIndex] = useState(0);
  const [touring, setTouring] = useState(true);
  const [held, setHeld] = useState(false);
  const [visible, setVisible] = useState(false);
  const [seen, setSeen] = useState(false);
  const [still] = useState(() => prefersReducedMotion());
  const first = useRef(true);
  const r = reviews[index];
  const running = touring && !still;

  // Carve the panel around the seated Upwork card (desktop) and the round button.
  useLayoutEffect(() => {
    const el = panel.current;
    const apply = () => {
      const desktop = window.matchMedia("(min-width: 60em)").matches;
      const radius = window.matchMedia("(min-width: 48em)").matches ? 26 : 20;
      const c = card.current;
      const b = next.current;
      el.style.minHeight = desktop ? `${c.offsetHeight + GAP + BAND + b.offsetHeight + GAP}px` : "";
      const topRight = desktop ? { w: c.offsetWidth + GAP, h: c.offsetHeight + GAP } : null;
      const bottomRight = { w: b.offsetWidth + GAP, h: b.offsetHeight + GAP };
      const d = framePath(el.offsetWidth, el.offsetHeight, { topRight, bottomRight, inner: radius + GAP }, radius);
      surface.current.style.clipPath = `path("${d}")`;
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    ro.observe(card.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        setVisible(e.isIntersecting);
        if (e.isIntersecting) setSeen(true);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // each new review comes into focus word by word
  useGSAP(
    () => {
      if (first.current) {
        first.current = false;
        return;
      }
      const mm = gsap.matchMedia();
      mm.add(`not ${REDUCED_MOTION}`, () => {
        gsap.from(root.current.querySelectorAll(".reviews__w"), {
          opacity: 0,
          filter: "blur(8px)",
          y: 8,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.018,
          clearProps: "filter",
        });
        gsap.from(root.current.querySelector(".reviews__by"), { opacity: 0, y: 8, duration: 0.6, delay: 0.15 });
      });
    },
    { scope: root, dependencies: [index] },
  );

  const pick = (i) => {
    setIndex(i);
    setTouring(false);
  };
  const hold = {
    onPointerEnter: () => setHeld(true),
    onPointerLeave: () => setHeld(false),
    onFocus: () => setHeld(true),
    onBlur: () => setHeld(false),
  };

  return (
    <Reveal id="reviews" className="container section" aria-labelledby="reviews-title">
      <header className="section-head">
        <h2 id="reviews-title" className="section-title">
          What clients say.
        </h2>
        <p className="section-sub">Public reviews from my Upwork profile, word for word.</p>
      </header>

      <div
        ref={root}
        className={`reviews${held || !visible ? " is-held" : ""}${running ? " is-running" : ""}`}
        style={{ "--ms": `${holdMs(r)}ms` }}
        data-reveal
      >
        <div ref={panel} className="reviews__panel" {...hold}>
          <div ref={surface} className="reviews__surface" aria-hidden="true" />
          <figure className="reviews__stage" aria-roledescription="carousel" aria-label="Client reviews">
            <div className="reviews__body" aria-live="polite">
              <Quote key={index} r={r} />
              <figcaption className="reviews__by">
                <span className="reviews__name">{r.name}</span>
                <span className="reviews__from">
                  {r.company ? `${r.company}, ${r.country}` : "Five stars, nothing to add."}
                </span>
                <span className="reviews__meta">
                  <Stars size={12} />
                  {r.job && <span>{r.job}</span>}
                  {r.date && <span>{r.date}</span>}
                </span>
              </figcaption>
            </div>
            <div className="reviews__bars" role="group" aria-label="Choose a review">
              {reviews.map((it, i) => (
                <button
                  key={i}
                  type="button"
                  className="reviews__bar"
                  aria-label={`Review ${i + 1} of ${reviews.length}: ${it.name}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => pick(i)}
                  onAnimationEnd={() => running && setIndex((i + 1) % reviews.length)}
                >
                  <span />
                </button>
              ))}
            </div>
          </figure>
          <button
            ref={next}
            type="button"
            className="round-btn reviews__next"
            aria-label="Next review"
            onClick={() => pick((index + 1) % reviews.length)}
          >
            <svg className="reviews__timer" viewBox="0 0 52 52" aria-hidden="true">
              <circle key={index} cx="26" cy="26" r="24.5" pathLength="1" />
            </svg>
            <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <Scorecard ref={card} seen={seen} />
      </div>
    </Reveal>
  );
}
