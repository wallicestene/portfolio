/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GitHub, Visibility } from "@mui/icons-material";
import React from "react";
import { UseThemeContext } from "../context/ThemeContext";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

function ProjectsCards({ image, title, stack, description, link, live, category }) {
  const { theme } = UseThemeContext();
  
  // Function to determine project type based on category or stack
  const getProjectType = () => {
    if (category) {
      if (category === "In Development") return "In Development";
      if (category === "fullstack") return "Full Stack";
      if (category === "frontend") return "Frontend";
    }
    
    // Fallback to stack analysis if no category
    const hasBackend = stack.includes("Node.js") || 
                      stack.includes("Django") || 
                      stack.includes("Express") ||
                      stack.includes("Python") ||
                      stack.includes("MongoDB") ||
                      stack.includes("PostgreSQL");
    
    return hasBackend ? "Full Stack" : "Frontend";
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: theme === "light" 
          ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
          : "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
      }}
      className={`rounded-lg overflow-hidden w-80 sm:w-96 font-SpaceGrotesk ${
        theme === "light"
          ? "bg-white text-neutral-600 border border-gray-100"
          : "bg-neutral-900 text-neutral-300 border border-neutral-800"
      }`}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" 
          loading="lazy"
        />
        <div className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full ${
          getProjectType() === "In Development"
            ? theme === "light" 
              ? "bg-orange-500/90 text-white" 
              : "bg-orange-400/90 text-neutral-900"
            : getProjectType() === "Full Stack"
            ? theme === "light" 
              ? "bg-primary/90 text-white" 
              : "bg-secondary/90 text-neutral-900"
            : theme === "light"
            ? "bg-green-500/90 text-white"
            : "bg-green-400/90 text-neutral-900"
        }`}>
          {getProjectType()}
        </div>
      </div>
      
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className={`text-sm mb-3 ${
          theme === "light" ? "text-gray-600" : "text-gray-400"
        }`}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.split("+").map((tech, index) => (
            <span 
              key={index}
              className={`text-xs px-2 py-1 rounded-md ${
                theme === "light" 
                  ? "bg-gray-100 text-gray-700" 
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {tech.trim()}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-1.5 text-sm py-2 px-3 rounded-lg transition-colors ${
              theme === "light"
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <GitHub fontSize="small" /> Code
          </a>
          
          {live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer" 
              className={`flex items-center gap-1.5 text-sm py-2 px-3 rounded-lg ${
                theme === "light"
                  ? "bg-primary/10 text-primary hover:bg-primary/20"
                  : "bg-secondary/10 text-secondary hover:bg-secondary/20"
              }`}
            >
              <Visibility fontSize="small" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsCards;
