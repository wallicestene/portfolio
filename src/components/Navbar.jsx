/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Close, Menu, DarkMode, LightMode } from "@mui/icons-material";
import { UseThemeContext } from "../context/ThemeContext";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({
  scrollToSkills,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
  scrollToExperience,
}) => {
  const [showMobile, setShowMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = UseThemeContext();

  // Detect scroll to adjust navbar appearance
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about", action: scrollToAbout },
    { name: "Experience", to: "experience", action: scrollToExperience },
    { name: "Projects", to: "projects", action: scrollToProjects },
    { name: "Skills", to: "skills", action: scrollToSkills },
    { name: "Contact", to: "contact", action: scrollToContact },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4`}
      >
        <div
          className={`
            flex items-center justify-between px-6 py-3 rounded-full 
            backdrop-blur-md border transition-all duration-300
            ${scrolled ? "shadow-lg scale-[1.02]" : "shadow-sm"}
            ${
              theme === "light"
                ? "bg-white/80 border-white/40 text-neutral-800"
                : "bg-neutral-900/80 border-neutral-800/50 text-neutral-200"
            }
            w-full max-w-3xl
          `}
        >
          {/* Logo */}
          <div className="font-SpaceGrotesk font-bold text-lg tracking-tight cursor-pointer">
            <Link to="about" smooth={true} onClick={scrollToAbout}>
              Wallicestene.
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium font-SpaceGrotesk">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  onClick={link.action}
                  className="cursor-pointer hover:text-primary transition-colors relative group"
                >
                  {link.name}
                
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${theme === 'light' ? 'bg-black' : 'bg-white'}`}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === "light"
                  ? "hover:bg-gray-100 text-neutral-600"
                  : "hover:bg-neutral-800 text-neutral-300"
              }`}
            >
              {theme === "light" ? <DarkMode fontSize="small" /> : <LightMode fontSize="small" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1"
              onClick={() => setShowMobile(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </motion.header>

    {/* Mobile */} 
      <AnimatePresence>
        {showMobile && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed inset-0 z-[60] flex flex-col items-center justify-center font-SpaceGrotesk ${
              theme === "light" ? "bg-white" : "bg-neutral-950"
            }`}
          >
            <button
              onClick={() => setShowMobile(false)}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-black/5"
            >
              <Close fontSize="large" />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    onClick={() => {
                      link.action();
                      setShowMobile(false);
                    }}
                    className="text-3xl font-bold cursor-pointer hover:opacity-50 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;