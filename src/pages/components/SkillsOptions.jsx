import React from 'react'
import { UseThemeContext } from '../../context/ThemeContext';

const SkillsOptions = ({title, icon}) => {
    const { theme, toggleTheme } = UseThemeContext();
  return (
    <div className={` py-9 flex items-center px-10 gap-2 delay-100 duration-100 transition  ${
        theme === "light" ? " text-primary bg-white shadow-lg" : " text-secondary bg-neutral-900"
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

export default SkillsOptions