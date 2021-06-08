import React from 'react'
import { Card, Container, Col, Row, Button} from "react-bootstrap";
import pic1 from '../pictures/undraw_people_tax5.svg'
import pic2 from '../pictures/undraw_celebration_0jvk.svg'
import pic3 from '../pictures/undraw_fans_gr54.svg'

export default function FindRoommatesContent() {
    return (
        <section className="find-roommates-content mt-5">
        <Container>
        <h3 className="my-4">Find Roommates in Shared Rooms</h3>
            <Row>
        <Col sm={12} md={4} lg={4}>
          <Card className="find-roommates-content-cards text-dark mt-3">
            <Card.Img variant="top" src={pic1} className="find-roommates-content-cards-pic"/>
            <Card.Body>
              <Card.Title>Two Pockets are better than one.</Card.Title>
              <Card.Text>
              You don't have to spend all your money on accomodation.Find someone and share the cost together.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <Card className="find-roommates-content-cards text-dark mt-3">
            <Card.Img variant="top" src={pic2} className="find-roommates-content-cards-pic" />
            <Card.Body>
              <Card.Title>Make New Friends</Card.Title>
              <Card.Text>
              We let you meet with people you will absolutely love since you get to select the personality traits of potential roommates
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <Card className="find-roommates-content-cards text-dark mt-3">
            <Card.Img variant="top"  src={pic3} className="find-roommates-content-cards-pic" />
            <Card.Body>
              <Card.Title>Live the Life You Deserve</Card.Title>
              <Card.Text>
              A three bedroom apartment in banana island is a piece of cake. You & your friends can combine your money to rent well built & furnished apartments.
              </Card.Text>
            </Card.Body>
          </Card>          
          </Col>
          </Row>
        </Container>
        </section>
    )
}
