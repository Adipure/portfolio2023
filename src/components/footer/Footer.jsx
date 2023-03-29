import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Chanwoo Hwang</a>
      <ul className='permalinks'>
        <li><a href='#'>HOME</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Expeireince</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href='https://www.facebook.com/chanwoo.hwang.167'><ImFacebook2 /></a>
        <a href='https://www.instagram.com/codingalldaynight/'><BsInstagram /></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; Chanwoo Hwang. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
