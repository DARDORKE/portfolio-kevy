import React from 'react'
import './services.css'
import {VscWand} from 'react-icons/vsc'
import {BiDesktop} from 'react-icons/bi'
import {AiFillSetting} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import {FaSignal} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {BsCheckCircleFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>Ce que je peux faire</h5>
      <h2>Mes Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3><VscWand /> Applications Web</h3>
          </div>

          <p className='service__list'>
            <BsCheckCircleFill/> Création d'applications métier, d'Intranet, d'Extranet, de réseaux sociaux, de sites Coporate et sites vitrines, de Web apps...
          </p>
        </article>

        <article className="service">
          <div className="service__head">
            <h3><BiDesktop /> Responsive design</h3>
          </div>

          <p className='service__list'>
          <BsCheckCircleFill/> Utilisation des technologies HTML5/CSS3 pour réaliser des designs adaptatifs. <br /> <br />
          <BsCheckCircleFill/> Utilisation du framework Bootstrap pour faciliter la réalisation et augmenter la productivité.
          </p>
        </article>

        <article className="service">
          <div className="service__head">
            <h3><AiFillSetting /> Architecture logicielle</h3>
          </div>

          <p className='service__list'>
          <BsCheckCircleFill/> Design pattern MVC pour séparer les couches et éviter le code "spaghetti". <br /> <br />
          <BsCheckCircleFill/> PHP orienté ojbet / PDO pour MySQL / AJAX / Jquery / JavaScript / WebService RESTful JSON.
          </p>
        </article>

        <article className="service">
          <div className="service__head">
            <h3><BsCodeSlash /> Code claire</h3>
          </div>

          <p className='service__list'>
          <BsCheckCircleFill/> Code commenté pour faciliter sa reprise et sa maintenabilité. <br /> <br />
          <BsCheckCircleFill/> Mes priorités : KISS / DRY / TDD. <br /> <br />
          <BsCheckCircleFill/> Rédaction de documentation technique simple ou automatisée (PhpDoc).
          </p>
        </article>

        <article className="service">
          <div className="service__head">
            <h3><FaSignal /> SEO - Optimisations Web</h3>
          </div>

          <p className='service__list'>
          <BsCheckCircleFill/> Exploitation des outils Google Analytics / Adsense / Adwords. <br /> <br />
          <BsCheckCircleFill/> Applications des règles et bonnes pratiques SEO.
          </p>
        </article>
        
        <article className="service">
          <div className="service__head">
            <h3><FaUsers /> Travailler en équipe</h3>
          </div>

          <p className='service__list'>
          <BsCheckCircleFill/> Savoir écouter, échanger et s'entraider pour progresser ensemble (Scrum, Jira, Git, GitLab, Confluence...)
          </p>
        </article>
      </div>
    </section>
  )
}

export default Services