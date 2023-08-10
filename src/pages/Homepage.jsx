import React from "react";
import Navbar from "./components/Navbar";
import { UseThemeContext } from "../context/ThemeContext";
import wallace from "../assets/wallicestene.png";
const Homepage = () => {
  const { theme, toggleTheme } = UseThemeContext();
  const handleDownload = () => {
    const fileUrl = "/wallicestene'sResume.pdf";
    fetch(fileUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "wallicestene'sResume.pdf";
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading the file:", error);
      });
  };
  return (
    <div
      className={` h-screen bg-primary delay-100 duration-100 transition ${
        theme === "light" ? " text-primary bg-secondary" : " text-secondary"
      }`}
    >
      <div>
        <Navbar />
      </div>
      <div className=" grid lg:grid-cols-2 relative text-center lg:text-start mt-5">
        <div className="left flex flex-col justify-center font-SpaceGrotesk px-2">
          <h1 className=" text-2xl lg:text-5xl font-bold my-2 tracking-wide">
            Hello!
          </h1>
          <h2 className=" text-2xl lg:text-5xl font-bold my-5 tracking-wide">
            I am Wallicestene
          </h2>
          <p>
            I am a frontend developer. I have a solid background in developing
            visually appealing and user-friendly web experiences. I'm looking
            for a position where I can stretch myself while also adding value to
            website visitors. I am delighted to apply my skills and experience
            to a team and contribute to the growth of a company.
          </p>
          <div className="my-4  grid place-items-center lg:flex lg:justify-start">
            <button
            onClick={handleDownload}
            className={`relative px-5 py-2 font-medium group w-fit delay-100 duration-100 transition`}
          >
            <span
              className={`absolute inset-0 w-full h-full bg-transparent border-2 transition duration-200 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0  ${
                theme === "light" ? " border-primary" : "border-secondary"
              }`}
            ></span>
            <span
              class={`absolute inset-0 w-full h-full bg-primary border-2 border-black  ${
                theme === "light"
                  ? " text-secondary bg-primary"
                  : " text-primary bg-secondary"
              }`}
            ></span>
            <span
              className={`relative  ${
                theme === "light" ? " text-secondary" : " text-primary"
              }`}
            >
              View Resume
            </span>
          </button>
          </div>
          
        </div>
        <div className="right hidden bg-slate-10 lg:grid place-items-center">
          <img src={wallace} className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
