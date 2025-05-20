/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import reactIcon from "../assets/physics.png";
import htmlIcon from "../assets/html-5.png";
import JavascriptIcon from "../assets/js.png";
import gitIcon from "../assets/git.png";
import cssIcon from "../assets/css3.png";
import tailwindIcon from "../assets/tailwind-css.png";
import nodeIcon from "../assets/node-js.png";
import expressIcon from "../assets/express.png";
import mongoDBIcon from "../assets/mongodb.png";
import firebaseIcon from "../assets/firebase.png";
import SQLIcon from "../assets/sql.png";
import awsIcon from "../assets/aws.png";
import postre from "../assets/postgre.png";
import python from "../assets/python.png";
import { UseThemeContext } from "../context/ThemeContext";
import SkillsCards from "./SkillsCards";
import { Fade, Slide } from "react-awesome-reveal";

// eslint-disable-next-line react/prop-types
function Skills({ handleDownload }) {
  const { theme, textColorStyle } = UseThemeContext();
  return (
    <Element
      name="skills"
      className={`delay-100 duration-500 transition ${
        theme === "light" ? "text-neutral-600" : "text-neutral-400"
      }`}
    >
      <div className="h-screen grid overflow-hidden lg:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
        <div className="left flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk">
          <Slide duration={1200} direction="left" triggerOnce>
            <span
              className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-3 ${
                theme === "light"
                  ? "bg-primary/10 text-primary"
                  : "bg-secondary/10 text-secondary"
              }`}
            >
              My Skills
            </span>
            <h2 className="text-2xl lg:text-5xl font-bold tracking-tight">
              My Development
              <span className="relative ml-2">
                {textColorStyle("Tech Stack")}
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
            <p className="text-lg text-balance max-w-xl leading-relaxed">
              Throughout
              {textColorStyle(" my journey, ")} I've engaged with a diverse
              array of
              {textColorStyle(" tools and technologies, ")}
              both in personal and open-source projects. My journey has been
              enriched by cultivating a range of{" "}
              {textColorStyle(
                " soft skills, complementing my professional growth."
              )}
            </p>
          </Slide>

          <Fade duration={1200} delay={200} triggerOnce>
            <div className="mt-8 grid place-items-center lg:flex lg:justify-start">
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
            </div>
          </Fade>
        </div>

        <div className="right grid place-items-center">
          <div className="p-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <SkillsCards title="React.js" icon={reactIcon} proficiency={90} />
            <SkillsCards
              title="Javascript"
              icon={JavascriptIcon}
              proficiency={85}
            />
            <SkillsCards title="Node.js" icon={nodeIcon} proficiency={80} />
            <SkillsCards title="Python" icon={python} proficiency={75} />
            <SkillsCards
              title="Tailwind-CSS"
              icon={tailwindIcon}
              proficiency={90}
            />
            <SkillsCards title="HTML" icon={htmlIcon} proficiency={90} />
            <SkillsCards title="CSS" icon={cssIcon} proficiency={85} />
            <SkillsCards title="Git" icon={gitIcon} proficiency={85} />
            <SkillsCards
              title="Express.js"
              icon={expressIcon}
              proficiency={80}
            />
            <SkillsCards title="MongoDB" icon={mongoDBIcon} proficiency={80} />
            <SkillsCards
              title="Firebase"
              icon={firebaseIcon}
              proficiency={75}
            />
            <SkillsCards title="SQL" icon={SQLIcon} proficiency={75} />
            <SkillsCards title="PostgreSQL" icon={postre} proficiency={70} />
            <SkillsCards title="AWS" icon={awsIcon} proficiency={65} />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Skills;
