import React from 'react'
import logo from '../assets/owl_2020_moon.png'
import logotext from '../assets/athena_text_2020.png'
import { FaFacebookSquare, FaInstagram, FaMailBulk} from "react-icons/fa";

import './styles.css'

export default function Home () {
  return (
    <div id='home'>
      <div className='welcome-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='welcome'>
        <div className='welcome-title'>
          <img src={logotext} alt='logo' />
          <text>2020 LIVE</text>
        </div>
        <div className='welcome-info'>
          <div className='welcome-column-label'>
            <text>Check-in</text>
            <text>Hacking Space</text>
            <text>WIFI</text>
            <text>Devpost</text>
            <text>Slack</text>
            <text>Virtual Hacker Info</text>
            <text>Emergency</text>
            <text>Non-Emergency</text>
            <text>MLH Code of Conduct</text>
          </div>
          <div className='welcome-column'>
            <text>
                Trousdale Pkwy by TCC
            </text>
            <text>
                TCC Ballroom
            </text>
            <text>
                USC Guest Wireless
            </text>
            <a target='_blank' rel='noopener noreferrer' href="https://athenahacks2020.devpost.com/">athenahacks2020.devpost.com</a>
            <a target='_blank' rel='noopener noreferrer' href='http://bit.ly/athenahacks2020slack'>bit.ly/athenahacks2020slack</a>
            <a target='_blank' rel='noopener noreferrer' href='https://docs.google.com/document/d/1syv8jyNdTYmUzuuIx7ZpiP1QL3sWLv21Nzsl2ydoisQ/view'>How-To</a>
            <text>(213)-740-4321</text>
            <text>(213)-740-6000</text>

            <a target='_blank' rel='noopener noreferrer' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>mlh-code-of-conduct.pdf</a>

          </div>
          
        </div>
        <div className="social-icons-div">
          <div className="social-icons">
                  <a href="https://www.facebook.com/athenaHacks" target="_blank">
                    <FaFacebookSquare color="white" size='1.5em'/>
                  </a>
                  <a href="https://www.instagram.com/athena_hacks/?hl=en" target="_blank">
                    <FaInstagram color="white" size='1.5em'/>
                  </a>
                  <a href="mailto:athenahacks@gmail.com" target="_blank">
                    <FaMailBulk color="white" size='1.5em'/>
                  </a>
            </div>
          </div>
        
      </div>
      
    </div>
  )
}
