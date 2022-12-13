import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {FaVuejs} from 'react-icons/fa'
import {SiSymfony} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Quelles sont mes compétences ?</h5>
      <h2>Mon Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Développement Front-End</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> HTML <AiFillHtml5/></h4>
                <ProgressBar className='html' animated now={88} label={'88%'}/>
              </div>
          
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> CSS <SiCss3/></h4>
                <ProgressBar className='css' animated now={76} label={'76%'}/>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> JavaScript <SiJavascript/></h4>
                <ProgressBar className='js' animated now={70} label={'70%'}/>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> Bootstrap <SiBootstrap/></h4>
                <ProgressBar className='bootstrap' animated now={95} label={'95%'}/>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> React <SiReact/></h4>
                <ProgressBar className='react' animated now={67} label={'67%'}/>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> Vue.js<FaVuejs/></h4>
                <ProgressBar className='vuejs' animated now={40} label={'40%'}/>
              </div>
            </article>
          </div>
        </div>
      
        <div className="experience__backend">
          <h3>Développement Back-End</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> Symfony <SiSymfony/></h4>
                <ProgressBar className='symfony' animated now={82} label={'82%'}/>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> PHP <SiPhp/></h4>
                <ProgressBar className='php' animated now={88} label={'88%'}/>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> MySQL <SiMysql/></h4>
                <ProgressBar className='mysql' animated now={79} label={'79%'}/>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> Python <SiPython/></h4>
                <ProgressBar className='python' animated now={32} label={'32%'}/>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill className='experience__details-icon'/> NodeJS <FaNodeJs/></h4>
                <ProgressBar className='nodejs' animated now={70} label={'83%'}/>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience