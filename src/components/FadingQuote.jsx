import { motion, useScroll, useTransform } from "framer-motion";
import { UseThemeContext } from "../context/ThemeContext";

const FadingQuote = () => {
  const { scrollYProgress } = useScroll();
  const { theme } = UseThemeContext();

  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, -30]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-16 z-20 inset-x-0 flex justify-center pointer-events-none"
    >
      <div
        className={`max-w-md p-4  rounded-lg backdrop-blur-sm ${
          theme === "light"
            ? "bg-white/30 text-gray-800"
            : "bg-gray-900/30 text-gray-200"
        }`}
      >
        <p className="text-center italic">
          &ldquo;I believe in crafting elegant solutions to complex problems, creating
          experiences that are both beautiful and functional.&ldquo;
        </p>
      </div>
    </motion.div>
  );
};
export default FadingQuote;
