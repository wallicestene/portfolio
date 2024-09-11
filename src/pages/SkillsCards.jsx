/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { UseThemeContext } from "../context/ThemeContext";
import { Fade } from "react-awesome-reveal";

const SkillsCards = ({ title, icon }) => {
  const { theme, toggleTheme } = UseThemeContext();
  return (
    <Fade direction="right" duration={1200} delay={200} cascade triggerOnce>
      <div
        className={` transform duration-500 hover:scale-110 lg:py-9 py-5 flex items-center lg:px-10 px-5 gap-2 delay-100 transition font-SpaceGrotesk  ${
          theme === "light"
            ? " text-neutral-600 bg-white"
            : " text-neutral-400 bg-neutral-950"
        }`}
      >
        <div className=" h-6 hover:animate-spin">
          <img src={icon} alt="" className=" h-full" />
        </div>
        <div>
          <p>{title}</p>
        </div>
      </div>
    </Fade>
  );
};

export default SkillsCards;
