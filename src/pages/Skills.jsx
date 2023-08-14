import React from 'react'
import { Element } from 'react-scroll'

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
import { UseThemeContext } from '../context/ThemeContext'
import SkillsCards from './SkillsCards'
import { Slide } from 'react-awesome-reveal'

function Skills({handleDownload}) {
    const { theme, toggleTheme } = UseThemeContext();
    return (
  
      <Element name="skills" className={` grid overflow-hidden lg:grid-cols-2 grid-cols-1 h-screen bg-primary delay-100 duration-500 transition ${
        theme === "light" ? " text-neutral-600 bg-secondary" : " text-neutral-400"
      }`}>
          <div className="left flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk px-2">
            <Slide duration={1200} direction='left' triggerOnce>
            <h2 className=" text-2xl lg:text-5xl font-bold my-5 tracking-wide">
            My Development <span  className={`  delay-100 duration-500 transition  ${theme === "light" ? " text-primary"  : "text-white"}`}>Tech Stack</span>
            </h2>
            <p>
            Throughout <span className={` delay-100 duration-500 transition   ${theme === "light" ? " text-primary"  : "text-white"}`}> my journey</span>, I've engaged with a diverse array of <span className={` delay-100 duration-500 transition   ${theme === "light" ? " text-primary"  : "text-white"}`}> tools and technologies</span>, both in personal and open-source projects. My journey has been enriched by cultivating a range of <span className={`  delay-100 duration-500 transition  ${theme === "light" ? " text-primary"  : "text-white"}`}>soft skills, complementing my professional growth.</span>
            </p>
            <div className="my-4  grid place-items-center lg:flex lg:justify-start">
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
                className={`absolute inset-0 w-full h-full bg-primary ${
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
               View Resumé
              </span>
            </button>
            </div>
            </Slide>
          </div>
          <div className= "right grid place-items-center">
              <div className=' grid  grid-cols-2 gap-5'>
              <SkillsCards title="React" icon={reactIcon}/>
              <SkillsCards title="Javascript" icon={JavascriptIcon}/>
              <SkillsCards title="Tailwind-CSS" icon={tailwindIcon}/>
              <SkillsCards title="HTML" icon={htmlIcon}/>
              <SkillsCards title="CSS" icon={cssIcon}/>
              <SkillsCards title="Git" icon={gitIcon}/>
              <SkillsCards title="Node.js" icon={nodeIcon}/>
              <SkillsCards title="Express" icon={expressIcon}/>
              <SkillsCards title="MongoDB" icon={mongoDBIcon}/>
              <SkillsCards title="Firebase" icon={firebaseIcon}/>
              </div>
          </div>
      </Element>
    )
}

export default Skills