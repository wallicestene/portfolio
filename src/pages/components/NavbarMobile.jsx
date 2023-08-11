import React from 'react'
import { UseThemeContext } from '../../context/ThemeContext'
import { DarkMode, LightMode } from '@mui/icons-material'

const NavbarMobile = () => {
    const {theme, toggleTheme} = UseThemeContext()
  return (
    <div>
         <nav className=' flex flex-col items-center gap-10'>
        <ul className="flex flex-col gap-10 items-center font-SpaceGrotesk tracking-wide">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div onClick={toggleTheme} className=' bg-white text-primary h-10 w-10 grid place-items-center rounded-full cursor-pointer shadow-md'>
            {
                theme === "light"? <DarkMode/> : <LightMode/>
            }
        </div>
      </nav>
    </div>
  )
}

export default NavbarMobile