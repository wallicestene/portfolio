import  { useState } from "react";
import NavbarMobile from "./NavbarMobile";
import { Close, DarkMode, LightMode, Menu } from "@mui/icons-material";
import { UseThemeContext } from "../../context/ThemeContext";
import { Link } from "react-scroll";
import { Slide } from "react-awesome-reveal";

const Navbar = ({
  scrollToSkills,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
  scrollToExperience,
}) => {
  const [showNavbarMobile, setShowNavbarMobile] = useState(false);
  const { theme, toggleTheme } = UseThemeContext();

  return (
    <header className=" w-11/12 mx-auto relative">
      <nav className=" flex justify-between">
        <div
          className={`font-SpaceGrotesk font-extrabold tracking-wider text-2xl delay-100 duration-500 transition hover:cursor-pointer ${
            theme === "light" ? " text-primary" : "text-secondary "
          }`}
        >
          <Link to="about" smooth={true} onClick={scrollToAbout}>
            Wallicestene
          </Link>
        </div>
        <ul
          className={`hidden lg:flex gap-10 font-SpaceGrotesk tracking-wide  ${
            theme === "light" ? " text-primary" : "text-secondary "
          }`}
        >
          <li className=" cursor-pointer hover:opacity-70">
            <Link to="about" smooth={true} onClick={scrollToAbout}>
              About
            </Link>
          </li>
          <li className=" cursor-pointer hover:opacity-70">
            <Link to="skills" smooth={true} onClick={scrollToSkills}>
              {" "}
              Skills
            </Link>
          </li>
          <li className=" cursor-pointer hover:opacity-70">
            <Link to="experience" smooth={true} onClick={scrollToExperience}>
              {" "}
              Experience
            </Link>
          </li>
          <li className=" cursor-pointer hover:opacity-70">
            <Link to="projects" smooth={true} onClick={scrollToProjects}>
              {" "}
              Projects
            </Link>
          </li>
          <li className=" cursor-pointer hover:opacity-70">
            <Link to="contact" smooth={true} onClick={scrollToContact}>
              {" "}
              Contact{" "}
            </Link>
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
        <Slide
          direction="right"
          delay={100}
          duration={1200}
          className={` lg:hidden fixed z-40 h-screen w-1/2 bg-primary text top-0 right-0  delay-100 duration-500 transition ${
            theme === "light" ? " text-primary bg-white" : " text-secondary"
          }`}
        >
          <div>
            <div
              onClick={() => setShowNavbarMobile(false)}
              className=" flex justify-end mr-4 my-1"
            >
              <Close fontSize="large" />
            </div>
            <NavbarMobile
              scrollToSkills={scrollToSkills}
              scrollToAbout={scrollToAbout}
              scrollToProjects={scrollToProjects}
              scrollToExperience={scrollToExperience}
              setShowNavbarMobile={setShowNavbarMobile}

            />
          </div>{" "}
        </Slide>
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
