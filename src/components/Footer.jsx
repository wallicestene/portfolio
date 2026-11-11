import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { person } from "@/content/site";
import { useSmoothScroll } from "@/lib/scrollContext";
import { WMark } from "./WMark";

const clock = new Intl.DateTimeFormat("en-GB", { timeZone: person.timeZone, hour: "2-digit", minute: "2-digit" });

const elsewhere = [
  { label: "GitHub", href: person.links.github },
  { label: "LinkedIn", href: person.links.linkedin },
  { label: "Upwork", href: person.links.upwork },
  { label: "X", href: person.links.x },
  { label: "Apify", href: person.links.apify },
].filter((l) => l.href);

export function Footer() {
  const [now, setNow] = useState(() => clock.format(new Date()));
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const t = setInterval(() => setNow(clock.format(new Date())), 20_000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__sign">
        <WMark />
        <p>
          <span className="footer__name-line">{person.firstName}</span>
          <span className="footer__what">Software engineer, {person.city}</span>
        </p>
      </div>

      <div className="footer__side">
        <ul className="footer__elsewhere">
          {elsewhere.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer__time">{now} EAT</p>
        <button type="button" className="footer__top-btn" onClick={() => scrollTo(0)}>
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </button>
      </div>

      <p className="footer__legal">
        © {new Date().getFullYear()} {person.name}
      </p>
    </footer>
  );
}
