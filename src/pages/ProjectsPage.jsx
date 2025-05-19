/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { UseThemeContext } from "../context/ThemeContext";
import ProjectsCards from "./ProjectsCards";
import EShop from "../assets/projectImages/E-shop.png";
import Recipe from "../assets/projectImages/Recipe.png";
import Space from "../assets/projectImages/Space.png";
import Password from "../assets/projectImages/Password.png";
import Countries from "../assets/projectImages/Countries.png";
import Bookify from "../assets/projectImages/Bookify.png";
import SLack from "../assets/projectImages/Slack.png";
import Saving from "../assets/projectImages/Saving.png";
import Url from "../assets/projectImages/url.png";
import MetaBlog from "../assets/projectImages/MetaBlog.png";
import { Fade, Slide } from "react-awesome-reveal";
import { useState } from "react";

function ProjectsPage() {
  const { theme, textColorStyle } = UseThemeContext();
  const [filter, setFilter] = useState("all");

  // Project categories
  const projects = [
    {
      image: Bookify,
      title: "Bookify",
      stack: "React + Node.js + Express.js + MongoDB + Tailwind",
      description:
        "This is a MERN stack booking app where users can browse and book accommodations. Features include Advanced search, Recommendation system, book accommodations, and list places for booking",
      link: "https://github.com/wallicestene/Restaurant-system.git",
      live: "https://appbookify.netlify.app/",
      category: "fullstack",
    },
    {
      image: MetaBlog,
      title: "MetaBlog",
      stack: "React + Node.js + Express.js + MongoDB + Tailwind + MUI",
      description:
        "A blogging website where users can read existing blogs and upload their own content.",
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

  // Filter projects based on selected category
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Element
      name="projects"
      className={`delay-100 duration-500 transition ${
        theme === "light" ? "text-neutral-600" : "text-neutral-400"
      }`}
    >
      <div className="h-screen grid overflow-hidden lg:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
        <div className="left flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk px-2">
          <Slide duration={1200} direction="left" triggerOnce>
            <div className="mb-3">
              <span
                className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-3 ${
                  theme === "light"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                What I've Built
              </span>

              <h2 className="text-2xl lg:text-5xl font-bold tracking-wide">
                My{" "}
                <span className="relative">
                  {textColorStyle("Projects")}
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-1 ${
                      theme === "light" ? "bg-primary" : "bg-secondary"
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed">
              During my free moments, I take pleasure in both
              {textColorStyle(" exploring and constructing ")}
              endeavors that personally captivate me or hold practical value.
              You can discover a selection of these undertakings on my{" "}
              {textColorStyle(" GitHub profile, ")}
              alongside a variety of other miscellaneous creations that{" "}
              {textColorStyle(" I've dedicated my efforts to.")}
            </p>

            <div className="mt-6 mb-4">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                    filter === "all"
                      ? theme === "light"
                        ? "bg-primary text-white"
                        : "bg-secondary text-primary"
                      : theme === "light"
                      ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => setFilter("fullstack")}
                  className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                    filter === "fullstack"
                      ? theme === "light"
                        ? "bg-primary text-white"
                        : "bg-secondary text-primary"
                      : theme === "light"
                      ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  Full-Stack
                </button>
                <button
                  onClick={() => setFilter("frontend")}
                  className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                    filter === "frontend"
                      ? theme === "light"
                        ? "bg-primary text-white"
                        : "bg-secondary text-primary"
                      : theme === "light"
                      ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  Frontend
                </button>
              </div>
            </div>
          </Slide>

          <Fade duration={1200} delay={200} cascade triggerOnce>
            <div className="my-4 grid place-items-center lg:flex lg:justify-start">
              <a
                href="https://github.com/wallicestene"
                className={`relative overflow-hidden px-7 py-3 font-medium rounded-lg group transition-all duration-300 ${
                  theme === "light"
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-secondary text-primary hover:bg-secondary/90"
                }`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
                <span className="flex items-center gap-2">
                  View GitHub Profile
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7"></path>
                  </svg>
                </span>
              </a>
            </div>
          </Fade>
        </div>

        <div className="projectRight lg:mt-4 grid place-items-center h-full overflow-y-scroll py-5 scrollbar-hide">
          <div className="grid grid-cols-1 gap-6 pb-8">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-10">
                <p>No projects found in this category.</p>
              </div>
            ) : (
              filteredProjects.map((project, index) => (
                <ProjectsCards
                  key={index}
                  image={project.image}
                  title={project.title}
                  stack={project.stack}
                  description={project.description}
                  link={project.link}
                  live={project.live}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ProjectsPage;
