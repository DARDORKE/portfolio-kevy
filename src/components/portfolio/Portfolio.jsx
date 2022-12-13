import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dice Go - Jeu de dés dynamique (JavaScript)',
    github: 'https://github.com/DARDORKE/JAVASCRIPT---DICE',
    demo: 'https://app-dice-go.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Trivaligo - Site vitrine d\'une agence de voyage (WordPress)',
    github: 'https://trivaligo.com/wp-login',
    demo: 'https://trivaligo.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Rock-N-Folk - Site vitrine d\'une association de musique (HTML/CSS)',
    github: 'https://github.com/DARDORKE/RockAndFolk-GIT',
    demo: 'https://app-rocknfolk.herokuapp.com/index.html'
  },
  {
    id: 4,
    image: IMG4,
    title: 'SwapAccess - Interface d\'administration d\'une société de salle de sport (PHP/Symfony)',
    github: 'https://github.com/DARDORKE/ECF-Salle',
    demo: 'https://app-swapaccess.herokuapp.com/login'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Maquettage & infographie sur AdobeXD',
    github: 'https://dribbble.com/shots/20127334-ClipBoard-Format-Web-Mockup-Light',
    demo: 'https://dribbble.com/shots/20127334-ClipBoard-Format-Web-Mockup-Light'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Maquettage & infographie sur Figma',
    github: 'https://dribbble.com/shots/20127322-Maquettage-infographie-sur-Figma',
    demo: 'https://dribbble.com/shots/20127322-Maquettage-infographie-sur-Figma'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Ce que j'ai déjà fait</h5>
      <h2>Mon Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Code Source</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Accéder au site</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio