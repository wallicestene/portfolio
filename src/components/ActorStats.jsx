/* eslint-disable react/prop-types */
import { ArrowUpRight, Star } from "lucide-react";
import { useApifyStats } from "@/lib/useApifyStats";
import { CountUp } from "./CountUp";

// Live Apify stats for one actor, labelled with their source.
export function ActorStats({ actor, showUsers = true, showRating = true }) {
  const s = useApifyStats(actor);
  return (
    <div className="stats">
      <div className="stats__head">
        <span className="stats__name">{actor.name}</span>
        <span className={`stats__source${s.live ? " is-live" : ""}`}>
          {s.live ? "Live from Apify" : `As of ${actor.snapshot.date}`}
        </span>
      </div>
      <dl className="stats__grid">
        {showUsers && (
          <div>
            <dt>Users</dt>
            <dd><CountUp value={s.users} /></dd>
          </div>
        )}
        <div>
          <dt>Runs</dt>
          <dd><CountUp value={s.runs} /></dd>
        </div>
        {showRating && (
          <div>
            <dt>Rating</dt>
            <dd className="stats__rating">
              {s.reviews > 0 ? (
                <>
                  <CountUp value={s.rating} decimals={1} />
                  <Star size={18} aria-hidden="true" />
                </>
              ) : (
                <span className="stats__none">No reviews yet</span>
              )}
            </dd>
          </div>
        )}
      </dl>
      <a href={actor.store} className="link-arrow stats__link" target="_blank" rel="noreferrer">
        Open on the Apify Store <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  );
}
