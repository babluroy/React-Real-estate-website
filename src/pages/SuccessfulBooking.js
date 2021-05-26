import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Components/navbar'
import {Button, Container, Card, Row, Col } from "react-bootstrap";
import successPic from '../pictures/done.svg'

export default function SuccessfulBooking() {
    return (
        <>
        <Navbar/>
      
       <Container className="mr-top-2">
        <Row>   
        <Col md={6} sm={12} lg={6}>
         <img src={successPic} fluid="true" className="done-img"/>
         </Col>
         <Col md={6} sm={12} lg={6} className="h4 align-self-center">     
             <div className="text-center successful-post-text">Property is Booked Successfully</div>
         </Col>
         </Row>
        <center><Link to="/"><button className="btn btn-primary text-center mt-5">Go to Home</button></Link></center>
         </Container>
        </>
     )
}
