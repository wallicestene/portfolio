import React, { useState } from "react";
import NavbarMobile from "./NavbarMobile";
import { Close, DarkMode, LightMode, Menu } from "@mui/icons-material";
import { UseThemeContext } from "../../context/ThemeContext";
import { Link } from "react-scroll";

const Navbar = ({scrollToSkills, scrollToAbout, scrollToProjects}) => {
  const [showNavbarMobile, setShowNavbarMobile] = useState(false);
  const { theme, toggleTheme } = UseThemeContext();

  return (
    <header className=" w-11/12 mx-auto relative">
      <nav className=" flex justify-between">
        <div
          className={`font-SpaceGrotesk font-extrabold tracking-wider text-2xl delay-100 duration-100 transition ${
            theme === "light" ? " text-primary" : "text-secondary "
          }`}
        >
          Wallicestene
        </div>
        <ul
          className={`hidden lg:flex gap-10 font-SpaceGrotesk tracking-wide  ${
            theme === "light" ? " text-primary" : "text-secondary "
          }`}
        >
          <li>
            <Link to="about" onAbort={scrollToAbout}>About</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} onClick={scrollToSkills} > Skills</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} onClick={scrollToProjects} > Projects</Link>
          </li>
          <li>
            <Link to="contact"> Contact </Link>
          </li>
        </ul>
        <div
          className={` lg:hidden  ${
            theme === "light" ? " text-primary" : "text-secondary "
          }`}
          onClick={() => setShowNavbarMobile(true)}
        >
          <Menu fontSize="large" />
        </div>
      </nav>

      {/* Mobile menu */}

      {showNavbarMobile && (
        <div
          className={` lg:hidden fixed z-40 h-screen w-1/2 bg-primary text top-0 right-0  delay-100 duration-100 transition ${
            theme === "light" ? " text-primary bg-white" : " text-secondary"
          }`}
        >
          <div
            onClick={() => setShowNavbarMobile(false)}
            className=" flex justify-end mr-4 my-1"
          >
            <Close fontSize="large" />
          </div>
          <NavbarMobile scrollToSkills={scrollToSkills} scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects}/>
        </div>
      )}
      <div
        onClick={toggleTheme}
        className=" lg:fixed hidden right-10 bg-white z-10 text-primary h-10 w-10 lg:grid place-items-center rounded-full cursor-pointer shadow-lg"
      >
        {theme === "light" ? (
          <DarkMode fontSize="small" />
        ) : (
          <LightMode fontSize="small" />
        )}
      </div>
    </header>
  );
};

export default Navbar;
