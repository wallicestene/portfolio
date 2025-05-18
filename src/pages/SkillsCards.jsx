/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { UseThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const SkillsCards = ({ title, icon, proficiency = 85 }) => {
  const { theme } = UseThemeContext();

  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow:
          theme === "light"
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-lg p-4 backdrop-blur-sm ${
        theme === "light"
          ? "bg-white/80 shadow-sm border border-gray-100 text-neutral-700"
          : "bg-neutral-900/80 border border-neutral-800 text-neutral-300"
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 flex-shrink-0 p-1.5 rounded-md bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-700">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <p className="font-medium text-base">{title}</p>
        </div>
      </div>

      <div className="mt-3">
        <div
          className={`h-1.5 w-full bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden ${
            theme === "light" ? "bg-gray-200" : "bg-gray-700"
          }`}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className={`h-full rounded-full ${
              theme === "light" ? "bg-primary" : "bg-secondary"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsCards;
