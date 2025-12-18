/* eslint-disable react/no-unescaped-entities */
import { UseThemeContext } from "../context/ThemeContext";
import wallace from "../assets/wallicestene.png";
import { Element, scroller } from "react-scroll";
import Skills from "./Skills";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import { Fade, Slide } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

import ExperiencePage from "./ExperiencePage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import FadingQuote from "../components/FadingQuote";
const Homepage = () => {
  const { theme, textColorStyle } = UseThemeContext();
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
      .catch((error) => {
        console.error("Error downloading the file:", error);
      });
  };
  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToSkills = () => {
    scroller.scrollTo("skills", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToExperience = () => {
    scroller.scrollTo("experience", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <>
      <style>{`
        .typing-text {
          position: relative;
        }
        .typing-text::after {
          content: "";
          position: absolute;
          right: -4px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 70%;
          background-color: ${
            theme === "light"
              ? "var(--primary-color)"
              : "var(--secondary-color)"
          };
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
      <Element
        name="about"
        className={` z-10 lg:h-screen delay-100 duration-500 transition ${
          theme === "light" ? " text-neutral-600 y" : " text-neutral-400"
        }`}
      >
        <div
          className={`fixed top-0 w-full flex z-40 items-center h-12 delay-100 duration-500 transition ${
            theme === "light" ? "" : "  "
          }`}
        >
          <AnimatedBackground />

          <Navbar
            scrollToAbout={scrollToAbout}
            scrollToProjects={scrollToProjects}
            scrollToSkills={scrollToSkills}
            scrollToContact={scrollToContact}
            scrollToExperience={scrollToExperience}
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 relative text-center lg:text-start mt-10 h-screen overflow-hidden w-11/12 mx-auto">
          <div className="left flex flex-col justify-center items-center lg:items-start font-SpaceGrotesk space-y-6 z-10">
            <div className="space-y-2">
              <Fade duration={800} triggerOnce>
                <span
                  className={`inline-block py-1 px-3 rounded-full text-sm font-medium ${
                    theme === "light"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  Software Engineer
                </span>
              </Fade>

              <h2 className={`text-2xl lg:text-5xl font-bold tracking-tight`}>
                <span>I'm </span>
                <span className="typing-text">
                  {textColorStyle(
                    <TypeAnimation
                      sequence={[
                        "Wallicestene",
                        5000,
                        "a Front-End Developer",
                        2000,
                        "a Full-Stack Developer",
                        2000,
                        "a Software Engineer",
                        2000,
                        "a Web Developer",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  )}
                </span>
              </h2>
            </div>

            <Slide duration={1200} direction="left" cascade triggerOnce>
              <p className="text-lg text-balance max-w-xl leading-relaxed">
                I'm a{textColorStyle("front-end/Full-Stack developer")}
                based in Nairobi, Kenya, with a strong focus on
                {textColorStyle("front-end and back-end development.")}{" "}
                Currently pursuing a Bachelor of Science in{" "}
                {textColorStyle("Applied Computer Science")}
                at KCA University, I’m passionate about building
                {textColorStyle("user-friendly web applications")}and
                continuously learning new{textColorStyle("technologies")} to
                solve
                {textColorStyle("real-world")}
                problems.
              </p>
            </Slide>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Fade duration={800} triggerOnce>
                <button
                  onClick={handleDownload}
                  className={`relative overflow-hidden px-7 py-3 font-medium rounded-lg group transition-all duration-300 ${
                    theme === "light"
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-secondary text-primary hover:bg-secondary/90"
                  }`}
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
                  <span className="flex items-center gap-2">
                    View Resumé
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
                </button>
              </Fade>

              <Fade duration={800} delay={200} triggerOnce>
                <button
                  onClick={scrollToContact}
                  className={`px-7 py-3 rounded-lg font-medium border transition-all duration-300 ${
                    theme === "light"
                      ? "border-primary/50 hover:border-primary text-primary"
                      : "border-secondary/50 hover:border-secondary text-secondary"
                  }`}
                >
                  Contact Me
                </button>
              </Fade>
            </div>
          </div>
          <FadingQuote />
          {/* Right column  */}
          <div className="right grid place-items-center z-10">
            <div className="relative">
              <Fade duration={1200} triggerOnce>
                <div
                  className={`absolute inset-0 rounded-full blur-md -z-10 ${
                    theme === "light" ? "bg-primary/30" : "bg-secondary/30"
                  }`}
                  style={{ transform: "translate(8px, 8px)" }}
                ></div>

                <div
                  className={`
          relative rounded-full overflow-hidden border-4 w-72 h-72 lg:w-96 lg:h-96
          ${theme === "light" ? "border-primary" : "border-secondary"}
        `}
                >
                  <img
                    src={wallace}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    alt="Wallicestene Waweru"
                  />
                </div>
              </Fade>
            </div>
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
