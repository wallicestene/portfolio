/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useSmoothScroll } from "@/lib/scrollContext";

// Scrolls to a home-page section, going home first when needed.
export function SectionLink({ to, onNavigate, children, ...props }) {
  const { pathname } = useLocation();
  const { scrollTo } = useSmoothScroll();

  const handleClick = (event) => {
    onNavigate?.();
    if (pathname !== "/") return;
    event.preventDefault();
    scrollTo(`#${to}`);
    window.history.replaceState(null, "", `/#${to}`);
  };

  return (
    <Link to={`/#${to}`} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
