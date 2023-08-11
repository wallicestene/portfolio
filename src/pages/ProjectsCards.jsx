import { GitHub, Visibility } from '@mui/icons-material'
import React from 'react'
import { UseThemeContext } from '../context/ThemeContext';

function ProjectsCards({image, title, stack, description, link, live}) {
    const { theme, toggleTheme } = UseThemeContext();
  return (
    <div className=''>
        <div className={`transform duration-500 hover:scale-105 w-80 delay-100 transition font-SpaceGrotesk ${
          theme === "light" ? " text-primary bg-white shadow-lg" : " text-secondary bg-neutral-950"
        }`}>
            <img src={image} alt="" className='h-48 w-full object-cover' />
           <div className='px-2'>
           <h2 className=' mt-5 text-lg'>{title}</h2>
            <p className='text-sm'>{description}</p>
            <p className=' my-2'>{stack}</p>
           </div>
            <div className=' flex items-center gap-5 my-1 px-2'>
            <a href={link} className='flex items-center gap-1 text-xs'><GitHub fontSize='small'/> <span>Code</span></a>
            <a href={live} className='flex items-center gap-1 text-xs'><Visibility fontSize='small'/> <span>View Site</span></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCards