import React from 'react'
import './nav.css'
import { BiHome } from 'react-icons/bi'
import { FcAbout } from 'react-icons/fc'
import { MdOutlineHistoryEdu } from 'react-icons/md'
import { RiMessage2Fill } from 'react-icons/ri'
import { FcBriefcase }  from 'react-icons/fc'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcAbout /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineHistoryEdu /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FcBriefcase /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Fill /></a>
    </nav>
  )
}

export default Nav