import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Me découvrir</h5>
      <h2>À propos de moi</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+1 Année(s)</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>À venir</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projets</h5>
              <small>+49 Completés</small>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque eleifend ultricies. 
          Ut vitae facilisis urna, nec commodo ex. In bibendum turpis elementum egestas porta. 
          Morbi eu urna eget dui ultrices pharetra. In aliquam molestie ornare. 
          </p>

          <a href="#contact" className='btn btn-primary'>Me contacter</a>
        </div>
      </div>
    </section>
  )
}

export default About