/* eslint-disable react/prop-types */
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, REDUCED_MOTION } from "@/lib/motion";

const format = new Intl.NumberFormat("en-GB");

// Counts up on view; the real value stays in the DOM for screen readers.
export function CountUp({ value, decimals = 0 }) {
  const ref = useRef(null);
  const show = (n) => (decimals ? n.toFixed(decimals) : format.format(Math.round(n)));
  const text = show(value);

  useGSAP(
    () => {
      const el = ref.current;
      const mm = gsap.matchMedia();
      mm.add(`not ${REDUCED_MOTION}`, () => {
        const counter = { n: 0 };
        let tween;
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 95%",
          once: true,
          onEnter: () => {
            tween = gsap.to(counter, {
              n: value,
              duration: 1.4,
              ease: "power3.out",
              onUpdate: () => {
                el.textContent = show(counter.n);
              },
              onComplete: () => {
                el.textContent = text;
              },
            });
          },
        });
        return () => {
          st.kill();
          tween?.kill();
          el.textContent = text;
        };
      });
    },
    { dependencies: [value], revertOnUpdate: true },
  );

  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
