import React from 'react'
import ScheduleImg from '../assets/schedule.jpg'
import ScheduleImg2 from '../assets/schedule2.jpg'
import {Container, Row, Col} from "react-bootstrap"

import './styles.css'

export default function Schedule () {
  return (
    <Container fluid="true" className='schedule'>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} id='saturday'>
          <h1>Saturday</h1>
          <img alt="schedule1" src={ScheduleImg} />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} id='sunday'>
          <h1>Sunday</h1>
          <img alt="schedule2" src={ScheduleImg2} />
        </Col>
      </Row>
    </Container>
  )
}
