import React from "react";
import { UseThemeContext } from "../context/ThemeContext";
import { Element } from "react-scroll";
import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { theme, toggleTheme } = UseThemeContext();

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
    <Element name="contact" className={` grid overflow-hidden lg:grid-cols-2 grid-cols-1 h-screen bg-primary delay-100 duration-500 transition ${
        theme === "light" ? " text-neutral-600 bg-secondary" : " text-neutral-400"
      }`}>
      <div className="left flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk px-2">
      <h2 className=" text-2xl lg:text-5xl font-bold my-5 tracking-wide">
      Want to work with me?<span className={` delay-100 duration-500 transition   ${theme === "light" ? " text-primary"  : "text-white"}`}> let's Connect</span>
            </h2>
            <p>
            I am open to <span className={` delay-100 duration-500 transition   ${theme === "light" ? " text-primary"  : "text-white"}`}> remote, </span> full-time, part-time roles. If you've got anything you think I'd be interested in then <span className={` delay-100 duration-500 transition   ${theme === "light" ? " text-primary"  : "text-white"}`}> fill the form.</span> 
            </p>
      </div>
      <div className="right grid place-items-center ">
        <form onSubmit={handleSubmit} className=" flex flex-col w-full p-5">
          <input
            placeholder="Enter You Name"
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            className={`border-2 bg-transparent outline-none border-primary py-2 px-2  h-14 w-full delay-100 duration-500 transition ${theme === "light" ? " border-primary text-primary" : "border-secondary text-secondary"}`}
          />

          <br />
          <input
            placeholder="Enter You Email"
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            className={`border-2 bg-transparent outline-none border-primary py-2 px-2  h-14 w-full delay-100 duration-500 transition ${theme === "light" ? " border-primary text-primary" : "border-secondary text-secondary"}`}
          />
          <br />
          <textarea
            placeholder="Enter Message"
            id="message"
            value={message}
            required
            onChange={handleMessageChange}
            className={`border-2 bg-transparent outline-none border-primary py-2 px-2  h-28 w-full delay-100 duration-500 transition ${theme === "light" ? " border-primary text-primary"  : "border-secondary text-secondary"}`}
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
      </div>
    </Element>
  );
}

export default ContactPage;
