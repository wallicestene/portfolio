import React from 'react'
import { Element } from 'react-scroll'
import { UseThemeContext } from '../context/ThemeContext';
import ProjectsCards from './ProjectsCards';

function ProjectsPage() {
    const { theme, toggleTheme } = UseThemeContext();
  return (
    <Element name='projects' className={` grid overflow-hidden lg:grid-cols-2 grid-cols-1 h-screen bg-primary delay-100 duration-100 transition ${
        theme === "light" ? " text-primary bg-secondary" : " text-secondary"
      }`}>
        <div className="left flex flex-col justify-center text-center lg:text-start font-SpaceGrotesk px-2">
        <h2 className=" text-2xl lg:text-5xl font-bold my-5 tracking-wide">
        I enjoy working on fun projects.
            </h2>
            <p>
            During my free moments, I take pleasure in both exploring and constructing endeavors that personally captivate me or hold practical value. You can discover a selection of these undertakings on my GitHub profile, alongside a variety of other miscellaneous creations that I've dedicated my efforts to.
            </p>
            <div className="my-4  grid place-items-center lg:flex lg:justify-start">
              <a href='https://github.com/wallicestene'
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
                View Github
              </span>
            </a>
            <h1 className="text-center lg:hidden mt-5 text-2xl font-bold ">Projects</h1>
            </div>
        </div>
        <div className="right mt-10 grid grid-cols-1 gap-5 place-items-center h-11/12 overflow-auto py-2">
            <ProjectsCards image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" title="E-shop" stack="Next.js + Tailwind + pexels API" description="Get all clothing in one place" link="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" live="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
            <ProjectsCards image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" title="E-shop" stack="Next.js + Tailwind + pexels API" description="Get all clothing in one place" link="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" live="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
            <ProjectsCards image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" title="E-shop" stack="Next.js + Tailwind + pexels API" description="Get all clothing in one place" link="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" live="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
            <ProjectsCards image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" title="E-shop" stack="Next.js + Tailwind + pexels API" description="Get all clothing in one place" link="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" live="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
        </div>
    </Element>
  )
}

export default ProjectsPage