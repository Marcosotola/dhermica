import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import Tratamientos from './Tratamientos.png'



export const Inicio = () => {
  return (
    <div>
<Container>
  <div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias laudantium, velit odio modi, officiis illo voluptatibus architecto rerum et repellendus possimus, ab labore iusto quibusdam sit unde natus exercitationem earum.
  </div>
  <Row
    md="2"
    sm=""
    xs="1"
  >
    <Col className="bg-light border">
      
    </Col>
    <Col className="bg-light border">
      <img src={Tratamientos} alt="Tratamientos" />
    </Col>
    
  </Row>
</Container>
  </div>

  )
}

export default Inicio