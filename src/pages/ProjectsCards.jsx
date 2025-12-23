/* eslint-disable react/prop-types */
import { UseThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectsCards({
  image,
  title,
  stack,
  description,
  link,
  live,
  category,
}) {
  const { theme } = UseThemeContext();

  const stackArray = stack.split("+").map((s) => s.trim());

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`
        group relative rounded-2xl overflow-hidden border transition-all duration-300
        ${
          theme === "light"
            ? "bg-white border-neutral-100 hover:shadow-xl hover:shadow-neutral-200/50"
            : "bg-neutral-900 border-neutral-800 hover:shadow-xl hover:shadow-black/50"
        }
      `}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 md:h-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

          <div className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full backdrop-blur-md bg-black/50 border border-white/10 text-white shadow-sm">
            {category === "fullstack" ? "Full Stack" : category}
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-bold font-SpaceGrotesk">{title}</h3>
            </div>

            <p
              className={`text-sm leading-relaxed mb-6 line-clamp-3 ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              {description}
            </p>

            {/* Tech Stack gs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {stackArray.map((tech, index) => (
                <span
                  key={index}
                  className={`
                    text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md border
                    ${
                      theme === "light"
                        ? "bg-neutral-50 border-neutral-200 text-neutral-500"
                        : "bg-neutral-800 border-neutral-700 text-neutral-400"
                    }
                  `}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5 mt-auto pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-800">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={`
                flex items-center gap-2 text-sm font-medium transition-colors group/link
                ${
                  theme === "light"
                    ? "text-neutral-600 hover:text-black"
                    : "text-neutral-400 hover:text-white"
                }
              `}
            >
              <FiGithub size={16} />
              <span className="group-hover/link:underline decoration-1 underline-offset-4">
                Code
              </span>
            </a>

            {live !== "#" && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className={`
                  flex items-center gap-2 text-sm font-medium transition-colors group/link
                  ${
                    theme === "light"
                      ? "text-neutral-600 hover:text-black"
                      : "text-neutral-400 hover:text-white"
                  }
                `}
              >
                <FiExternalLink size={16} />
                <span className="group-hover/link:underline decoration-1 underline-offset-4">
                  Live Demo
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsCards;
