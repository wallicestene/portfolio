import { Hero } from "@/sections/Hero";
import { LogoBand } from "@/sections/LogoBand";
import { SelectedWork } from "@/sections/SelectedWork";
import { Capabilities } from "@/sections/Capabilities";
import { Experience } from "@/sections/Experience";
import { DataSection } from "@/sections/DataSection";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBand />
      <SelectedWork />
      <Capabilities />
      <Experience />
      <DataSection />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
