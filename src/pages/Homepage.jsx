/* eslint-disable react/no-unescaped-entities */
import Navbar from "./components/Navbar";
import { UseThemeContext } from "../context/ThemeContext";
import wallace from "../assets/wallicestene.png";
import { Element, scroller } from "react-scroll";
import Skills from "./Skills";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "./components/Footer";
const Homepage = () => {
  const { theme } = UseThemeContext();
  const handleDownload = () => {
    const fileUrl = "/My Resume.pdf";
    fetch(fileUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "My Resume.pdf";
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading the file:", error);
      });
  };
  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToProjects = () => {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToSkills = () => {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Element
        name="about"
        className={` lg:h-screen bg-primary delay-100 duration-500 transition ${
          theme === "light"
            ? " text-neutral-600 bg-secondary"
            : " text-neutral-400"
        }`}
      >
        <div
          className={`fixed top-0 w-full flex z-40 items-center h-12 delay-100 duration-500 transition ${
            theme === "light" ? " bg-secondary" : " bg-primary "
          }`}
        >
          <Navbar
            scrollToAbout={scrollToAbout}
            scrollToProjects={scrollToProjects}
            scrollToSkills={scrollToSkills}
            scrollToContact={scrollToContact}
          />
        </div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 relative text-center lg:text-start mt-10 h-screen overflow-hidden w-11/12 mx-auto">
          <div className="left flex flex-col justify-center items-center lg:items-start bg-slate-10 font-SpaceGrotesk ">
            <Slide duration={1200} direction="left" cascade triggerOnce>
              <h1 className=" text-2xl lg:text-5xl font-bold my-2 tracking-wide">
                Hello!
              </h1>
              <div className="">
                <h2 className="text-2xl lg:text-5xl font-bold my-2 tracking-wide">
                  I am{" "}
                  <span
                    className={`  delay-100 duration-500 transition  ${
                      theme === "light" ? " text-primary" : "text-white"
                    }`}
                  >
                    Wallicestene
                  </span>
                </h2>
              </div>
              <p>
                I am a{" "}
                <span
                  className={` delay-100 duration-500 transition   ${
                    theme === "light" ? " text-primary" : "text-white"
                  }`}
                >
                  front-end/Full-Stack developer
                </span>{" "}
                with a strong background in crafting visually appealing and
                user-friendly web experiences, along with expertise in
                <span
                  className={`  delay-100 duration-500 transition  ${
                    theme === "light" ? " text-primary" : "text-white"
                  }`}
                >
                  {" "}
                  server-side and back-end logic.
                </span>{" "}
                I'm looking for a position where I can stretch myself while also{" "}
                <span
                  className={`  delay-100 duration-500 transition  ${
                    theme === "light" ? " text-primary" : "text-white"
                  }`}
                >
                  {" "}
                  adding value to website visitors.
                </span>{" "}
                I am delighted to apply{" "}
                <span
                  className={` delay-100 duration-500 transition   ${
                    theme === "light" ? " text-primary" : "text-white"
                  }`}
                >
                  my skills and experience{" "}
                </span>
                to a team and contribute to the{" "}
                <span
                  className={` delay-100 duration-500 transition   ${
                    theme === "light" ? " text-primary" : "text-white"
                  }`}
                >
                  {" "}
                  growth of a company.
                </span>
              </p>
            </Slide>
            <Fade duration={1200} delay={200} cascade triggerOnce>
              <div className="mt-4  grid place-items-center lg:flex lg:justify-start">
                <button
                  onClick={handleDownload}
                  className={`relative px-7 py-2 group w-fit delay-100 duration-100 transition`}
                >
                  <span
                    className={`absolute inset-0 w-full h-full bg-transparent border-2 transition duration-200 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0  ${
                      theme === "light" ? " border-primary" : "border-secondary"
                    }`}
                  ></span>
                  <span
                    className={`absolute inset-0 w-full h-full bg-primary delay-100 duration-500 transition  ${
                      theme === "light"
                        ? " text-secondary bg-primary"
                        : " text-primary bg-secondary"
                    }`}
                  ></span>
                  <span
                    className={`relative delay-100 duration-500 transition  ${
                      theme === "light" ? " text-secondary" : " text-primary"
                    }`}
                  >
                    View Resumé
                  </span>
                </button>
              </div>
            </Fade>
          </div>

          <div className="right bg-slate-10 grid place-items-center">
            <Fade
              duration={1200}
              delay={200}
              cascade
              triggerOnce
              className={` border border-black rounded-full overflow-hidden delay-100 duration-500 transition ${
                theme === "light" ? "border-primary" : "border-white "
              } `}
            >
              <img
                src={wallace}
                className={`h-96 rounded-full object-cover`}
              />
            </Fade>
          </div>
        </div>
      </Element>
      <Skills handleDownload={handleDownload} />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Homepage;
