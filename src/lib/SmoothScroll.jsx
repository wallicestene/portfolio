/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion";
import { ScrollContext } from "./scrollContext";

// Lenis on fine pointers, synced to ScrollTrigger; native scroll under reduced motion.
export function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  // Re-measure triggers when fonts load or the page height changes.
  useEffect(() => {
    let timer = 0;
    const refresh = () => {
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 150);
    };
    document.fonts?.ready.then(refresh);
    const ro = new ResizeObserver(refresh);
    ro.observe(document.body);
    return () => {
      clearTimeout(timer);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.11 });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback((target, { immediate = false } = {}) => {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (target !== 0 && !el) return;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(target === 0 ? 0 : el, { immediate });
      return;
    }
    const behavior = immediate || prefersReducedMotion() ? "auto" : "smooth";
    if (target === 0) window.scrollTo({ top: 0, behavior });
    else el.scrollIntoView({ behavior, block: "start" });
  }, []);

  return <ScrollContext.Provider value={{ scrollTo }}>{children}</ScrollContext.Provider>;
}
