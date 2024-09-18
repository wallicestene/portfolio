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
        className={` transform duration-500 hover:scale-110  py-5 flex items-center  px-5 space-x-1 delay-100 transition font-SpaceGrotesk  ${
          theme === "light"
            ? " text-neutral-600 bg-white"
            : " text-neutral-400 bg-neutral-950"
        }`}
      >
        <div className=" h-6 w-6 hover:animate-spin">
          <img src={icon} alt="" className=" w-full h-full" />
        </div>
        <div>
          <p>{title}</p>
        </div>
      </div>
    </Fade>
  );
};

export default SkillsCards;
