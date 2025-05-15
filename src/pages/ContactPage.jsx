/* eslint-disable react/no-unescaped-entities */

import { UseThemeContext } from "../context/ThemeContext";
import { Element } from "react-scroll";
import { useState } from "react";
import { Close, GitHub, LinkedIn, Share, Twitter } from "@mui/icons-material";
import { Fade, Slide } from "react-awesome-reveal";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSocials, setShowSocials] = useState(false);
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

    const emailBody = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const mailtoLink = `mailto:wallicestenewaweru@gmail.com?subject=Connect With Me&body=${emailBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <Element
      name="contact"
      className={` delay-100 duration-500 transition ${
        theme === "light" ? " text-neutral-600" : " text-neutral-400"
      }`}
    >
      <div className=" grid overflow-hidden lg:grid-cols-2 grid-cols-1 h-screen w-11/12 mx-auto">
        <div className="left flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk px-2">
          <Slide triggerOnce duration={1200} direction="left">
            <h2 className=" text-2xl lg:text-5xl font-bold my-5 tracking-wide">
              Want to work with me?
              {textColorStyle("let's Connect")}
            </h2>
            <p>
              I am open to
              {textColorStyle("part-time, full-time, and remote")}
              positions.
              {textColorStyle("fill out the form ")}
              if you have anything you think I'd be{" "}
              {textColorStyle("interested")} in.
            </p>
          </Slide>
        </div>
        <Slide
          triggerOnce
          duration={1200}
          direction="right"
          className="right grid place-items-center "
        >
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col w-full p-5 font-SpaceGrotesk"
          >
            <input
              placeholder="Enter You Name"
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              className={`border bg-transparent outline-none border-primary py-2 px-2  h-14 w-full delay-100 duration-500 transition ${
                theme === "light"
                  ? " border-primary text-primary"
                  : "border-secondary text-secondary"
              }`}
            />

            <br />
            <input
              placeholder="Enter You Email"
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              className={`border bg-transparent outline-none border-primary py-2 px-2  h-14 w-full delay-100 duration-500 transition ${
                theme === "light"
                  ? " border-primary text-primary"
                  : "border-secondary text-secondary"
              }`}
            />
            <br />
            <textarea
              placeholder="Enter Message"
              id="message"
              value={message}
              required
              onChange={handleMessageChange}
              className={`border bg-transparent outline-none border-primary py-2 px-2  h-28 w-full delay-100 duration-500 transition ${
                theme === "light"
                  ? " border-primary text-primary"
                  : "border-secondary text-secondary"
              }`}
            />
            <br />
            <button
              className={`relative px-7 py-2 group font-semibold font-SpaceGrotesk delay-100 duration-100 transition`}
            >
              <span
                className={`absolute inset-0 w-full h-full bg-transparent  border-2 transition duration-200 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0  ${
                  theme === "light" ? " border-primary" : "border-secondary"
                }`}
              ></span>
              <span
                className={`absolute inset-0 w-full h-full bg-primary ${
                  theme === "light"
                    ? " text-secondary bg-primary"
                    : " text-primary bg-secondary"
                }`}
              ></span>
              <span
                className={`relative tracking-wide  ${
                  theme === "light" ? " text-secondary" : " text-primary"
                }`}
              >
                CONNECT
              </span>
            </button>
          </form>
        </Slide>
        <div className=" fixed z-10 bottom-10 right-10 ">
          {showSocials && (
            <Fade
              direction="left"
              duration={500}
              cascade
              className=" flex flex-col gap-3 mb-3"
            >
              <a
                href="https://www.linkedin.com/in/wallicestene-waweru-a26744249"
                className={` grid place-items-center h-10 w-10 hover:cursor-pointer shadow-xl rounded-full text-primary ${
                  theme === "light"
                    ? " bg-primary text-secondary"
                    : "  bg-white text-primary"
                } `}
              >
                <LinkedIn />
              </a>
              <a
                href="http://github.com/wallicestene"
                className={` grid place-items-center h-10 w-10 hover:cursor-pointer shadow-xl rounded-full text-primary ${
                  theme === "light"
                    ? " bg-primary text-secondary"
                    : "  bg-white text-primary"
                } `}
              >
                <GitHub />
              </a>
              <a
                href="https://twitter.com/wallicestene?t=_BQ3dIazwHV481hk8EFILg&s=09"
                className={` grid place-items-center h-10 w-10 hover:cursor-pointer shadow-xl rounded-full text-primary ${
                  theme === "light"
                    ? " bg-primary text-secondary"
                    : "  bg-white text-primary"
                } `}
              >
                <Twitter />
              </a>
            </Fade>
          )}
          <div
            className={` grid place-items-center h-10 w-10 hover:cursor-pointer shadow-xl rounded-full text-primary ${
              theme === "light"
                ? " bg-primary text-secondary"
                : "  bg-white text-primary"
            } `}
            onClick={() => setShowSocials(!showSocials)}
          >
            {!showSocials ? <Share /> : <Close />}
          </div>
        </div>{" "}
      </div>
    </Element>
  );
}

export default ContactPage;
