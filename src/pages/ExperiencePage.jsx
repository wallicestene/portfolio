/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll";
import { UseThemeContext } from "../context/ThemeContext";
import { Slide } from "react-awesome-reveal";
import ExperienceCard from "./ExperienceCard";

const ExperiencePage = () => {
  const { theme } = UseThemeContext();
  return (
    <Element
      name="experience"
      className={` bg-primary delay-100 duration-500 transition ${
        theme === "light"
          ? " text-neutral-600 bg-secondary"
          : " text-neutral-400"
      }`}
    >
      <div className="h-screen  grid overflow-hidden lg:grid-cols-2 grid-cols-1  w-11/12 mx-auto">
        <div className="exLeft flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk">
        <Slide duration={1200} direction="left" triggerOnce>
            <h2 className=" text-2xl lg:text-5xl font-bold my-5 tracking-wide">
              My{" "}
              <span
                className={`  delay-100 duration-500 transition  ${
                  theme === "light" ? " text-primary" : "text-white"
                }`}
              >
                Experience{" "}
              </span>
            </h2>
            <p>
              Throughout{" "}
              <span
                className={` delay-100 duration-500 transition   ${
                  theme === "light" ? " text-primary" : "text-white"
                }`}
              >
                {" "}
                my journey
              </span>
              , I've engaged with a diverse array of{" "}
              <span
                className={` delay-100 duration-500 transition   ${
                  theme === "light" ? " text-primary" : "text-white"
                }`}
              >
                {" "}
                tools and technologies
              </span>
              , both in personal and open-source projects. My journey has been
              enriched by cultivating a range of{" "}
              <span
                className={`  delay-100 duration-500 transition  ${
                  theme === "light" ? " text-primary" : "text-white"
                }`}
              >
                soft skills, complementing my professional growth.
              </span>
            </p>
          </Slide>
        </div>
        <div className="exRight grid place-items-center">
          <ExperienceCard/>
        </div>
      </div>
    </Element>
  );
};

export default ExperiencePage;
