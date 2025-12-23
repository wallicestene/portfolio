/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { UseThemeContext } from "../context/ThemeContext";

// Icons
import { FaAws, FaRobot, FaGitAlt } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFastapi,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiFirebase,
  SiDocker,
  SiAxios,
} from "react-icons/si";

function Skills({ handleDownload }) {
  const { theme, textColorStyle } = UseThemeContext();

  const skillCategories = [
    {
      title: "Frontend & UI",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: theme === "light" ? "#000" : "#fff" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ],
    },
    {
      title: "Backend & API",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: theme === "light" ? "#000" : "#fff" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Prisma", icon: SiPrisma, color: theme === "light" ? "#2D3748" : "#fff" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
      ],
    },
    {
      title: "Automation & Scraping",
      skills: [
        { name: "Playwright", icon: FaRobot, color: "#2EAD33" },
        { name: "Cheerio", icon: FaRobot, color: "#E88C1F" },
        { name: "Crawlee", icon: FaRobot, color: "#2EAD33" },
        { name: "Apify", icon: FaRobot, color: "#97D700" },
        { name: "Axios", icon: SiAxios, color: "#5A29E4" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <Element
      name="skills"
      className={`min-h-screen flex items-center py-20 transition-colors duration-500 relative ${
        theme === "light" ? "text-neutral-800" : "text-neutral-200"
      }`}
    >
      <div className="w-11/12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 z-10">
        
        {/* LEFT */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-SpaceGrotesk"
          >
            
            <span
              className={`inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border backdrop-blur-sm ${
                theme === "light"
                  ? "bg-primary/5 border-primary/10 text-primary"
                  : "bg-secondary/5 border-secondary/10 text-secondary"
              }`}
            >
              My Stack
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Technologies <br />
              <span
                className={
                  theme === "light" ? "text-neutral-400" : "text-neutral-500"
                }
              >
                I work with.
              </span>
            </h2>

            <p className="text-lg leading-relaxed opacity-80 mb-8">
              I don't just use tools; I choose the right ones for the job. From
              building pixel-perfect {textColorStyle("front-end interfaces")} to
              scalable {textColorStyle("backend systems")} and robust
              {textColorStyle(" automation pipelines")}.
            </p>

            <button
              onClick={handleDownload}
              className={`hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                theme === "light"
                  ? "bg-neutral-900 hover:bg-black text-white shadow-lg hover:shadow-xl"
                  : "bg-white hover:bg-neutral-200 text-black shadow-lg shadow-white/5"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download Resume
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-10"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h3
                  className={`text-lg font-bold mb-5 flex items-center gap-3 font-SpaceGrotesk uppercase tracking-wider text-sm ${
                    theme === "light" ? "text-neutral-500" : "text-neutral-400"
                  }`}
                >
                  {category.title}
                  <span
                    className={`flex-grow h-[1px] ${
                      theme === "light" ? "bg-neutral-200" : "bg-neutral-800"
                    }`}
                  ></span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`
                        group flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 cursor-default
                        ${
                          theme === "light"
                            ? "bg-white border-neutral-100 hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-200/50"
                            : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800 hover:shadow-xl hover:shadow-black/50"
                        }
                      `}
                    >
                      {/* Icon Box */}
                      <div
                        className={`
                          w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110
                          ${
                            theme === "light" ? "bg-neutral-50" : "bg-neutral-950"
                          }
                        `}
                      >
                        <skill.icon size={20} color={skill.color} />
                      </div>

                      {/* Text */}
                      <span
                        className={`text-sm font-semibold font-SpaceGrotesk ${
                          theme === "light"
                            ? "text-neutral-700"
                            : "text-neutral-200"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Element>
  );
}

export default Skills;