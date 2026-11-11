import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDownToLine } from "lucide-react";
import { person } from "@/content/site";
import { SectionLink } from "./SectionLink";
import { WMark } from "./WMark";

const links = [
  { to: "work", label: "Work" },
  { to: "experience", label: "Experience" },
  { to: "data", label: "Data" },
  { to: "reviews", label: "Reviews" },
  { to: "about", label: "About" },
  { to: "contact", label: "Contact" },
];

// Section at the viewport centre, for the active link.
function useActiveSection(enabled) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!enabled || !("IntersectionObserver" in window)) return;
    const els = links.map((l) => document.getElementById(l.to)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
  return enabled ? active : null;
}

export function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });
  const menuButton = useRef(null);
  const sheet = useRef(null);
  const linksRef = useRef(null);
  const active = useActiveSection(pathname === "/");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const moveTo = useCallback((el, visible = true) => {
    if (!el) return setPill((p) => ({ ...p, visible: false }));
    setPill({ left: el.offsetLeft, width: el.offsetWidth, visible });
  }, []);

  // Without hover, the highlight rests on the active section.
  const restOnActive = useCallback(() => {
    const el = active ? linksRef.current?.querySelector(`[data-to="${active}"]`) : null;
    moveTo(el, Boolean(el));
  }, [active, moveTo]);

  useEffect(() => {
    restOnActive();
  }, [restOnActive, scrolled]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    sheet.current?.querySelector("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label={`${person.name}, home`}>
          <WMark />
          <span>{person.firstName}</span>
        </Link>

        <nav aria-label="Main" className="nav__links" ref={linksRef} onPointerLeave={restOnActive}>
          <span
            className={`nav__pill${pill.visible ? " is-visible" : ""}`}
            style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
            aria-hidden="true"
          />
          {links.map((link) => (
            <SectionLink
              key={link.to}
              to={link.to}
              data-to={link.to}
              className={`nav__link${active === link.to ? " is-active" : ""}`}
              aria-current={active === link.to ? "true" : undefined}
              onPointerEnter={(e) => moveTo(e.currentTarget)}
              onFocus={(e) => moveTo(e.currentTarget)}
              onBlur={restOnActive}
            >
              {link.label}
            </SectionLink>
          ))}
          <a
            href={person.resume.href}
            download={person.resume.filename}
            className="nav__resume-icon"
            aria-label="Download résumé"
            title="Download résumé"
          >
            <ArrowDownToLine size={17} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </nav>

        <div className="nav__actions">
          <a href={person.resume.href} download={person.resume.filename} className="btn btn-sm btn-secondary nav__resume">
            Résumé
          </a>
          <SectionLink to="contact" className="btn btn-sm btn-primary">
            Get in touch
          </SectionLink>
          <button
            ref={menuButton}
            type="button"
            className="nav__menu"
            aria-expanded={open}
            aria-controls="menu-sheet"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>

      </div>

      {open && (
        <div id="menu-sheet" ref={sheet} role="dialog" aria-modal="true" aria-label="Menu" className="nav__sheet">
          <div className="container nav__sheet-bar">
            <span className="nav__brand">
              <WMark />
              <span>{person.firstName}</span>
            </span>
            <button
              type="button"
              className="nav__menu"
              onClick={() => {
                setOpen(false);
                menuButton.current?.focus();
              }}
            >
              Close
            </button>
          </div>
          <ul className="container nav__sheet-links">
            {links.map((link, i) => (
              <li key={link.to} style={{ "--i": i }}>
                <SectionLink to={link.to} onNavigate={() => setOpen(false)} className={active === link.to ? "is-active" : undefined}>
                  {link.label}
                </SectionLink>
              </li>
            ))}
            <li style={{ "--i": links.length }}>
              <a href={person.resume.href} download={person.resume.filename}>
                Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
