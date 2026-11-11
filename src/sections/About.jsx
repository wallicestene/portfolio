import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { person } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { SectionLink } from "@/components/SectionLink";
import { gsap, useGSAP, REDUCED_MOTION } from "@/lib/motion";
import portraitAvif from "@/assets/wallicestene.avif";
import portraitJpg from "@/assets/wallicestene.jpg";

// One statement whose words sharpen as it scrolls past.
const STATEMENT = [
  ["I’m Wallicestene, a ", false],
  ["software engineer", true],
  [" in Nairobi. I build for the web, ", false],
  ["front end to back end.", true],
  [" Lately that means ", false],
  ["mini apps,", true],
  [" ", false],
  ["AI agents", true],
  [" that call real tools, and ", false],
  ["data pipelines", true],
  [" that run every day for teams in Denmark, the UK, the US and Canada.", false],
];

const LINKS = [
  ["GitHub", person.links.github],
  ["LinkedIn", person.links.linkedin],
  ["Upwork", person.links.upwork],
  ["X", person.links.x],
  ["Apify", person.links.apify],
];

export function About() {
  const statement = useRef(null);

  useGSAP(
    () => {
      const words = statement.current.querySelectorAll(".about__w");
      const mm = gsap.matchMedia();
      mm.add(`not ${REDUCED_MOTION}`, () => {
        gsap.fromTo(
          words,
          { opacity: 0.14, filter: "blur(6px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.06,
            ease: "none",
            scrollTrigger: { trigger: statement.current, start: "top 82%", end: "bottom 50%", scrub: 0.6 },
          },
        );
      });
    },
    { scope: statement },
  );

  return (
    <Reveal id="about" className="about section" aria-labelledby="about-title">
      <h2 id="about-title" className="sr-only">
        About me
      </h2>
      <div className="about__body">
        <figure className="about__portrait" data-reveal>
          <picture>
            <source srcSet={portraitAvif} type="image/avif" />
            <img src={portraitJpg} alt={`Portrait of ${person.name}`} width="1024" height="1024" loading="lazy" decoding="async" />
          </picture>
        </figure>
        <div>
          <p ref={statement} className="about__statement">
            {STATEMENT.flatMap(([text, strong], i) =>
              text.split(/(\s+)/).map((w, j) =>
                !w || /^\s+$/.test(w) ? (
                  w
                ) : (
                  <span key={`${i}-${j}`} className={`about__w${strong ? " is-strong" : ""}`}>
                    {w}
                  </span>
                ),
              ),
            )}
          </p>
          <div className="about__foot" data-reveal>
            <SectionLink to="contact" className="btn btn-primary">
              Get in touch
            </SectionLink>
            <p className="about__links">
              {LINKS.map(([name, href]) => (
                <a key={name} href={href} target="_blank" rel="noreferrer">
                  {name} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
              <a href={person.resume.href} download={person.resume.filename}>
                Résumé <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
