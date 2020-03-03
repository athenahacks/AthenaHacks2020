import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import basementLVL from '../assets/map_0.jpg'
import groundLVL from '../assets/map_1.jpg'
import LVL2 from '../assets/map_2.jpg'
import LVL3 from '../assets/map_3.jpg'
import LVL4 from '../assets/map_4.jpg'

import './styles.css'

export default function Map() {
  return (
    <div id='map'>
      <Accordion defaultActiveKey="1" id='accordian'>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Basement LVL
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <img src={basementLVL} />
          
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            First Floor (Ground LVL)
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body> <img src={groundLVL} /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Second Floor
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body> <img src={LVL2} /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Third Floor
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body> <img src={LVL3} /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Fourth Floor
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body> <img src={LVL4} /></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
   
    </div>
  )
}
