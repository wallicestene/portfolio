import React from "react";
import { UseThemeContext } from "../../context/ThemeContext";
import { useEffect } from "react";
import { Favorite } from "@mui/icons-material";

function Footer() {
  const { theme, toggleTheme } = UseThemeContext();
  const date = new Date();
  return (
    <div
      className={`overflow-hidden py-3 flex flex-col items-center justify-end text-sm bg-primary delay-100 duration-500 transition ${
        theme === "light"
          ? " text-neutral-600 bg-secondary"
          : " text-neutral-400"
      }`}
    >
      <div className="">
        <p>&copy; {date.getFullYear()} Wallicestene All rights reserved</p>
        <p>
          Made with{" "}
          <span className=" text-red-600">
            <Favorite fontSize="small" />
          </span>{" "}
          by{" Wallicestene Waweru"}
        </p>
      </div>
    </div>
  );
}

export default Footer;
