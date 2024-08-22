/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeDataLayer = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark";
    });
  };
  const textColorStyle = (text) => {
    const style = `delay-100 duration-500 transition  ${
      theme === "light" ? " text-primary" : "text-white"
    }`;

    return <span className={style}>{" "}{text}{" "}</span>;
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, textColorStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const UseThemeContext = () => {
  return useContext(ThemeContext);
};
