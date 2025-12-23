/* eslint-disable react/no-unescaped-entities */
import { UseThemeContext } from "../context/ThemeContext";
import wallace from "../assets/wallicestene.png";
import { Element, scroller } from "react-scroll";
import Skills from "./Skills";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import { motion } from "framer-motion";
import ExperiencePage from "./ExperiencePage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// REMOVED: AnimatedBackground import (It is already in App.jsx)

const Homepage = () => {
  const { theme } = UseThemeContext();

  const handleDownload = () => {
    const fileUrl = "/My Resume.pdf";
    fetch(fileUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "My Resume.pdf";
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error:", error));
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <>
      <Element
        name="about"
        className={`relative min-h-screen flex flex-col justify-center transition-colors duration-500 ${
          theme === "light" ? "text-neutral-800" : "text-neutral-200"
        }`}
      >
        <Navbar
          scrollToAbout={() => scrollToSection("about")}
          scrollToProjects={() => scrollToSection("projects")}
          scrollToSkills={() => scrollToSection("skills")}
          scrollToContact={() => scrollToSection("contact")}
          scrollToExperience={() => scrollToSection("experience")}
        />

        {/* HERO SECTION */}
        <div className="flex-grow flex items-center justify-center w-11/12 max-w-7xl mx-auto pt-24 lg:pt-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
            {/* LEFT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center lg:items-start text-center lg:text-left font-SpaceGrotesk z-10"
            >
              <motion.div
                variants={fadeInUp}
                className={`
                inline-flex items-center px-3 py-1 mb-6 rounded-full text-xs font-bold tracking-widest uppercase border backdrop-blur-sm
                ${
                  theme === "light"
                    ? "bg-white/40 border-neutral-200 text-neutral-600"
                    : "bg-black/20 border-white/10 text-neutral-300"
                }
              `}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                Software Engineer
              </motion.div>

              {/* HEADLINE */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
              >
                Building <br />
                <span
                  className={`${
                    theme === "light" ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  Digital Reality.
                </span>
              </motion.h1>

              {/* BIO */}
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-balance max-w-lg leading-relaxed opacity-90 mb-8"
              >
                I'm <strong>Wallicestene</strong>. A Full-Stack Developer based
                in Nairobi. I combine technical expertise with creative
                problem-solving to build scalable applications that solve
                real-world problems.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <button
                  onClick={handleDownload}
                  className={`
                    relative overflow-hidden px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg
                    ${
                      theme === "light"
                        ? "bg-neutral-900 text-white hover:bg-black hover:shadow-xl"
                        : "bg-white text-black hover:bg-neutral-200 hover:shadow-white/10"
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    View Resume
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
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className={`
                    px-8 py-4 rounded-full font-medium border transition-all duration-300 backdrop-blur-sm
                    ${
                      theme === "light"
                        ? "border-neutral-400 text-neutral-800 hover:border-black hover:bg-white/50"
                        : "border-neutral-600 text-neutral-200 hover:border-white hover:bg-white/10"
                    }
                  `}
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                bounce: 0.4,
              }}
              className="relative flex justify-center lg:justify-end z-10 mt-10 lg:mt-0"
            >
              <div className="relative group cursor-pointer">
                {/* Main Image */}
                <div
                  className={`
                  relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden
                  transition-transform duration-500 ease-in-out group-hover:scale-[1.02]
                  ${
                    theme === "light"
                      ? "bg-white shadow-2xl shadow-neutral-400/20"
                      : "bg-neutral-800 shadow-2xl shadow-black/50"
                  }
                `}
                >
                  <img
                    src={wallace}
                    alt="Wallicestene Waweru"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Decorative Frame Behind */}
                <div
                  className={`
                  absolute inset-0 w-full h-full rounded-[2.5rem] -z-10 
                  rotate-6 opacity-40 transition-transform duration-500 group-hover:rotate-3
                  ${
                    theme === "light"
                      ? "bg-white border-2 border-neutral-200"
                      : "bg-neutral-800 border border-neutral-700"
                  }
                `}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </Element>

      <Skills handleDownload={handleDownload} />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Homepage;
