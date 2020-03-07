import React from 'react'

import './styles.css'

export default function Map () {
  return (
    <div id='faq'>
      <div className='questions-col'>

        <div className='question'>
          <div className='title'>Where should I go to check-in when I arrive?</div>
          <div className='answer'>Come to the check-in tables on Trousdale Pkwy right by Tutor Campus Center (TCC). </div>
        </div>
        <div className='question'>
          <div className='title'>Where is late check-in?</div>
          <div className='answer'>Come to the help desk outside TCC Ballroom in the basement.</div>
        </div>
        <div className='question'>
          <div className='title'>What should I bring?</div>
          <div className='answer'>Laptop, charger, water bottle, change of clothes, government ID (student ID is fine for USC students), find the full list <a href="https://medium.com/@athenahacks/what-to-bring-to-a-hackathon-e21ebc28ff6c" target="_blank" rel='noopener noreferrer'>here</a>.</div>
        </div>
        <div className='question'>
          <div className='title'>What time does hacking start? </div>
          <div className='answer'>Hacking officially starts at 1:30pm after opening ceremony!</div>
        </div>
        <div className='question'>
          <div className='title'>What time does hacking end? </div>
          <div className='answer'>Hacking officially ends at 12pm. Submissions are due at 11:30am with a 30 min buffer for troubleshooting Devpost.</div>
        </div>
        <div className='question'>
          <div className='title'>How do I submit my project?</div>
          <div className='answer'>Submit your project on our Devpost.
          <a target='_blank' rel='noopener noreferrer' href='http://athenahacks2020.devpost.com'> athenahacks2020.devpost.com. </a>
            <br />
            If you have issues submitting, come to the organizer's nest on the TCC Ballroom stage.
          </div>
        </div>
        <div className='question'>
          <div className='title'>What are the judging criteria?</div>
          <div className='answer'>Our Devpost has descriptions and criteria for each prize.
          </div>
        </div>
        <div className='question'>
          <div className='title'>How can I checkout hardware?</div>
          <div className='answer'>Look for the MLH table around the edge of TCC Ballroom for the Hardware Lab. </div>
        </div>
      </div>
      <div className='questions-col two'>
        <div className='question'>
          <div className='title'>How do I find people to hack with?</div>
          <div className='answer'>We will hold team formation activities during check-in and after that, you can message in #team-formation <a target='_blank' rel='noopener noreferrer' href="https://bit.ly/athenahacks2020slack">Slack</a> channel to look for teammates! </div>
        </div>
        <div className='question'>

          <div className='title'>How do I find a mentor?</div>
          <div className='answer'>Look for someone in a dark purple shirt or post your questions in the #ask-mentors channel on Slack (include your table number to help mentors locate you).</div>
        </div>
        <div className='question'>
          <div className='title'>What if I need help with something non-technical?</div>
          <div className='answer'>Look for an organizer with a light pink shirt on or come to the organizer nest on the stage in TCC Ballroom.</div>
        </div>
        <div className='question'>
          <div className='title'>What if I have an emergency?</div>
          <div className='answer'>For emergencies contact USC's Department of Public Safety at (213)-740-4321. For non-emergencies, contact (213)-740-6000.</div>
        </div>
        <div className='question'>
          <div className='title'>What is AthenaHacks doing about Coronavirus? </div>
          <div className='answer'>We are taking deliberate steps to keep the spread of germs down during the hackathon weekend. We will have hand sanitizer stations in the hacking space and during all meals. All servers at meals will also be wearing gloves. </div>
        </div>
        <div className='question'>
          <div className='title'>What are some health advices? </div>
          <div className='answer'>Handwash for 20 seconds with soap and water, avoid touching your eyes, nose and mouth. Cover your cough and sneeze with a tissue.</div>
        </div>
        <div className='question'>
          <div className='title'>Any other questions? </div>
          <div className='answer'>Ask in #help channel on Slack or email athenahacks@gmail.com. </div>
        </div>
      </div>

    </div>
  )
}
