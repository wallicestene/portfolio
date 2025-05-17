import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UseThemeContext } from "../context/ThemeContext";

function AnimatedBackground() {
  const { theme } = UseThemeContext();
  // Keep your existing color palette
  const [colorPalette, setColorPalette] = useState({
    // Base colors
    primary: "#1A1A1A",
    secondary: "#F2F2F2",
    // Gradient colors for light mode
    lightGradient1:
      "linear-gradient(135deg, #F2F2F2 0%, #E6E6E6 50%, #d4e6ff 100%)",
    lightGradient2:
      "linear-gradient(225deg, #e6f2ff 0%, #F2F2F2 50%, #e0e0ff 100%)",
    lightGradient3:
      "linear-gradient(315deg, #f0f8ff 0%, #ede9ff 50%, #F2F2F2 100%)",
    lightGradient4:
      "linear-gradient(45deg, #F2F2F2 0%, #f0f0ff 50%, #e8f4ff 100%)",
    // Gradient colors for dark mode
    darkGradient1:
      "linear-gradient(135deg, #1A1A1A 0%, #252525 50%, #1c2433 100%)",
    darkGradient2:
      "linear-gradient(225deg, #20242e 0%, #1A1A1A 50%, #1e1e30 100%)",
    darkGradient3:
      "linear-gradient(315deg, #151c2c 0%, #1e1c24 50%, #1A1A1A 100%)",
    darkGradient4:
      "linear-gradient(45deg, #1A1A1A 0%, #1c1c2e 50%, #1a232e 100%)",
  });

  // Keep your existing accent colors but make them slightly more vibrant
  const [accentColors, setAccentColors] = useState({
    accent1:
      theme === "light" ? "rgba(173, 216, 230, 0.5)" : "rgba(70, 90, 120, 0.5)", // light blue : navy blue
    accent2:
      theme === "light" ? "rgba(216, 191, 216, 0.5)" : "rgba(90, 70, 120, 0.5)", // lavender : purple
    accent3:
      theme === "light" ? "rgba(173, 230, 216, 0.5)" : "rgba(70, 120, 90, 0.5)", // mint : teal
  });

  // Update colors when theme changes
  useEffect(() => {
    if (theme === "light") {
      setAccentColors({
        accent1: "rgba(173, 216, 230, 0.5)", // light blue
        accent2: "rgba(216, 191, 216, 0.5)", // lavender
        accent3: "rgba(173, 230, 216, 0.5)", // mint
      });
    } else {
      setAccentColors({
        accent1: "rgba(70, 90, 120, 0.5)", // navy blue
        accent2: "rgba(90, 70, 120, 0.5)", // purple
        accent3: "rgba(70, 120, 90, 0.5)", // teal
      });
    }
  }, [theme]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base layer with gradient color shifts - ENHANCED SPEED */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background:
            theme === "light"
              ? [
                  colorPalette.lightGradient1,
                  colorPalette.lightGradient2,
                  colorPalette.lightGradient3,
                  colorPalette.lightGradient4,
                  colorPalette.lightGradient1,
                ]
              : [
                  colorPalette.darkGradient1,
                  colorPalette.darkGradient2,
                  colorPalette.darkGradient3,
                  colorPalette.darkGradient4,
                  colorPalette.darkGradient1,
                ],
        }}
        transition={{
          duration: 10, // Faster animation (was 20)
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{ backgroundSize: "300% 300%" }} // Smaller background size for more visible movement
      />

      {/* Keep your existing blob animations but enhance them */}
      <motion.div
        className="absolute rounded-full opacity-40 blur-2xl"
        style={{
          background: accentColors.accent1,
          width: "45vw",
          height: "45vw",
          top: "-10%",
          left: "25%",
        }}
        animate={{
          x: ["-15%", "15%", "-10%", "20%", "-15%"],
          y: ["10%", "-10%", "20%", "0%", "10%"],
        }}
        transition={{
          duration: 12, // Faster animation (was 20)
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute rounded-full opacity-30 blur-2xl"
        style={{
          background: accentColors.accent2,
          width: "40vw",
          height: "40vw",
          bottom: "5%",
          right: "0%",
        }}
        animate={{
          x: ["15%", "-10%", "20%", "-15%", "15%"],
          y: ["-10%", "15%", "0%", "10%", "-10%"],
        }}
        transition={{
          duration: 10, // Faster animation (was 18)
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute rounded-full opacity-30 blur-xl"
        style={{
          background: accentColors.accent3,
          width: "25vw",
          height: "25vw",
          top: "40%",
          right: "20%",
        }}
        animate={{
          x: ["-20%", "20%", "-5%", "15%", "-20%"],
          y: ["15%", "-15%", "5%", "-20%", "15%"],
        }}
        transition={{
          duration: 8, // Faster animation (was 15)
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default AnimatedBackground;
