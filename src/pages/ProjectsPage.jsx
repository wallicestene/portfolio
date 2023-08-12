import React from 'react'
import { Element } from 'react-scroll'
import { UseThemeContext } from '../context/ThemeContext';
import ProjectsCards from './ProjectsCards';
import EShop from "../assets/projectImages/E-shop.png"
import Recipe from "../assets/projectImages/Recipe.png"
import Space from "../assets/projectImages/Space.png"
import Password from "../assets/projectImages/Password.png"
import Countries from "../assets/projectImages/Countries.png"
import Todo from "../assets/projectImages/TO-DO.png"
import SLack from "../assets/projectImages/Slack.png"
function ProjectsPage() {
    const { theme, toggleTheme } = UseThemeContext();
  return (
    <Element name='projects' className={` grid overflow-hidden lg:grid-cols-2 grid-cols-1 h-screen bg-primary delay-100 duration-500 transition ${
      theme === "light" ? " text-neutral-600 bg-secondary" : " text-neutral-400"
    }`}>
        <div className="left flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk px-2">
        <h2 className=" text-2xl lg:text-5xl font-bold my-5 tracking-wide">
        I enjoy working on fun <span className={` delay-100 duration-500 transition   ${theme === "light" ? " text-primary"  : "text-white"}`}> projects.</span>
            </h2>
            <p>
            During my free moments, I take pleasure in both <span className={` delay-100 duration-500 transition   ${theme === "light" ? " text-primary"  : "text-white"}`}>exploring and constructing </span> endeavors that personally captivate me or hold practical value. You can discover a selection of these undertakings on my <span className={` delay-100 duration-500 transition   ${theme === "light" ? " text-primary"  : "text-white"}`}>GitHub profile,</span> alongside a variety of other miscellaneous creations that <span className={` delay-100 duration-500 transition   ${theme === "light" ? " text-primary"  : "text-white"}`}>I've dedicated my efforts to.</span>
            </p>
            <div className="my-4  grid place-items-center lg:flex lg:justify-start">
              <a href='https://github.com/wallicestene'
              className={`relative px-7 py-2  group w-fit delay-100 duration-100 transition`}
            >
              <span
                className={`absolute inset-0 w-full h-full bg-transparent border-2 transition duration-200 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0  ${
                  theme === "light" ? " border-primary" : "border-secondary"
                }`}
              ></span>
              <span
                className={`absolute  delay-100 duration-500 transition  inset-0 w-full h-full bg-primary ${
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
                View Github
              </span>
            </a>
            </div>
        </div>
        <div className="projectRight lg:mt-10 grid grid-cols-1 gap-7 place-items-center h-11/12 overflow-auto py-2">
            <ProjectsCards image={EShop} title="E-shop" stack="React + Node.js + Express.js + MongoDB + Tailwind" description="Fashon, Accesories and clothing E-commerce Store." link="https://github.com/wallicestene/Ecommerce-shop.git" live="https://my-e-commerce-shop.netlify.app/?#/"/>
            <ProjectsCards image={Recipe} title="Recipe Realm" stack="Vite+React + Tailwind + Firebase" description="Advance Recipe finder app with hundreds of recipes to choose from." link="https://github.com/wallicestene/Recipe-app.git" live="https://wallicestene.github.io/Recipe-app/#/" />
            <ProjectsCards image={Space} title="Space Tourism" stack="Vite+React + CSS + API" description="Space Tourism multi-page website." link="https://github.com/wallicestene/Space-Tourism.git" live="https://wallicestene.github.io/Space-Tourism/#/" />
            <ProjectsCards image={Countries} title="REST Countries" stack="React + CSS + REST API" description="REST Countries API with color theme switcher." link="https://github.com/wallicestene/the-countries.git" live="https://wallicestene.github.io/the-countries/#/" />
            <ProjectsCards image={Password} title="TO-DO list" stack="React + CSS " description="A simple TO-DO list app." link="https://github.com/wallicestene/To-do-App.git" live="https://wallicestene.github.io/To-do-App/" />
            <ProjectsCards image={SLack} title="My-Slack" stack="React + CSS + Firebase + Redux " description="A simple Slack Clone App." link="https://github.com/wallicestene/Slack-clone.git" live="https://slack-clone-a1504.web.app/" />
        </div>
    </Element>
  )
}

export default ProjectsPage