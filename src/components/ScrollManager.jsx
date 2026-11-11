import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSmoothScroll } from "@/lib/scrollContext";
import { ScrollTrigger } from "@/lib/motion";

// On every route change: go to the hash target if there is one, otherwise to the top.
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      if (hash) scrollTo(hash, { immediate: true });
      else scrollTo(0, { immediate: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, scrollTo]);

  return null;
}
