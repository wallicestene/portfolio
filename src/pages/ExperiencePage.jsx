/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { UseThemeContext } from "../context/ThemeContext";
import { Fade, Slide } from "react-awesome-reveal";
import ExperienceCard from "./ExperienceCard";

const ExperiencePage = () => {
  const { theme, textColorStyle } = UseThemeContext();
  return (
    <Element
      name="experience"
      className={`delay-100 duration-500 transition ${
        theme === "light" ? "text-neutral-600" : "text-neutral-400"
      }`}
    >
      <div className="h-auto min-h-screen py-12 md:py-0 grid overflow-hidden lg:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
        <div className="exLeft flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk">
          <Slide duration={1200} direction="left" triggerOnce>
            <div className="mb-4">
              <span
                className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-3 ${
                  theme === "light"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                Professional Growth
              </span>

              <h2 className="text-2xl lg:text-5xl font-bold tracking-tight">
                My{" "}
                <span className="relative">
                  {textColorStyle("Experience")}
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-1 ${
                      theme === "light" ? "bg-primary" : "bg-secondary"
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </h2>
            </div>

            <p className="text-lg text-balance max-w-xl leading-relaxed">
              Throughout
              {textColorStyle(" my career, ")}
              I've had the opportunity to work in
              {textColorStyle(" dynamic environments ")}
              where I contributed to both
              {textColorStyle(" front-end and back-end ")}
              development. My
              {textColorStyle(" internships and personal projects ")} have
              helped me develop strong{" "}
              {textColorStyle(" problem-solving skills ")} and the ability to
              work
              {textColorStyle(" collaboratively ")} to achieve tangible results.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <div
                className={`p-4 rounded-lg backdrop-blur-sm ${
                  theme === "light" ? "bg-gray-50/90" : "bg-gray-900/50"
                }`}
              >
                <h4 className="font-medium mb-3">Key Achievements:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span
                      className={`inline-block mt-1.5 mr-2 w-1.5 h-1.5 rounded-full ${
                        theme === "light" ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                    <span className="text-sm sm:text-base">
                      Contributed to a <strong>10% efficiency increase</strong>{" "}
                      through system improvements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className={`inline-block mt-1.5 mr-2 w-1.5 h-1.5 rounded-full ${
                        theme === "light" ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                    <span className="text-sm sm:text-base">
                      Developed <strong>secure authentication systems</strong>{" "}
                      using JWT protocols
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className={`inline-block mt-1.5 mr-2 w-1.5 h-1.5 rounded-full ${
                        theme === "light" ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                    <span className="text-sm sm:text-base">
                      Built RESTful APIs with{" "}
                      <strong>Node.js and Express</strong> for scalable
                      applications
                    </span>
                  </li>
                  <li className="flex items-start hidden sm:flex">
                    {" "}
                    <span
                      className={`inline-block mt-1.5 mr-2 w-1.5 h-1.5 rounded-full ${
                        theme === "light" ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                    <span className="text-sm sm:text-base">
                      Enhanced <strong>UI/UX design</strong> for improved user
                      experiences
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Slide>
        </div>

        <div className="exRight grid place-items-center">
          <Fade duration={1200} delay={200} triggerOnce>
            <div className="w-full relative">
              <motion.div
                initial={{ scale: 0.95, opacity: 0.8 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`absolute inset-0 -z-10 rounded-2xl blur-sm ${
                  theme === "light" ? "bg-primary/20" : "bg-secondary/20"
                }`}
                style={{ transform: "translate(12px, 12px)" }}
              ></motion.div>

              <ExperienceCard />
            </div>
          </Fade>
        </div>
      </div>
    </Element>
  );
};

export default ExperiencePage;
