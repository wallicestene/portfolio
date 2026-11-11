import { Route, Routes } from "react-router-dom";
import { SmoothScroll } from "@/lib/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollManager } from "@/components/ScrollManager";
import { PointerLight } from "@/components/PointerLight";
import Home from "@/pages/Home";
import CaseStudy from "@/pages/CaseStudy";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <SmoothScroll>
      <ScrollManager />
      <PointerLight />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-bg focus:p-3 font-display">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
