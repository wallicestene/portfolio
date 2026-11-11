import { createContext, useContext } from "react";

export const ScrollContext = createContext({ scrollTo: () => {} });

export function useSmoothScroll() {
  return useContext(ScrollContext);
}
