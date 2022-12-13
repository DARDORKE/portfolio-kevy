import React from 'react'
import './disponibility.css'

const Disponibility = () => {
  return (
    <section id='disponibility'>
            <h1 className='status'>ACTUELLEMENT</h1>
            <h2 className='search'>JE SUIS DISPONIBLE POUR TRAVAILLER (CDI / PRESTATION)</h2>
            <h5>Quelques soit votre projet, n'hésitez pas à me contacter pour en parler ensemble.</h5>
            <div className='btn-contact'>
              <a href="#contact" className='btn btn-primary'>Me contacter</a>
            </div>
    </section>
  )
}

export default Disponibility