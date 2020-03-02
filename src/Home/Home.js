import React from 'react'
import logo from '../assets/owl_2020_moon.png'
import logotext from '../assets/athena_text_2020.png'

import './styles.css'

export default function Home () {
  return (
    <div className='home'>
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
            <text>Emergency</text>
            <text>MLH Code of Conduct</text>
          </div>
          <div className='welcome-column'>
            <text>
                Bovard Auditorium
            </text>
            <text>
                TCC Ballroom
            </text>
            <text>
                USC Guest Wireless
            </text>
            <a target='_blank' rel='noopener noreferrer' href="https://athenahacks2020.devpost.com/">athenahacks2020.devpost.com</a>
            <a target='_blank' rel='noopener noreferrer' href='http://bit.ly/athenahacks2020slack'>bit.ly/athenahacks2020slack</a>
            <text>(213) 740-6000</text>
            <a target='_blank' rel='noopener noreferrer' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>mlh-code-of-conduct.pdf</a>

          </div>
        </div>
      </div>
    </div>
  )
}
