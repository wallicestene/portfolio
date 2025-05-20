import { Favorite, KeyboardArrowUp } from "@mui/icons-material";
import { UseThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  const { theme } = UseThemeContext();
  const date = new Date();

  return (
    <footer
      className={`w-11/12 mx-auto py-6 border-t flex flex-col sm:flex-row items-center justify-between text-sm delay-100 duration-500 transition font-SpaceGrotesk ${
        theme === "light"
          ? "text-neutral-600 border-gray-200"
          : "text-neutral-400 border-neutral-800"
      }`}
    >
      <div className="mb-3 sm:mb-0 text-center sm:text-left">
        <p>&copy; {date.getFullYear()} Wallicestene. All rights reserved.</p>
      </div>

      <div className="flex items-center gap-2 text-center">
        <p>
          Made with{" "}
          <span className="text-red-600 inline-block animate-pulse">
            <Favorite fontSize="small" />
          </span>{" "}
          by Wallicestene Waweru
        </p>
      </div>

      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-10 left-4 "
      >
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer ${
            theme === "light"
              ? "bg-primary/10 text-primary hover:bg-primary/20"
              : "bg-secondary/10 text-secondary hover:bg-secondary/20"
          }`}
        >
          <KeyboardArrowUp />
        </ScrollLink>
      </motion.div>
    </footer>
  );
}

export default Footer;
