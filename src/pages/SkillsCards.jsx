import React from 'react'
import { UseThemeContext } from '../context/ThemeContext';

const SkillsCards = ({title, icon}) => {
    const { theme, toggleTheme } = UseThemeContext();
    return (
      <div className={` transform duration-500 hover:scale-110 lg:py-9 py-5 flex items-center lg:px-10 px-5 gap-2 delay-100 transition font-SpaceGrotesk ${
          theme === "light" ? " text-primary bg-white shadow-lg" : " text-secondary bg-neutral-950"
        }`}>
          <div className=' h-6'>
          <img src={icon} alt="" className=' h-full' />
          </div>
          <div>
              <p>{title}</p>
          </div>
      </div>
    )
}

export default SkillsCards