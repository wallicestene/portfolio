import { motion } from "framer-motion";
import { UseThemeContext } from "../context/ThemeContext";

function AnimatedBackground() {
  const { theme } = UseThemeContext();

  // Color Palette Logic
  const colors =
    theme === "light"
      ? {
          bg: "#ffffff",
          // Light Mode: Soft watercolors (Blue, Purple, Mint)
          blob1: "#E0E7FF",
          blob2: "#F3E8FF",
          blob3: "#DCFCE7",
          opacity: 0.8,
          blend: "mix-blend-multiply", // Watercolor effect
        }
      : {
          bg: "#0a0a0a", // Deep Neutral Black (Matches your theme)
          // Dark Mode: Deep, subtle shifts (Charcoal, Deep Slate, Midnight)
          // No bright colors here, just "texture"
          blob1: "#171717", // Neutral-900
          blob2: "#1e1e1e", // Slightly lighter grey
          blob3: "#111827", // Gray-900 (Cool tone)
          opacity: 0.6,
          blend: "normal", // No screen blending = No neon glow
        };

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* 1. Base Layer */}
      <div
        className="absolute inset-0 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: colors.bg }}
      />

      {/* 2. Noise Texture (3% Opacity for subtle film grain) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Moving Blobs */}
      <div className="absolute inset-0 blur-[60px] md:blur-[100px]">
        {/* Blob 1: Top Left - Breathing & Drifting */}
        <motion.div
          className={`absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full transition-all duration-700 ${colors.blend}`}
          style={{
            backgroundColor: colors.blob1,
            opacity: colors.opacity,
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, 50, 10, 0],
            scale: [1, 1.1, 0.95, 1],
            rotate: [0, 10, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Blob 2: Right Center - Counter Movement */}
        <motion.div
          className={`absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full transition-all duration-700 ${colors.blend}`}
          style={{
            backgroundColor: colors.blob2,
            opacity: colors.opacity,
          }}
          animate={{
            x: [0, -50, 30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 1, 1],
            rotate: [0, -15, 5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Blob 3: Bottom Left - Grounding */}
        <motion.div
          className={`absolute -bottom-[20%] left-[10%] w-[60vw] h-[50vw] rounded-full transition-all duration-700 ${colors.blend}`}
          style={{
            backgroundColor: colors.blob3,
            opacity: colors.opacity,
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
            scale: [0.9, 1.1, 1, 0.9],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

export default AnimatedBackground;
