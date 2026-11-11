/* eslint-disable react/prop-types */
import { useRef } from "react";
import { gsap, useGSAP, REDUCED_MOTION } from "@/lib/motion";

// Two-stroke W: draws in on load, bends and lights up on hover.
const shape = ({ peak, spread }) => ({
  a: `M${5 - spread} 8 L10.5 24 L16 ${peak}`,
  b: `M16 ${peak} L21.5 24 L${27 + spread} 8`,
});

export function WMark({ className = "" }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const svg = root.current;
      const [a, b] = svg.querySelectorAll("path");
      const link = svg.closest("a") ?? svg;

      // Colour is handled in CSS (.is-lit); GSAP can't interpolate oklch.
      const light = (on) => svg.classList.toggle("is-lit", on);
      let bend = () => {};

      const mm = gsap.matchMedia();
      mm.add(`not ${REDUCED_MOTION}`, () => {
        gsap.fromTo(
          [a, b],
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.9, ease: "power3.inOut", stagger: 0.18, delay: 0.2 },
        );
        const state = { peak: 11, spread: 0 };
        const draw = () => {
          const d = shape(state);
          a.setAttribute("d", d.a);
          b.setAttribute("d", d.b);
        };
        bend = (on) =>
          gsap.to(state, on
            ? { peak: 15, spread: 1.2, duration: 0.5, ease: "back.out(2.4)", overwrite: true, onUpdate: draw }
            : { peak: 11, spread: 0, duration: 0.6, ease: "elastic.out(1, 0.45)", overwrite: true, onUpdate: draw });
        return () => {
          bend = () => {};
        };
      });

      const enter = () => {
        light(true);
        bend(true);
      };
      const leave = () => {
        light(false);
        bend(false);
      };
      link.addEventListener("pointerenter", enter);
      link.addEventListener("pointerleave", leave);
      link.addEventListener("focus", enter);
      link.addEventListener("blur", leave);
      return () => {
        link.removeEventListener("pointerenter", enter);
        link.removeEventListener("pointerleave", leave);
        link.removeEventListener("focus", enter);
        link.removeEventListener("blur", leave);
      };
    },
    { scope: root },
  );

  const d = shape({ peak: 11, spread: 0 });
  return (
    <svg ref={root} className={`wmark ${className}`} viewBox="0 0 32 32" aria-hidden="true">
      <path d={d.a} pathLength="1" />
      <path d={d.b} pathLength="1" className="wmark__second" />
    </svg>
  );
}
