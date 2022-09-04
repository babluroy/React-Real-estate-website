import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import heroPic from '../pictures/hero.svg'
import Vdo from '../pictures/video-background.mp4'
import Thumbnail from '../pictures/cover.jpg'

export default function hero_section() {
    return (
        <div className='hero-section'>
<div className="fullscreen-bg">
<video autoPlay loop muted poster={Thumbnail} style={{position: "absolute", width:"100%", height:"80vh", objectFit:"cover", zIndex: "-1"}}>
<source src={Vdo} type="video/mp4"></source>
</video>
</div>

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
