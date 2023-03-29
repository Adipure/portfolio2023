import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_0q95i79', 'template_be2slhm', form.current, 'Ib8lkjN9x7-xDohsR')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>chanwoo1017@gmail.com</h5>
            <a href='mailto:chanwoo1017@gmail.com' traget='_blank'>Send a Message</a>
          </article>
        </div>
        <div className='contact_options'>
          <article className='contact_option'>
            <BsInstagram className='contact_option-icon' />
            <h4>DirectMessage</h4>
            <h5>Instagram DM</h5>
            <a href='https://ig.me/m/codingalldaynight' taget='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
