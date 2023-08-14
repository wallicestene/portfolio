import { GitHub, Visibility } from '@mui/icons-material'
import React from 'react'
import { UseThemeContext } from '../context/ThemeContext';
import { Fade } from 'react-awesome-reveal';

function ProjectsCards({image, title, stack, description, link, live}) {
    const { theme, toggleTheme } = UseThemeContext();
  return (
    < Fade triggerOnce cascade duration={1500}  direction="top" delay={200}>
        <div className={` shadow-lg rounded-t overflow-hidden transform  duration-500 hover:scale-105 w-80 delay-100 transition font-SpaceGrotesk ${
          theme === "light" ? " text-primary bg-white" : " text-white bg-neutral-950"
        }`}>
            <img src={image} alt="" className='h-52 w-full object-cover' />
           <div className='px-2 pt-5'>
           <h2 className='  text-lg font-semibold tracking-wide'>{title}</h2>
            <p className={`text-sm transition duration-500 delay-100 ${
          theme === "light" ? " text-gray-500 bg-white" : " text-gray-400 bg-neutral-950"
        }`}>{description}</p>
            <p className=' my-1'>{stack}</p>
           </div>
            <div className=' flex items-center gap-5 py-3 px-2'>
            <a href={link} className={`flex items-center gap-1 text-xs`}><GitHub fontSize='small'/> <span className={`delay-100 transition duration-500 ${
          theme === "light" ? " text-gray-500 bg-white" : " text-gray-400 bg-neutral-950"
        }`}>Code</span></a>
            <a href={live} className='flex items-center gap-1 text-xs'><Visibility fontSize='small'/> <span className={`delay-100 transition duration-500 ${
          theme === "light" ? " text-gray-500 bg-white" : " text-gray-400 bg-neutral-950"
        }`}>View Site</span></a>
            </div>
        </div>
    </Fade>
  )
}

export default ProjectsCards