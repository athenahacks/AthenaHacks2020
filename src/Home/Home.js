import React from 'react'
import logo from '../assets/couchowl.png'
import logotext from '../assets/whitelogo_notext.png'
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
          <text>2021 LIVE</text>
        </div>
        <div className='welcome-info'>
          <div className='welcome-column-label'>
            <text>Check-in</text>
            <text>Opening Ceremony</text>
            <text>Closing Ceremony</text>
            <text>Devpost</text>
            <text>Discord</text>
            <text>Virtual Hacker Info</text>
            <text>Schedule</text>
            <text>Contact an Organizer</text>
            <text>MLH Code of Conduct</text>
          </div>
          <div className='welcome-column'>
            <text>
                #start-here channel on Discord
            </text>
            <text>
                March 6th, 11 am - 12:30 pm PT
            </text>
            <text>
                March 7th, 3:30 pm - 5 pm PT
            </text>
            <a target='_blank' rel='noopener noreferrer' href="https://athenahacks2020.devpost.com/">athenahacks2020.devpost.com</a>
            <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/kXYN454G'>https://discord.gg/kXYN454G</a>
            <a target='_blank' rel='noopener noreferrer' href='https://docs.google.com/document/d/1syv8jyNdTYmUzuuIx7ZpiP1QL3sWLv21Nzsl2ydoisQ/view'>How-To</a>
            <a target='_blank' rel='noopener noreferrer' href=''>Link to schedule</a>
            <text>‪+1(657)229-4910</text>

            <a target='_blank' rel='noopener noreferrer' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>mlh-code-of-conduct.pdf</a>

          </div>
          
        </div>
        <div className="social-icons-div">
          <div className="social-icons">
                  <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/athenaHacks">
                    <FaFacebookSquare color="white" size='1.5em'/>
                  </a>
                  <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/athena_hacks/?hl=en">
                    <FaInstagram color="white" size='1.5em'/>
                  </a>
                  <a target='_blank' rel='noopener noreferrer' href="mailto:athenahacks@gmail.com">
                    <FaMailBulk color="white" size='1.5em'/>
                  </a>
            </div>
          </div>
        
      </div>
      
    </div>
  )
}
