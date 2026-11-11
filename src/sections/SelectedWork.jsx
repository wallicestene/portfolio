/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { featured, flagship, moreProjects, person } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { ProductMini } from "@/components/ProductMinis";
import { prefersReducedMotion } from "@/lib/motion";
import { brandStyle } from "@/lib/brand";

const projects = [...flagship, ...featured];

// True while at least half of the element is on screen.
function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return inView;
}

function ProductCard({ p }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [still] = useState(() => prefersReducedMotion());
  const footer = p.result ? (
    <>
      <strong>{p.result.value}</strong>
      <span>{p.result.short}</span>
    </>
  ) : (
    <span className="pcard__stack">{p.stack.slice(0, 3).join(" · ")}</span>
  );

  return (
    <article ref={ref} className={`pcard pcard--${p.slug}`} style={brandStyle(p.brand)}>
      <header className="pcard__head">
        <div className="pcard__id">
          <h3 className="pcard__name">
            <Link to={`/work/${p.slug}`} className="pcard__link" draggable="false">
              {p.name}
            </Link>
          </h3>
          <p className="pcard__meta">
            {p.year} · {p.status}
          </p>
        </div>
        <span className="pcard__go" aria-hidden="true">
          <ArrowUpRight size={18} strokeWidth={1.75} />
        </span>
      </header>
      <p className="pcard__tagline">{p.tagline}</p>
      <div className="pcard__stage" aria-hidden="true">
        <ProductMini slug={p.slug} running={inView && !still} />
      </div>
      <footer className="pcard__foot">{footer}</footer>
    </article>
  );
}

function Shelf({ head }) {
  const track = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const drag = useRef(null);

  const step = useCallback(() => {
    const first = track.current?.querySelector(".shelf__item");
    if (!first) return 1;
    const gap = parseFloat(getComputedStyle(track.current).columnGap) || 0;
    return first.offsetWidth + gap;
  }, []);

  // whether either end of the shelf has been reached
  useEffect(() => {
    const el = track.current;
    let frame = 0;
    const update = () => {
      frame = 0;
      setEdges({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [step]);

  const go = (dir) => {
    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    track.current.scrollBy({ left: dir * step(), behavior });
  };

  // a mouse can drag the shelf like a phone swipes it
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { x: e.clientX, left: track.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      track.current.classList.add("is-dragging");
      track.current.setPointerCapture(e.pointerId);
    }
    if (d.moved) track.current.scrollLeft = d.left - dx;
  };
  const onPointerUp = () => {
    const d = drag.current;
    drag.current = null;
    if (!d?.moved) return;
    const el = track.current;
    el.classList.remove("is-dragging");
    // let the snap settle on the nearest card, and swallow the click the drag would make
    el.scrollTo({ left: Math.round(el.scrollLeft / step()) * step(), behavior: "smooth" });
    el.addEventListener("click", (c) => c.preventDefault(), { capture: true, once: true });
  };

  return (
    <div className="shelf">
      <div className="shelf__bar">
        {head}
        <div className="shelf__nav">
          <button type="button" className="shelf__btn" onClick={() => go(-1)} disabled={edges.start} aria-label="Previous project">
            <ArrowLeft size={18} strokeWidth={1.75} aria-hidden="true" />
          </button>
          <button type="button" className="shelf__btn" onClick={() => go(1)} disabled={edges.end} aria-label="Next project">
            <ArrowRight size={18} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
      </div>
      <ul
        ref={track}
        className="shelf__track"
        aria-label="Projects"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {projects.map((p) => (
          <li key={p.slug} className="shelf__item" data-reveal>
            <ProductCard p={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SelectedWork() {
  return (
    <Reveal id="work" className="work section" aria-labelledby="work-title">
      <Shelf
        head={
          <header className="work__head section-head">
            <h2 id="work-title" className="section-title">
              Selected work.
            </h2>
            <p className="section-sub">
              Products I’ve built, each shown working. Dapi, Soko Mbele and Earnest Motors first, then the
              rest. Open any one for the full story.
            </p>
          </header>
        }
      />

      <div className="more" data-reveal>
        <div className="more__head">
          <h3>Built along the way</h3>
          <a href={person.links.github} className="link-arrow" target="_blank" rel="noreferrer">
            Everything on GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <ul className="more__list">
          {moreProjects.map((p) => (
            <li key={p.name} className="more__row">
              <span className="more__name">{p.name}</span>
              <span className="more__detail">{p.detail}</span>
              <span className="more__year">{p.year ?? ""}</span>
              <span className="more__links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Code <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
