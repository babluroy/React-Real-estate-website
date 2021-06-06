import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import heroPic from '../pictures/hero.svg'

export default function hero_section() {
    return (
        <div className="hero-section">
        
<Container className="container-fluid">
<Row>

<Col lg={6} md={12} sm={12} className="d-flex flex-column justify-content-center mt-5">
<h1 className="text-light mt-5 hero-text">Find Homes & Let-out Your Home Easily</h1>
</Col>

<Col lg={6} md={12} sm={12}>
<img src={heroPic} className="img-fluid hero-pic align-middle" alt="hero-img"/>
</Col>
  </Row>
</Container>
            
        </div>
    )
}
