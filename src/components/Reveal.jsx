/* eslint-disable react/prop-types */
import { useRef } from "react";
import { gsap, useGSAP, REDUCED_MOTION } from "@/lib/motion";

// Lifts the section head and [data-reveal] children in as they scroll into view.
export function Reveal({ as: Tag = "section", children, ...props }) {
  const root = useRef(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`not ${REDUCED_MOTION}`, () => {
        const head = root.current.querySelectorAll(":scope .section-head > *");
        if (head.length) {
          gsap.from(head, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: head[0], start: "top 90%", once: true },
          });
        }
        root.current.querySelectorAll("[data-reveal]").forEach((el, i) => {
          gsap.from(el, {
            opacity: 0,
            y: 24,
            duration: 0.9,
            ease: "power3.out",
            delay: (i % 2) * 0.08,
            scrollTrigger: { trigger: el, start: "top 94%", once: true },
          });
        });
      });
    },
    { scope: root },
  );
  return (
    <Tag ref={root} {...props}>
      {children}
    </Tag>
  );
}
