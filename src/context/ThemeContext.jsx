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
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const UseThemeContext = () => {
  return useContext(ThemeContext);
};
