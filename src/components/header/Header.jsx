import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Bonjour je suis</h5>
        <h1>Kévy Dardor</h1>
        <h5 className="text-light">Développeur FullStack</h5>
        <CTA />
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll_down'>Défiler vers le bas</a>
      </div>
    </header>
  )
}

export default Header