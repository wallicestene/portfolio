import React, { useState } from "react";
import NavbarMobile from "./NavbarMobile";
import { Close, Menu } from "@mui/icons-material";
import { UseThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [showNavbarMobile, setShowNavbarMobile] = useState(false);
  const {theme, toggleTheme} = UseThemeContext()
  return (
    <header className=" w-11/12 mx-auto relative">
      <nav className=" flex justify-between">
        <div className=" font-SpaceGrotesk font-extrabold tracking-wider text-2xl">
          Wallicestene
        </div>
        <ul className="hidden lg:flex gap-10 font-SpaceGrotesk tracking-wide">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div
          className=" lg:hidden"
          onClick={() => setShowNavbarMobile(true)}
        >
          <Menu />
        </div>
      </nav>

      {/* Mobile menu */}

      {showNavbarMobile && (
        <div className={` lg:hidden fixed h-screen w-1/2 text-white bg-primary text top-0 right-0  ${theme === "light" && " text-primary bg-secondary"}`}>
            
            <div onClick={() => setShowNavbarMobile(false)} className=" flex justify-end mr-4 my-1">
               <Close/> 
            </div>
          <NavbarMobile />
        </div>
      )}
    </header>
  );
};

export default Navbar;
