/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { UseThemeContext } from "../context/ThemeContext";
import ProjectsCards from "./ProjectsCards";
import { FiGithub, FiArrowRight } from "react-icons/fi";

// Images
import EShop from "../assets/projectImages/E-shop.png";
import Recipe from "../assets/projectImages/Recipe.png";
import Space from "../assets/projectImages/Space.png";
import Password from "../assets/projectImages/Password.png";
import Countries from "../assets/projectImages/Countries.png";
import Bookify from "../assets/projectImages/Bookify.png";
import Vesper from "../assets/projectImages/Vesper.png";
import SLack from "../assets/projectImages/Slack.png";
import Saving from "../assets/projectImages/Saving.png";
import Url from "../assets/projectImages/url.png";
import MetaBlog from "../assets/projectImages/MetaBlog.png";

function ProjectsPage() {
  const { theme, textColorStyle } = UseThemeContext();
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      image: Vesper,
      title: "Vesper",
      stack: "Next.js + TypeScript + PostgreSQL + Prisma + Cron Jobs",
      description:
        "A social media scheduling platform. Implemented backend scheduling, simulated publishing, and engagement analytics using cron jobs. Features secure authentication via BetterAuth.",
      link: "https://github.com/wallicestene/vesper.git",
      live: "#",
      category: "In Development",
    },
    {
      image: Bookify,
      title: "Bookify",
      stack: "React + Node.js + Express.js + MongoDB + Tailwind",
      description:
        "Full-stack booking platform with advanced search filters and dashboards. Optimized backend queries and UI responsiveness, improving user engagement by ~20%.",
      link: "https://github.com/wallicestene/Bookify.git",
      live: "https://appbookify.netlify.app/",
      category: "fullstack",
    },
    {
      image: MetaBlog,
      title: "MetaBlog",
      stack: "React + Node.js + Express.js + MongoDB + Tailwind",
      description:
        "Blogging platform featuring Role-Based Access Control (RBAC) for secure content management and safe input handling.",
      link: "https://github.com/wallicestene/Blog",
      live: "https://the-metablog.netlify.app/",
      category: "fullstack",
    },
    {
      image: EShop,
      title: "E-shop",
      stack: "React + Node.js + Express.js + MongoDB + Tailwind",
      description: "Fashion, Accessories and clothing E-commerce Store.",
      link: "https://github.com/wallicestene/Ecommerce-shop.git",
      live: "https://my-e-commerce-shop.netlify.app/?#/",
      category: "fullstack",
    },
    {
      image: Saving,
      title: "SAFESAVER",
      stack: "Vite+React + Node.js + Express.js + MongoDB + Tailwind",
      description:
        "A basic saving system built using the MERN stack on the administrative side.",
      link: "https://github.com/wallicestene/the-saving-system.git",
      live: "https://phenomenal-kitsune-a8db2f.netlify.app/#/",
      category: "fullstack",
    },
    {
      image: Url,
      title: "TinyUrl",
      stack: "React + Node.js + Express.js + MongoDB + Tailwind",
      description: "A simple URL Shortener app",
      link: "https://github.com/wallicestene/Url-shortener-app.git",
      live: "https://tinyurls.netlify.app/",
      category: "fullstack",
    },
    {
      image: Recipe,
      title: "Recipe Realm",
      stack: "Vite+React + Tailwind + Firebase",
      description:
        "Advanced Recipe finder app with hundreds of recipes to choose from.",
      link: "https://github.com/wallicestene/Recipe-app.git",
      live: "https://wallicestene.github.io/Recipe-app/#/",
      category: "frontend",
    },
    {
      image: Space,
      title: "Space Tourism",
      stack: "Vite+React + CSS + API",
      description: "Space Tourism multi-page website.",
      link: "https://github.com/wallicestene/Space-Tourism.git",
      live: "https://wallicestene.github.io/Space-Tourism/#/",
      category: "frontend",
    },
    {
      image: Countries,
      title: "REST Countries",
      stack: "React + CSS + REST API",
      description: "REST Countries API with color theme switcher.",
      link: "https://github.com/wallicestene/the-countries.git",
      live: "https://wallicestene.github.io/the-countries/#/",
      category: "frontend",
    },
    {
      image: Password,
      title: "TO-DO list",
      stack: "React + CSS",
      description: "A simple TO-DO list app.",
      link: "https://github.com/wallicestene/To-do-App.git",
      live: "https://wallicestene.github.io/To-do-App/",
      category: "frontend",
    },
    {
      image: SLack,
      title: "My-Slack",
      stack: "React + CSS + Firebase + Redux",
      description: "A simple Slack Clone App.",
      link: "https://github.com/wallicestene/Slack-clone.git",
      live: "https://slack-clone-a1504.web.app/",
      category: "frontend",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "In Development", label: "In Dev" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
  ];

  return (
    <Element
      name="projects"
      className={`min-h-screen flex items-center py-20 transition-colors duration-500 relative ${
        theme === "light" ? "text-neutral-800" : "text-neutral-200"
      }`}
    >
      <div className="w-11/12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-SpaceGrotesk"
          >
            <span
              className={`
              inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border backdrop-blur-sm
              ${
                theme === "light"
                  ? "bg-primary/5 border-primary/10 text-primary"
                  : "bg-secondary/5 border-secondary/10 text-secondary"
              }
            `}
            >
              Selected Work
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              What I've <br />
              <span
                className={
                  theme === "light" ? "text-neutral-400" : "text-neutral-500"
                }
              >
                Built.
              </span>
            </h2>

            <p className="text-lg leading-relaxed opacity-80 mb-8">
              A collection of projects exploring
              {textColorStyle(" modern web technologies ")}. From complex
              full-stack applications to experimental frontend interfaces.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`
                    px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-300 border
                    ${
                      filter === f.id
                        ? theme === "light"
                          ? "bg-neutral-900 text-white border-neutral-900"
                          : "bg-white text-black border-white"
                        : theme === "light"
                        ? "bg-transparent text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-black"
                        : "bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                    }
                  `}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <a
              href="https://github.com/wallicestene"
              target="_blank"
              rel="noreferrer"
              className={`hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 group ${
                theme === "light"
                  ? "bg-white border border-neutral-200 text-neutral-800 hover:border-neutral-900 shadow-sm"
                  : "bg-neutral-800 border border-neutral-700 text-white hover:bg-neutral-700 shadow-sm"
              }`}
            >
              <FiGithub className="text-lg" />
              <span>Visit GitHub</span>
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8"
            >
              {filteredProjects.length === 0 ? (
                <div className="text-center py-10 opacity-50">
                  No projects found in this category.
                </div>
              ) : (
                filteredProjects.map((project, index) => (
                  <ProjectsCards key={index} {...project} />
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Element>
  );
}

export default ProjectsPage;
