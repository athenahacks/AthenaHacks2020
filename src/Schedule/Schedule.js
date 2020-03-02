import React from 'react'
import ScheduleImg from '../assets/schedule.jpg'
import ScheduleImg2 from '../assets/schedule2.jpg'

import './styles.css'

export default function Schedule () {
  return (
    <div className='schedule'>
      <div id='saturday'>
        <h1>Saturday</h1>
        <img src={ScheduleImg} />
      </div>
      <div id='sunday'>
        <h1>Sunday</h1>
        <img src={ScheduleImg2} />
      </div>
    </div>
  )
}
