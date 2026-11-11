import { useEffect, useState } from "react";

// Live Apify stats for an actor, falling back to its dated snapshot.
export function useApifyStats(actor) {
  const [state, setState] = useState({ ...actor.snapshot, live: false });

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    fetch(`https://api.apify.com/v2/acts/${actor.apiId}`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(({ data }) => {
        const s = data.stats ?? {};
        setState({
          users: s.totalUsers ?? actor.snapshot.users,
          runs: s.totalRuns ?? actor.snapshot.runs,
          rating: s.actorReviewRating ?? actor.snapshot.rating,
          reviews: s.actorReviewCount ?? actor.snapshot.reviews,
          lastRun: s.lastRunStartedAt ?? null,
          runs30: s.publicActorRunStats30Days?.TOTAL ?? null,
          live: true,
        });
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [actor]);

  return state;
}
