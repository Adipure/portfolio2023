import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg' 
import { GiFamilyTree } from 'react-icons/gi'
import { TbFileCertificate } from 'react-icons/tb'
import { VscProject } from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
          <img src={ME}alt='me2' />
          </div>
        </div>
        
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiFamilyTree className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Experience</small>
            </article>
            <article className="about_card">
              <TbFileCertificate className='about_icon'/>
              <h5>Certified</h5>
              <small>Fullstack Developer From UCI BootCamp</small>
            </article>
            <article className="about_card">
              <VscProject className='about_icon'/>
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>
          <p>Hello, I am a Full Stack Web Developer with a passion for learning. I am a graduate of the University of California, Irvine's Full Stack Web Development Bootcamp. I am a highly motivated individual who is eager to learn and grow in the field of web development. 
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default about
