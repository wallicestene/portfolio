/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { UseThemeContext } from "../context/ThemeContext";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

const ExperiencePage = () => {
  const { theme, textColorStyle } = UseThemeContext();

  const experiences = [
    {
      id: 1,
      role: "Freelance Software Engineer",
      company: "Upwork",
      date: "Oct 2025 – Present",
      location: "Remote / International",
      description:
        "Specializing in web scraping, automation, and full-stack development for international clients.",
      bullets: [
        "Built advanced web scraping pipelines using Playwright, Cheerio, and Crawlee for clients like Responsibly (Denmark) and Go10 (UK).",
        "Delivered production-grade browser automation tools and API-driven scrapers tailored to complex business logic.",
        "Provided full-stack development services using Next.js and PostgreSQL, ensuring reliable deployments and documentation.",
      ],
      tech: ["Playwright", "Next.js", "Node.js", "PostgreSQL"],
    },
    {
      id: 2,
      role: "ICT Intern",
      company: "Kenya Revenue Authority (KRA)",
      date: "June 2025 – Sept 2025",
      location: "Nairobi, Kenya",
      description:
        "Contributed to the development and security of national-scale pension management systems.",
      bullets: [
        "Collaborated with cross-functional teams to integrate pension management modules into the core portal.",
        "Enhanced platform security by implementing Multi-Factor Authentication (MFA) and CAPTCHA workflows.",
        "Supported the deployment of key features such as pension calculators and contribution filters.",
      ],
      tech: ["Security Protocols", "System Integration", "Web Support"],
    },
    {
      id: 3,
      role: "IT Intern",
      company: "Unity Homes",
      date: "June 2024 – Aug 2024",
      location: "Nairobi, Kenya",
      description:
        "Frontend development and backend optimization for enterprise web tools.",
      bullets: [
        "Built responsive React interfaces and integrated Node.js APIs for internal enterprise tools.",
        "Debugged and optimized backend services, improving system reliability and performance.",
        "Automated routine workflows with scripts, reducing downtime and improving maintainability.",
      ],
      tech: ["React", "Node.js", "Agile", "Automation"],
    },
  ];

  return (
    <Element
      name="experience"
      className={`min-h-screen flex items-center py-20 transition-colors duration-500 relative ${
        theme === "light" ? "text-neutral-800" : "text-neutral-200"
      }`}
    >
      <div className="w-11/12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN: Sticky Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-SpaceGrotesk"
          >
            <span
              className={`
              inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border
              ${
                theme === "light"
                  ? "bg-primary/5 border-primary/10 text-primary"
                  : "bg-secondary/5 border-secondary/10 text-secondary"
              }
            `}
            >
              Career Path
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              My <br />
              <span
                className={
                  theme === "light" ? "text-neutral-400" : "text-neutral-500"
                }
              >
                Experience.
              </span>
            </h2>

            <p className="text-lg leading-relaxed opacity-80 mb-8">
              Throughout {textColorStyle("my career")}, I've worked in dynamic
              environments ranging from
              {textColorStyle(" government agencies ")} to
              {textColorStyle(" international startups")}. My focus is always on
              delivering secure, scalable, and efficient solutions.
            </p>

            <a
              href="https://www.linkedin.com/in/wallicestene-waweru-a26744249"
              target="_blank"
              rel="noreferrer"
              className={`hidden lg:inline-flex items-center gap-2 text-sm font-semibold border-b-2 pb-0.5 transition-colors ${
                theme === "light"
                  ? "border-black hover:text-neutral-600"
                  : "border-white hover:text-neutral-300"
              }`}
            >
              Visit LinkedIn <FiArrowUpRight />
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-8 relative">
          <div
            className={`
            absolute left-0 top-2 bottom-0 w-[1px] hidden md:block
            ${theme === "light" ? "bg-neutral-200" : "bg-neutral-800"}
          `}
          ></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-12 group"
              >
                {/* Timeline Dot */}
                <div
                  className={`
                  absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full border-2 z-10 hidden md:block transition-colors duration-300
                  ${
                    theme === "light"
                      ? "bg-white border-neutral-300 group-hover:border-black group-hover:bg-black"
                      : "bg-neutral-900 border-neutral-700 group-hover:border-white group-hover:bg-white"
                  }
                `}
                ></div>

                {/* Content Card */}
                <div
                  className={`
                  p-6 rounded-2xl border transition-all duration-300
                  ${
                    theme === "light"
                      ? "bg-white/50 border-neutral-100 hover:border-neutral-200 hover:shadow-lg hover:shadow-neutral-200/40"
                      : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900"
                  }
                `}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold font-SpaceGrotesk">
                        {exp.role}
                      </h3>
                      <div
                        className={`flex items-center gap-2 text-sm mt-1 font-medium ${
                          theme === "light"
                            ? "text-neutral-500"
                            : "text-neutral-400"
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          <FiBriefcase size={14} /> {exp.company}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col sm:items-end text-xs font-medium uppercase tracking-wide gap-1 ${
                        theme === "light"
                          ? "text-neutral-400"
                          : "text-neutral-500"
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <FiCalendar size={14} /> {exp.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin size={14} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p
                    className={`mb-4 text-sm leading-relaxed ${
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }`}
                  >
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm opacity-90"
                      >
                        <span
                          className={`mt-1.5 min-w-[6px] h-[6px] rounded-full ${
                            theme === "light" ? "bg-primary" : "bg-secondary"
                          }`}
                        ></span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((item, i) => (
                      <span
                        key={i}
                        className={`
                        px-3 py-1 rounded-full text-xs font-medium border
                        ${
                          theme === "light"
                            ? "bg-neutral-50 border-neutral-200 text-neutral-600"
                            : "bg-neutral-800 border-neutral-700 text-neutral-300"
                        }
                      `}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ExperiencePage;
