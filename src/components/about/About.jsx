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
          Je suis <b>Kévy DARDOR</b> et voici mon portfolio. Vous y trouverez un bric-à-brac d'idées et de projets réalisés dans le domaine du <b>Digital UI/UX</b>, du <b>Webdesign</b>, du <b>Développement Web</b>.
          </p>

          <p>
            Passionné par l'informatique depuis mon plus jeune âge, je me suis d'abord orienté vers un cursus d'<b>Administrateur Système et Réseaux</b>.
          </p>

          <p>
             Mes divers expériences m'ont aidé à rapidement réaliser que la <b>conception </b>et le <b>développement d'applications web</b> étaient mes passions premières.
          </p>

          <p>
            J'essaye toujours d'apprendre de nouvelles choses et d'élargir mes horizons. Je suis une personne <b>polyvalente</b> qui aime autant le <b>graphisme et ses finesses</b> que la <b>programmation et ses problèmes</b>.
          </p>
          <div className='btn-contact'>
            <a href="#contact" className='btn btn-primary'>Me contacter</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About