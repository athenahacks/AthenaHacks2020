import React from 'react'

import './styles.css'

export default function Schedule () {
  return (
    <div className='schedule'>
      <div className='saturday'>
        <div className='day'><text className='title'>Saturday</text></div>
        <div className='event'>
          <div className='box main'><text className='title'>Opening Ceremony</text><text>10am-12pm | Bovard Auditorium</text></div>
        </div>
        <div className='event'>
          <div className='box food'><text className='title'>Lunch</text><text>12pm-1pm | TCC</text></div>
        </div>
        <div className='event'>
          <div className='box important'><text>Hacking Starts</text><text>3:00pm</text></div>
        </div>
        <div className='event'>
          <div className='box workshop'><text className='title'>How to Build Your First API -  Honey</text><text>3:00-4:30pm | TCC 352</text></div>
          <div className='box workshop'><text className='title'>How to Build Your First API -  Honey</text><text>3:00-4:30pm | TCC 352</text></div>

        </div>
      </div>

      <div className='sunday'>
        <div className='day'><text className='title'>Sunday</text></div>
        <div className='event'>
          <div className='box food'><text className='title'>Breakfast</text><text>9am-10am | TCC</text></div>
        </div>
        <div className='event'>
          <div className='box important'><text>Project Submissions Due</text><text>12:00pm</text></div>
        </div>
        <div className='event'>
          <div className='box main'><text className='title'>Project Expo & Judging</text><text>1pm-2pm | TCC</text></div>
        </div>

      </div>
    </div>
  )
}
