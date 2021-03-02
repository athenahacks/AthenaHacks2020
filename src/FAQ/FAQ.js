import React from 'react'

import './styles.css'

export default function Map() {
  return (
    <div id='faq'>
      <div className='questions-col'>
        <div className='question'>
          <div className='title'>How do I check in virtually?</div>
          <div className='answer'>Join the Discord and head over to the #start-here channel. </div>
        </div>
        <div className='question'>
          <div className='title'>What if I need to check in late?</div>
          <div className='answer'>You can check in at any time in the #start-here channel in the <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/kXYN454G'> Discord. </a></div>
        </div>
        <div className='question'>
          <div className='title'>What time does hacking start? </div>
          <div className='answer'>Hacking officially starts at 12:30pm PT after opening ceremony!</div>
        </div>
        <div className='question'>
          <div className='title'>What time does hacking end? </div>
          <div className='answer'>Hacking officially ends at 12pm PT. Submissions are due at 12:30pm with a 30 min buffer for troubleshooting Devpost.</div>
        </div>
        <div className='question'>
          <div className='title'>How do I submit my project?</div>
          <div className='answer'>Submit your project on our
          <a target='_blank' rel='noopener noreferrer' href='http://athenahacks2020.devpost.com'> Devpost. </a>
            <br />
            If you have issues submitting, ask an organizer for help in the <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/kXYN454G'> Discord. </a>
          </div>
        </div>
        <div className='question'>
          <div className='title'>What are the judging criteria?</div>
          <div className='answer'>Our Devpost has descriptions and criteria for each prize.
          </div>
        </div>
        <div className='question'>
          <div className='title'>How can I use hardware in my project?</div>
          <div className='answer'>Unfortunately due to the virtual nature of AthenaHacks 2021 we are unable to provide hardware to teams. However, are welcome to still hack with hardware if you can provide it! </div>
        </div>
      </div>
      <div className='questions-col two'>
        <div className='question'>
          <div className='title'>What if one of the session links doesn't work? </div>
          <div className='answer'>
          If you run into any problems, please message us on <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/kXYN454G'> Discord</a> in the #ask-organizers channel or email us at athenahacks@gmail.com</div>
        </div>

        <div className='question'>
          <div className='title'>How do I find people to hack with?</div>
          <div className='answer'>We will hold team formation activities on March 6th from 10 am - 11 am PT and after that, you can message in #team-formation <a target='_blank' rel='noopener noreferrer' href="https://discord.gg/kXYN454G">Discord</a> channel to look for teammates! </div>
        </div>
        <div className='question'>

          <div className='title'>How do I find a mentor?</div>
          <div className='answer'>Look for someone on the <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/kXYN454G'> Discord </a> with the mentor role or post your questions in the #ask-mentors channel on Discord (include your team number to help mentors respond to you quickly).</div>
        </div>
        <div className='question'>
          <div className='title'>What if I need help with something non-technical?</div>
          <div className='answer'>Look for an organizer on the <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/kXYN454G'> Discord </a> with the organizer role or post your questions in the #ask-organizers channel.</div>
        </div>
        <div className='question'>
          <div className='title'>What if I need to contact an organizer urgently?</div>
          <div className='answer'>If you can't message an organizer on <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/kXYN454G'> Discord </a> for any reason you can call or text 571-425-1850.</div>
        </div>
        <div className='question'>
          <div className='title'>Any other questions? </div>
          <div className='answer'>Ask in #ask-organizers channel on Discord or email athenahacks@gmail.com. </div>
        </div>
      </div>

    </div>
  )
}
