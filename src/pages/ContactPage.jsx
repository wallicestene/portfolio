/* eslint-disable react/no-unescaped-entities */
import { UseThemeContext } from "../context/ThemeContext";
import { Element } from "react-scroll";
import { useState } from "react";
import {
  Close,
  GitHub,
  LinkedIn,
  Share,
  Twitter,
  Send,
} from "@mui/icons-material";
import { Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSocials, setShowSocials] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const { theme, textColorStyle } = UseThemeContext();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitting(true);

    setTimeout(() => {
      const emailBody = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
      const mailtoLink = `mailto:wallicestenewaweru@gmail.com?subject=Connect With Me&body=${emailBody}`;

      window.location.href = mailtoLink;
      setFormSubmitting(false);
    }, 800);
  };

  return (
    <Element
      name="contact"
      className={`delay-100 duration-500 transition ${
        theme === "light" ? "text-neutral-600" : "text-neutral-400"
      }`}
    >
      <div className="h-screen grid overflow-hidden lg:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
        <div className="left flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk px-2">
          <Slide duration={1200} direction="left" triggerOnce>
            <div className="mb-4">
              <span
                className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-3 ${
                  theme === "light"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                Get in Touch
              </span>

              <h2 className="text-2xl lg:text-5xl font-bold tracking-tight">
                Want to work with me?{" "}
                <span className="relative">
                  {textColorStyle("Let's Connect")}
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
              I am open to
              {textColorStyle(" part-time, full-time, and remote ")}
              positions.
              {textColorStyle(" Fill out the form ")}
              if you have anything you think I'd be{" "}
              {textColorStyle(" interested ")} in.
            </p>

            <div className="mt-8 hidden lg:block">
              <div
                className={`p-4 rounded-lg ${
                  theme === "light" ? "bg-gray-50/80" : "bg-gray-900/50"
                }`}
              >
                <h4 className="font-medium mb-3">Contact Details:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                        theme === "light" ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={
                          theme === "light" ? "text-primary" : "text-secondary"
                        }
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base">
                      +254 7948 487 17
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                        theme === "light" ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={
                          theme === "light" ? "text-primary" : "text-secondary"
                        }
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base">
                      wallicestenewaweru@gmail.com
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                        theme === "light" ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={
                          theme === "light" ? "text-primary" : "text-secondary"
                        }
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base">Nairobi, Kenya</span>
                  </li>
                </ul>
              </div>
            </div>
          </Slide>
        </div>

        <div className="right grid place-items-center">
          <Slide
            duration={1200}
            direction="right"
            triggerOnce
            className="w-full"
          >
            <div
              className={`w-full ${
                theme === "light" ? "bg-white/50" : "bg-neutral-900/50"
              } backdrop-blur-sm rounded-lg p-6 shadow-sm border ${
                theme === "light" ? "border-gray-100" : "border-neutral-800"
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full font-SpaceGrotesk"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-1 ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    placeholder="Enter Your Name"
                    id="name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    required
                    className={`bg-transparent outline-none border py-2.5 px-4 rounded-md w-full transition-colors duration-200 ${
                      theme === "light"
                        ? "border-gray-300 focus:border-primary text-neutral-700 placeholder:text-gray-400"
                        : "border-gray-700 focus:border-secondary text-neutral-300 placeholder:text-gray-600"
                    }`}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-1 ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    placeholder="Enter Your Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className={`bg-transparent outline-none border py-2.5 px-4 rounded-md w-full transition-colors duration-200 ${
                      theme === "light"
                        ? "border-gray-300 focus:border-primary text-neutral-700 placeholder:text-gray-400"
                        : "border-gray-700 focus:border-secondary text-neutral-300 placeholder:text-gray-600"
                    }`}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-1 ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    placeholder="Enter Your Message"
                    id="message"
                    value={message}
                    required
                    onChange={handleMessageChange}
                    rows={4}
                    className={`bg-transparent outline-none border py-2.5 px-4 rounded-md w-full transition-colors duration-200 ${
                      theme === "light"
                        ? "border-gray-300 focus:border-primary text-neutral-700 placeholder:text-gray-400"
                        : "border-gray-700 focus:border-secondary text-neutral-300 placeholder:text-gray-600"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className={`relative overflow-hidden px-7 py-3 font-medium rounded-lg group transition-all duration-300 disabled:opacity-70 ${
                    theme === "light"
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-secondary text-primary hover:bg-secondary/90"
                  }`}
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
                  <span className="flex items-center justify-center gap-2">
                    {formSubmitting ? (
                      <>
                        Sending<span className="animate-pulse">...</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send fontSize="small" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </Slide>
        </div>

        {/* Social Media Float */}
        <div className="fixed z-10 bottom-10 right-10">
          {showSocials && (
            <Fade
              direction="left"
              duration={500}
              cascade
              className="flex flex-col gap-3 mb-3"
            >
              <motion.a
                href="https://www.linkedin.com/in/wallicestene-waweru-a26744249"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className={`grid place-items-center h-10 w-10 hover:cursor-pointer shadow-lg rounded-full ${
                  theme === "light"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                <LinkedIn fontSize="small" />
              </motion.a>
              <motion.a
                href="http://github.com/wallicestene"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className={`grid place-items-center h-10 w-10 hover:cursor-pointer shadow-lg rounded-full ${
                  theme === "light"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                <GitHub fontSize="small" />
              </motion.a>
              <motion.a
                href="https://twitter.com/wallicestene?t=_BQ3dIazwHV481hk8EFILg&s=09"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className={`grid place-items-center h-10 w-10 hover:cursor-pointer shadow-lg rounded-full ${
                  theme === "light"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                <Twitter fontSize="small" />
              </motion.a>
            </Fade>
          )}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`grid place-items-center h-10 w-10 hover:cursor-pointer shadow-lg rounded-full ${
              theme === "light"
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}
            onClick={() => setShowSocials(!showSocials)}
          >
            {!showSocials ? <Share /> : <Close />}
          </motion.div>
        </div>
      </div>
    </Element>
  );
}

export default ContactPage;
