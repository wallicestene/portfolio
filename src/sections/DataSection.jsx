import { SectionLink } from "@/components/SectionLink";
import { ArrowRight } from "lucide-react";
import { actors } from "@/content/site";
import { shots } from "@/content/shots";
import { Reveal } from "@/components/Reveal";
import { ActorStats } from "@/components/ActorStats";

const hotpads = actors.find((a) => a.id === "hotpads");
const gmaps = actors.find((a) => a.id === "gmaps");

export function DataSection() {
  return (
    <Reveal id="data" className="container section" aria-labelledby="data-title">
      <header className="section-head">
        <h2 id="data-title" className="section-title">The web, as data.</h2>
        <p className="section-sub">
          Alongside product work I build automation and data extraction pipelines for clients abroad, and
          I publish my own actors on the Apify Store, where anyone can run them.
        </p>
      </header>

      <div className="data-grid">
        <article className="data-card data-card--lead" data-spot data-reveal>
          <div className="data-card__text">
            <h3>{hotpads.name}</h3>
            <p>{hotpads.summary}</p>
          </div>
          <div className="mini-window">
            <div className="mini-window__bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>apify.com/tangerine_loom/hotpads-scraper</span>
            </div>
            <img src={shots.hotpads} alt="The Hotpads Scraper page on the Apify Store" width="2400" height="1500" loading="lazy" decoding="async" />
          </div>
          <ActorStats actor={hotpads} />
        </article>

        <div className="data-side">
          <article className="data-card" data-spot data-reveal>
            <div className="data-card__text">
              <h3>{gmaps.name}</h3>
              <p>{gmaps.summary}</p>
            </div>
            <ActorStats actor={gmaps} showUsers={false} showRating={false} />
          </article>

          <article className="data-card data-card--link" data-spot data-reveal>
            <h3>Where the data ends up</h3>
            <p>
              In clean feeds that clients’ AI systems and agents read every day, and in products of my
              own.
            </p>
            <SectionLink to="work" className="link-arrow">
              See what it powers <ArrowRight size={16} aria-hidden="true" />
            </SectionLink>
          </article>
        </div>
      </div>
    </Reveal>
  );
}
