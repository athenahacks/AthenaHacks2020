import React from 'react'
import ScheduleImg from '../assets/sat_sched.jpg'
import ScheduleImg2 from '../assets/sun_sched.jpg'
import { Container, Row, Col } from 'react-bootstrap'

import './styles.css'

export default function Schedule () {
  var zynga = 1
  var bloomberg = 1
  var introvertsmsft = 1
  var reactandrails = 1
  var echoar = 1
  var replit = 1
  var gcloud = 1
  var storypitchmsft = 1
  var teamformation = 1
  var openingceremony = 1
  var networkingsession = 1
  var werewolf = 1
  var capturetheflag = 1
  var bobross = 1
  var expoandjudging = 1
  var yoga = 1
  var closing = 1

  function initfunc () {
    document.getElementById('zynga').style.visibility = 'hidden'
    document.getElementById('bloomberg').style.visibility = 'hidden'
    document.getElementById('introvertmsft').style.visibility = 'hidden'
    document.getElementById('reactandrails').style.visibility = 'hidden'
    document.getElementById('echoar').style.visibility = 'hidden'
    document.getElementById('replit').style.visibility = 'hidden'
    document.getElementById('gcloud').style.visibility = 'hidden'
    document.getElementById('storypitchmsft').style.visibility = 'hidden'
    document.getElementById('teamformation').style.visibility = 'hidden'
    document.getElementById('openingceremony').style.visibility = 'hidden'
    document.getElementById('networkingsession').style.visibility = 'hidden'
    document.getElementById('werewolf').style.visibility = 'hidden'
    document.getElementById('capturetheflag').style.visibility = 'hidden'
    document.getElementById('bobross').style.visibility = 'hidden'
    document.getElementById('expoandjudging').style.visibility = 'hidden'
    document.getElementById('yoga').style.visibility = 'hidden'
    document.getElementById('closing').style.visibility = 'hidden'
  }

  window.onload = initfunc

  function showzynga () {
    if (zynga === 0) {
      document.getElementById('zynga').style.visibility = 'hidden'
      zynga = 1
    } else {
      document.getElementById('zynga').style.visibility = 'visible'
      zynga = 0
    }
  }
  function showbloomberg () {
    if (bloomberg === 0) {
      document.getElementById('bloomberg').style.visibility = 'hidden'
      bloomberg = 1
    } else {
      document.getElementById('bloomberg').style.visibility = 'visible'
      bloomberg = 0
    }
  }
  function showintrovertmsft () {
    if (introvertsmsft === 0) {
      document.getElementById('introvertmsft').style.visibility = 'hidden'
      introvertsmsft = 1
    } else {
      document.getElementById('introvertmsft').style.visibility = 'visible'
      introvertsmsft = 0
    }
  }
  function showreactandrails () {
    if (reactandrails === 0) {
      document.getElementById('reactandrails').style.visibility = 'hidden'
      reactandrails = 1
    } else {
      document.getElementById('reactandrails').style.visibility = 'visible'
      reactandrails = 0
    }
  }
  function showechoar () {
    if (echoar === 0) {
      document.getElementById('echoar').style.visibility = 'hidden'
      echoar = 1
    } else {
      document.getElementById('echoar').style.visibility = 'visible'
      echoar = 0
    }
  }
  function showreplit () {
    if (replit === 0) {
      document.getElementById('replit').style.visibility = 'hidden'
      replit = 1
    } else {
      document.getElementById('replit').style.visibility = 'visible'
      replit = 0
    }
  }
  function showgcloud () {
    if (gcloud === 0) {
      document.getElementById('gcloud').style.visibility = 'hidden'
      gcloud = 1
    } else {
      document.getElementById('gcloud').style.visibility = 'visible'
      gcloud = 0
    }
  }
  function showmsftpitch () {
    if (storypitchmsft === 0) {
      document.getElementById('storypitchmsft').style.visibility = 'hidden'
      storypitchmsft = 1
    } else {
      document.getElementById('storypitchmsft').style.visibility = 'visible'
      storypitchmsft = 0
    }
  }
  function showteamformation () {
    if (teamformation === 0) {
      document.getElementById('teamformation').style.visibility = 'hidden'
      teamformation = 1
    } else {
      document.getElementById('teamformation').style.visibility = 'visible'
      teamformation = 0
    }
  }
  function showopeningceremony () {
    if (openingceremony === 0) {
      document.getElementById('openingceremony').style.visibility = 'hidden'
      openingceremony = 1
    } else {
      document.getElementById('openingceremony').style.visibility = 'visible'
      openingceremony = 0
    }
  }
  function shownetworkingsession () {
    if (networkingsession === 0) {
      document.getElementById('networkingsession').style.visibility = 'hidden'
      networkingsession = 1
    } else {
      document.getElementById('networkingsession').style.visibility = 'visible'
      networkingsession = 0
    }
  }
  function showwerewolf () {
    if (werewolf === 0) {
      document.getElementById('werewolf').style.visibility = 'hidden'
      werewolf = 1
    } else {
      document.getElementById('werewolf').style.visibility = 'visible'
      werewolf = 0
    }
  }
  function showcapturetheflag () {
    if (capturetheflag === 0) {
      document.getElementById('capturetheflag').style.visibility = 'hidden'
      capturetheflag = 1
    } else {
      document.getElementById('capturetheflag').style.visibility = 'visible'
      capturetheflag = 0
    }
  }
  function showbobross () {
    if (bobross === 0) {
      document.getElementById('bobross').style.visibility = 'hidden'
      bobross = 1
    } else {
      document.getElementById('bobross').style.visibility = 'visible'
      bobross = 0
    }
  }
  function showexpoandjudging () {
    if (expoandjudging === 0) {
      document.getElementById('expoandjudging').style.visibility = 'hidden'
      expoandjudging = 1
    } else {
      document.getElementById('expoandjudging').style.visibility = 'visible'
      expoandjudging = 0
    }
  }
  function showyoga () {
    if (yoga === 0) {
      document.getElementById('yoga').style.visibility = 'hidden'
      yoga = 1
    } else {
      document.getElementById('yoga').style.visibility = 'visible'
      yoga = 0
    }
  }
  function showclosing () {
    if (closing === 0) {
      document.getElementById('closing').style.visibility = 'hidden'
      closing = 1
    } else {
      document.getElementById('closing').style.visibility = 'visible'
      closing = 0
    }
  }
  return (
    <Container fluid='true' className='schedule'>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} id='saturday'>
          <h1>Saturday (PST)</h1>
          <div className='container'>
            <img alt='schedule1' src={ScheduleImg} />
            <a href='#' onClick={() => showteamformation()}><div className='teamformation' /></a>
            <div className='teamformationdesc' id='teamformation'>
              Zoom link: <a href='https://usc.zoom.us/j/92409702206'>https://usc.zoom.us/j/92409702206</a>
              <br />
            </div>
            <a href='#' onClick={() => showopeningceremony()}><div className='openingceremony' /></a>
            <div className='openingceremonydesc' id='openingceremony'>
              Stream: <a href='https://www.youtube.com/watch?v=dhK4vaRXnw0'>https://www.youtube.com/watch?v=dhK4vaRXnw0</a>
              <br />
            </div>
            <a href='#' onClick={() => shownetworkingsession()}><div className='networkingsession' /></a>
            <div className='networkingsessiondesc' id='networkingsession'>
              Go to company voice and chat channels on Discord!
              <br />
            </div>
            <a href='#' onClick={() => showzynga()}><div className='zyngagamedev' /></a>
            <div className='zyngagamedevdesc' id='zynga'>
              Come and join Zynga for a comprehensive and interactive workshop on Mobile Game Development! We will be talking about everything that goes into creating a popular and long lasting Mobile Game, the teams and roles involved, and the challenges that come with designing in the mobile gaming space.
              <br /><br />
              Zynga is a leading developer of the world’s most popular social games that are played by millions of people around the world each day. We are headquartered in San Francisco and have additional offices in the U.S , Canada, U.K and India. Since our founding in 2007, our mission has been to connect the world through games and delight consumers with social gaming experiences. To-date, more than one billion people have played our games across Web and mobile, including FarmVille, Zynga Poker, Words With Friends, Hit it Rich! Slots and CSR.
              <br /><br />
              Zoom link: <a href='https://usc.zoom.us/j/99617456324?pwd=ZmZjRG15ZS9iOVR2ZlU5Q0VmWFBWZz09'>https://usc.zoom.us/j/99617456324?pwd=ZmZjRG15ZS9iOVR2ZlU5Q0VmWFBWZz09</a>
              <br />
            </div>
            <a href='#' onClick={() => showbloomberg()}><div className='bloombergdecode' /></a>
            <div className='bloombergdecodedesc' id='bloomberg'>
              Bloomberg Engineering invites you to join us for a conversation to learn about who we are and what we do! Our engineers will discuss our work in the fintech space as well as their experiences as a software engineer at Bloomberg and living in NYC.
              <br /><br />
              Zoom link: <a href='https://usc.zoom.us/j/94003323297?pwd=UWpRUEFHSGV1djhaMDZkNnFHWTJMZz09'>https://usc.zoom.us/j/94003323297?pwd=UWpRUEFHSGV1djhaMDZkNnFHWTJMZz09</a>
              <br />
            </div>
            <a href='#' onClick={() => showintrovertmsft()}><div className='introvertsmsft' /></a>
            <div className='showintrovertmsftdesc' id='introvertmsft'>
              Ever heard that you need to network to get what you want, but don’t know how? Ever feel like you’re totally awkward in large groups and can’t stand out in a crowd even if you tried? This workshop is for you! You’ll learn how to identify what works for you in the networking world and how to build meaningful connections.
              <br /><br />
              Zoom link: <a href='https://usc.zoom.us/j/99837153722?pwd=QjFWaFBSeFhERXhsOCs4Uis0MllZdz09'>https://usc.zoom.us/j/99837153722?pwd=QjFWaFBSeFhERXhsOCs4Uis0MllZdz09</a>
              <br />
            </div>
            <a href='#' onClick={() => showreactandrails()}><div className='reactandrails' /></a>
            <div className='reactandrailsdesc' id='reactandrails'>
              Learn about the basic structure of a web application as you build one from scratch! We'll break down how models, controllers, views, and react components come together in web apps, all while helping you create a product of your own!
              <br /><br />
              Zoom link: <a href='https://usc.zoom.us/j/95369755010?pwd=UjZ6UTcrS3JtN1BpaWMvL3FweXZQQT09'>https://usc.zoom.us/j/95369755010?pwd=UjZ6UTcrS3JtN1BpaWMvL3FweXZQQT09</a>
              <br />
            </div>
            <a href='#' onClick={() => showechoar()}><div className='echoar' /></a>
            <div className='echoardesc' id='echoar'>
              The workshop will show how to quickly create augmented and virtual reality (AR/VR) apps with no technical skills or coding required and scale existing apps by connecting them to the cloud. Workshop participants will learn how to create real-time cloud-connected AR/VR apps using the echoAR platform. Participants will also discover how AR/VR are changing the world through the demonstration of different use cases of 3D applications and live demos of AR/VR experiences. Participants are encouraged to bring a laptop and a smartphone. Platforms for experimentation include: Google ARCore, WebXR, Vuforia, Unity-based apps, and more.
              <br /><br />
              Zoom link: <a href='https://usc.zoom.us/j/97413004796?pwd=NWt0ZVN2Y2hZMHRucnROVFN5dXdYZz09'>https://usc.zoom.us/j/97413004796?pwd=NWt0ZVN2Y2hZMHRucnROVFN5dXdYZz09</a>
              <br />
            </div>
            <a href='#' onClick={() => showreplit()}><div className='replit' /></a>
            <div className='replitdesc' id='replit'>
              What does tech look like? We'll take a look at one career changer's journey to tech. Traditional or not, our paths to development have all been impacted by COVID. We've all had to adapt to this new remote environment — finding new ways to expand our network, get involved, and grow our skills. We'll discuss lessons learned, tips and tricks, and even a hackathon demo!
              <br /><br />
              Zoom link: <a href='https://usc.zoom.us/j/93946123855?pwd=WWJ2OW5LSzVRRXFwZ3ZMWHpIOHZvUT09'>https://usc.zoom.us/j/93946123855?pwd=WWJ2OW5LSzVRRXFwZ3ZMWHpIOHZvUT09</a>
              <br />
            </div>
            <a href='#gcloud' name='gcloud' onClick={() => showgcloud()}><div className='gcloud' /></a>
            <div className='gclouddesc' id='gcloud'>
              After a brief introduction to Google Cloud, we’ll dive into three key products: App Engine, Machine Learning APIs, and Cloud Firestore. Each one will feature some cool demos and/or live coding.
              <br /><br />
              Zoom link: <a href='https://usc.zoom.us/j/92934716598?pwd=V0p1NklGZ2M5VHNJR0tJazJWREsvUT09'>https://usc.zoom.us/j/92934716598?pwd=V0p1NklGZ2M5VHNJR0tJazJWREsvUT09</a>
              <br />
            </div>
            <a href='#werewolf' name='werewolf' onClick={() => showwerewolf()}><div className='werewolf' /></a>
            <div className='werewolfdesc' id='werewolf'>
              Zoom link: <a href='https://usc.zoom.us/j/98408739893?pwd=WTd2MTlTQWVITWhDN0VLZDYyL2dCQT09'>https://usc.zoom.us/j/98408739893?pwd=WTd2MTlTQWVITWhDN0VLZDYyL2dCQT09</a>
              <br />
            </div>
            <a href='#capturetheflag' name='capturetheflag' onClick={() => showcapturetheflag()}><div className='capturetheflag' /></a>
            <div className='capturetheflagdesc' id='capturetheflag'>
              Zoom link: <a href='https://usc.zoom.us/j/98408739893?pwd=WTd2MTlTQWVITWhDN0VLZDYyL2dCQT09'>https://usc.zoom.us/j/98408739893?pwd=WTd2MTlTQWVITWhDN0VLZDYyL2dCQT09</a>
              <br />
            </div>
            <a href='#bobross' name='bobross' onClick={() => showbobross()}><div className='bobross' /></a>
            <div className='bobrossdesc' id='bobross'>
              Zoom link: <a href='https://usc.zoom.us/j/94231908623?pwd=a0JVVlZ4R1lacFdSWWpTdmk4OG9HQT09'>https://usc.zoom.us/j/94231908623?pwd=a0JVVlZ4R1lacFdSWWpTdmk4OG9HQT09</a>
              <br />
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} id='sunday'>
          <h1>Sunday (PST)</h1>
          <div className='container'>
            <img alt='schedule2' src={ScheduleImg2} />
            <a href='#yoga' name='yoga' onClick={() => showyoga()}><div className='yoga' /></a>
            <div className='yogadesc' id='yoga'>
              Zoom link: <a href='https://usc.zoom.us/j/92103576404?pwd=WGo0R3RPb3FlRmhudmdscWdUK2c5dz09'>https://usc.zoom.us/j/92103576404?pwd=WGo0R3RPb3FlRmhudmdscWdUK2c5dz09</a>
              <br />
            </div>
            <a href='#'><div className='hackingend' /></a>
            <a href='#storypitchmsft' name='storypitchmsft' onClick={() => showmsftpitch()}><div className='storypitchmsft' /></a>
            <div className='storypitchmsftdesc' id='storypitchmsft'>
              Learn how to tell a compelling story of your product when you pitch. Make your pitch effective by making it relatable, personal and real.
              <br /><br />
              Zoom link: <a href='https://usc.zoom.us/j/94087667047?pwd=WFdsNlRacXdXeE82dG5mVFhPZXRzUT09'>https://usc.zoom.us/j/94087667047?pwd=WFdsNlRacXdXeE82dG5mVFhPZXRzUT09</a>
              <br />
            </div>
            <a href='#expoandjudging' name='expoandjudging' onClick={() => showexpoandjudging()}><div className='expoandjudging' /></a>
            <div className='expoandjudgingdesc' id='expoandjudging'>
              Project Expo will be a mix of live and devpost only submissions. Be sure to fill out the project submission form to choose your presentation type here: <a href='https://airtable.com/shrtJF8Fflg9cRMXz'>https://airtable.com/shrtJF8Fflg9cRMXz</a>. If you have decided to present your project live, please describe how the judges can find you during Project Expo. We recommend using your team voice channel in Discord but you may choose to provide a Zoom or Google Meet link instead.
              <br />
            </div>
            <a href='#closing' name='closing' onClick={() => showclosing()}><div className='closing' /></a>
            <div className='closingdesc' id='closing'>
              Stream: <a href='https://www.youtube.com/watch?v=wB513SbGVk0'>https://www.youtube.com/watch?v=wB513SbGVk0</a>
              <br />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
