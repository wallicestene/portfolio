import React from 'react'
import { UseThemeContext } from '../../context/ThemeContext'
import { DarkMode, LightMode } from '@mui/icons-material'
import { Link } from 'react-scroll'

const NavbarMobile = ({scrollToSkills, scrollToAbout}) => {
    const {theme, toggleTheme} = UseThemeContext()
  return (
    <div>
         <nav className=' flex flex-col items-center gap-10'>
        <ul className="flex flex-col gap-10 items-center font-SpaceGrotesk tracking-wide">
          <li>
          <Link to="about" onClick={scrollToAbout} >About</Link>
          </li>
          <li>
          <Link to="skills" smooth={true} onClick={scrollToSkills} > Skills</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
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