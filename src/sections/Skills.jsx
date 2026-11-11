import { Reveal } from "@/components/Reveal";
import { SkillLines } from "@/components/SkillLines";

export function Skills() {
  return (
    <Reveal id="skills" className="skills section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="sr-only">
        Skills and services
      </h2>
      <SkillLines />
    </Reveal>
  );
}
