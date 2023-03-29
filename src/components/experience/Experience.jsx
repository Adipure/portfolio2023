import React from 'react'
import './experience.css'
import { AiFillHtml5 , AiFillApi } from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'
import { FaReact }  from 'react-icons/fa'
import { BsBootstrap } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { GrMysql }  from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My skills</h5>
      <h2>Core Competencies</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <AiFillHtml5 className='experience_details-icon' />
              <div>
                <h4>HTML5</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiJavascript className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <IoLogoCss3 className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaReact className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBootstrap className='experience_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsGithub className='experience_details-icon' />
              <div>
                <h4>Github</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <GrMysql className='experience_details-icon' />
              <div>
                <h4>Mysql</h4>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaNodeJs className='experience_details-icon' />
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiMongodb className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaAws className='experience_details-icon' />
              <div>
                <h4>AWS</h4>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <AiFillApi className='experience_details-icon' />
              <div>
                <h4>API</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiExpress className='experience_details-icon' />
              <div>
                <h4>ExpressJs</h4>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
