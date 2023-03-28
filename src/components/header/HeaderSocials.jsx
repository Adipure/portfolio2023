import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaGithubAlt } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <a href='https://www.linkedin.com/in/chanwoo-hwang-458b951a1/' target="_blank"><AiOutlineLinkedin/></a>
    <a href='https://github.com/Adipure' target="_blank"><FaGithubAlt/></a>
    <a href='https://www.instagram.com/codingalldaynight/' target="_blank"><ImInstagram/></a>
    </div>
  )
}
  
export default HeaderSocials