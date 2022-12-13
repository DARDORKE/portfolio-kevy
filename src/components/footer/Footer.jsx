import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <div className='container__footer'>
        <a href="#" className='footer__logo'>Kévy Dardor</a>

        <ul className='permalinks'>
          <li><a href="#">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#disponibility">Disponibilités</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/kevy.dardor.9" target='_blank'><FaFacebookF/></a>
          <a href="https://linkedin.com" target='_blank'><FaLinkedin/></a>
          <a href="https://twitter.com/kedardor" target='_blank'><IoLogoTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Kévy Dardor. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer