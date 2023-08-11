import React from 'react'
import { Element } from 'react-scroll'
import { UseThemeContext } from '../context/ThemeContext';
import SkillsOptions from './components/skillsOptions';
import reactIcon from "../assets/physics.png"
import htmlIcon from "../assets/html-5.png"
import JavascriptIcon from "../assets/js.png"
import gitIcon from "../assets/git.png"
import cssIcon from "../assets/css3.png"
import tailwindIcon from "../assets/tailwind-css.png"
import nodeIcon from "../assets/node-js.png"
import expressIcon from "../assets/express.png"
import mongoDBIcon from "../assets/mongodb.png"
import firebaseIcon from "../assets/firebase.png"

export default function Aboutpage({handleDownload}) {
    const { theme, toggleTheme } = UseThemeContext();
  return (

    <Element name="skills" className={` grid overflow-auto lg:grid-cols-2 grid-cols-1 h-screen bg-primary delay-100 duration-100 transition ${
        theme === "light" ? " text-primary bg-secondary" : " text-secondary"
      }`}>
        <div className="left flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk px-2">
          <h2 className=" text-2xl lg:text-5xl font-bold my-5 tracking-wide">
          I mostly use front-end technologies.
          </h2>
          <p>
          I have worked with a variety of tools over the course of my career on personal, commercial, and open-source projects. A key part of advancing my professional development and talents has also been played by my well-honed soft skills.
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
              class={`absolute inset-0 w-full h-full bg-primary ${
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
        <div className= "right grid place-items-center">
            <div className=' grid  grid-cols-2 gap-5'>
            <SkillsOptions title="React" icon={reactIcon}/>
            <SkillsOptions title="Javascript" icon={JavascriptIcon}/>
            <SkillsOptions title="Tailwind-CSS" icon={tailwindIcon}/>
            <SkillsOptions title="HTML" icon={htmlIcon}/>
            <SkillsOptions title="css" icon={cssIcon}/>
            <SkillsOptions title="Git" icon={gitIcon}/>
            <SkillsOptions title="Node.js" icon={nodeIcon}/>
            <SkillsOptions title="Express" icon={expressIcon}/>
            <SkillsOptions title="MongoDB" icon={mongoDBIcon}/>
            <SkillsOptions title="Firebase" icon={firebaseIcon}/>
            </div>
        </div>
    </Element>
  )
}
