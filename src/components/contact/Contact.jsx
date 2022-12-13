import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfbk8h5', 'template_ouwv2us', form.current, 'zuZrAakDZCc6yrltJ')
    
    e.target.reset()

    alert("Votre message a été envoyé !");
  };

  return (
    <section id='contact'>
      <h5>Ce que vous pouvez faire</h5>
      <h2>Me contacter</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kevy.dardor@gmail.com</h5>
            <a href="mailto:kevy.dardor@gmail.com" target='_blank'>Envoyer un message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Kévy Dardor</h5>
            <a href="https://m.me/kevy.dardor.9" target='_blank'>Envoyer un message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+33622101161</h5>
            <a href="https://api.whatsapp.com/send?phone=33622101161" target='_blank'>Envoyer un message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nom/Prénom' required/>
          <input type="email" name='email' placeholder='Adresse e-mail' required/>
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <div className='submit-container'>
            <button type='submit' className='btn btn-primary'>Envoyer</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact