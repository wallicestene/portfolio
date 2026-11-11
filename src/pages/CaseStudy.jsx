/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { allProjects, pesapalSession } from "@/content/site";
import { shots } from "@/content/shots";
import { Reveal } from "@/components/Reveal";
import { EngineDiagram } from "@/components/EngineDiagram";
import { brandStyle } from "@/lib/brand";
import { gsap, useGSAP, REDUCED_MOTION } from "@/lib/motion";
import NotFound from "./NotFound";

function Session() {
  return (
    <figure className="terminal" data-reveal>
      <div className="terminal__bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>npm run repl</span>
      </div>
      <pre>
        <code>
          {"Pesapal Mini-DB REPL\n"}
          {pesapalSession.map((step, i) =>
            step.prompt ? (
              <span key={i}>
                <span className="terminal__prompt">PESAPAL-DB &gt; </span>
                {step.prompt}
                {"\n"}
              </span>
            ) : (
              <span key={i} className="terminal__out">
                {step.output.join("\n")}
                {"\n"}
              </span>
            ),
          )}
        </code>
      </pre>
      <figcaption>A real session on the engine. Wide columns are trimmed to fit; the values are as printed.</figcaption>
    </figure>
  );
}

function Part({ title, children }) {
  return (
    <section className="case__part" data-reveal>
      <h2>{title}</h2>
      <div className="case__part-body">{children}</div>
    </section>
  );
}

function Points({ items }) {
  return (
    <ul className="log__points">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Media({ p }) {
  return (
    <>
      {p.phones && (
        <section className="case__phones" aria-label={`${p.name} on a phone`}>
          {p.phones.map((ph) => (
            <figure key={ph.image} data-reveal>
              <div className="case__phone">
                <img src={shots[ph.image]} alt="" loading="lazy" decoding="async" />
              </div>
              <figcaption>{ph.caption}</figcaption>
            </figure>
          ))}
        </section>
      )}
      {p.gallery && (
        <section className={`case__gallery case__gallery--${p.gallery.length}`} aria-label={`More of ${p.name}`}>
          {p.gallery.map((g) => (
            <figure key={g.image} data-reveal>
              <div className="case__shot">
                <img src={shots[g.image]} alt="" loading="lazy" decoding="async" />
              </div>
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </section>
      )}
      {p.slug === "pesapal-rdbms" && <Session />}
    </>
  );
}

function Study({ p, prev, next }) {
  const root = useRef(null);

  // Opening: the panel grows in, the title sharpens, the product rises.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`not ${REDUCED_MOTION}`, () => {
        const q = gsap.utils.selector(root);
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(q(".case__stage"), { scale: 0.96, opacity: 0, duration: 1.1, transformOrigin: "50% 0%", clearProps: "transform,opacity" })
          .from(q(".case__title"), { opacity: 0, filter: "blur(10px)", yPercent: 25, duration: 1, clearProps: "filter" }, 0.12)
          .from(q(".case__meta, .case__tagline, .case__links"), { opacity: 0, y: 12, duration: 0.8, stagger: 0.07 }, 0.25)
          .from(q(".case__window"), { opacity: 0, y: 40, duration: 1.1 }, 0.3);
      });
    },
    { scope: root },
  );

  const links = [
    p.live && { href: p.live, label: `Live ${p.client ? "site" : "app"}`, icon: "out", primary: true },
    p.video && { href: p.video, label: "Demo video", icon: "play" },
    p.repo && { href: p.repo, label: "Code", icon: "out", primary: !p.live },
  ].filter(Boolean);

  return (
    <div ref={root} className="container">
      <Link to="/#work" className="case__back">
        <ArrowLeft size={16} aria-hidden="true" /> All work
      </Link>

      <header className="case__stage">
        <div className="case__head">
          <div className="case__id">
            <h1 id="case-title" className="case__title">
              {p.name}
            </h1>
            <p className="case__meta">
              {p.year} · {p.status}
            </p>
            <p className="case__tagline">{p.tagline}</p>
          </div>
          <div className="case__links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`case__link${l.primary ? " case__link--primary" : ""}`}
                target="_blank"
                rel="noreferrer"
              >
                {l.icon === "play" && <Play size={14} aria-hidden="true" />}
                {l.label}
                {l.icon === "out" && <ArrowUpRight size={16} aria-hidden="true" />}
              </a>
            ))}
            {links.length === 0 && <span className="case__private">Private for now</span>}
          </div>
        </div>
        <div className="case__window">
          {p.diagram ? <EngineDiagram /> : <img src={shots[p.image]} alt={`${p.name}: ${p.tagline}`} decoding="async" />}
        </div>
        {p.result && (
          <p className="case__result">
            <strong>{p.result.value}</strong>
            <span>{p.result.label}</span>
          </p>
        )}
      </header>

      <dl className="case__spec" data-reveal>
        {p.role && (
          <div>
            <dt>Role</dt>
            <dd>{p.role}</dd>
          </div>
        )}
        {p.client && (
          <div>
            <dt>Client</dt>
            <dd>{p.client}</dd>
          </div>
        )}
        <div>
          <dt>Built with</dt>
          <dd>{p.stack.join(", ")}</dd>
        </div>
      </dl>

      <p className="case__lead" data-reveal>
        {p.summary}
      </p>

      <div className="case__parts">
        {p.problem && (
          <Part title="The problem">
            <p>{p.problem}</p>
          </Part>
        )}
        <Part title="What I built">
          <Points items={p.built} />
        </Part>
      </div>

      <Media p={p} />

      {p.decisions?.length > 0 && (
        <div className="case__parts">
          <Part title="Decisions that mattered">
            <Points items={p.decisions} />
          </Part>
        </div>
      )}

      <nav className="case__pager" aria-label="More projects">
        <Link to={`/work/${prev.slug}`} className="case__prev">
          <span>Previous</span>
          <strong>
            <ArrowLeft size={18} aria-hidden="true" /> {prev.name}
          </strong>
        </Link>
        <Link to={`/work/${next.slug}`} className="case__next">
          <span>Next project</span>
          <strong>
            {next.name} <ArrowRight size={20} aria-hidden="true" />
          </strong>
        </Link>
      </nav>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const index = allProjects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;
  const n = allProjects.length;
  const p = allProjects[index];

  // keyed so the next project mounts fresh
  return (
    <Reveal key={p.slug} as="article" className={`case case--${p.slug}`} aria-labelledby="case-title" style={brandStyle(p.brand)}>
      <Study p={p} prev={allProjects[(index - 1 + n) % n]} next={allProjects[(index + 1) % n]} />
    </Reveal>
  );
}
