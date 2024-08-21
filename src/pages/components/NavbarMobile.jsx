/* eslint-disable react/prop-types */
import { UseThemeContext } from "../../context/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Link } from "react-scroll";
const NavbarMobile = ({
  scrollToSkills,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
  setShowNavbarMobile,
  scrollToExperience
}) => {
  const { theme, toggleTheme } = UseThemeContext();
  return (
    <div>
      <nav className=" flex flex-col items-center gap-20">
        <ul className="flex flex-col gap-10 items-center font-SpaceGrotesk tracking-wide text-lg">
          <li className=" cursor-pointer">
            <Link
              to="about"
              smooth={true}
              onClick={() => {
                scrollToAbout, setShowNavbarMobile(false);
              }}
            >
              About
            </Link>
          </li>
          <li className=" cursor-pointer">
            <Link
              to="skills"
              smooth={true}
              onClick={() => {
                scrollToSkills, setShowNavbarMobile(false);
              }}
            >
              {" "}
              Skills
            </Link>
          </li>
          <li className=" cursor-pointer">
            <Link to="experience" smooth={true} onClick={scrollToExperience}>
              {" "}
              Experience
            </Link>
          </li>
          <li className=" cursor-pointer">
            <Link
              to="projects"
              smooth={true}
              onClick={() => {
                scrollToProjects, setShowNavbarMobile(false);
              }}
            >
              {" "}
              Projects
            </Link>
          </li>
          <li className=" cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              onClick={() => {
                scrollToContact, setShowNavbarMobile(false);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          onClick={toggleTheme}
          className=" bg-white text-primary h-10 w-10 grid place-items-center rounded-full cursor-pointer shadow-md"
        >
          {theme === "light" ? <DarkMode /> : <LightMode />}
        </div>
      </nav>
    </div>
  );
};

export default NavbarMobile;
