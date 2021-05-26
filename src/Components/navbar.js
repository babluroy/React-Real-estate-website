import React,{useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase'
import { Container } from 'react-bootstrap';

export default function NavigationBar({companyName="DevBud"}) {

    //Authstate
    const [authState, setAuthState ] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (!user) {
            setAuthState(false)
          }else{
            setAuthState(true)
          }
        });
      }, [])

//signout function
const Logout = () => {
  firebase.auth().signOut().then(()=>{
    <Redirect to="/" />
  })
  .catch((error)=>{
   toast(error, {type:"error"})
  })
}


  return (
  <Navbar bg="dark" expand="lg" className="navbar">
  <Link to="/"><Navbar.Brand  className="text-light">{companyName}</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav text-light">
    <Nav className="mr-auto text-light">
      <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
      <Nav.Link as={Link} to="/personal-rooms" className="text-light">Personal Rooms</Nav.Link>
      <Nav.Link as={Link} to="/family-apartments" className="text-light pr-4">Family Apartments</Nav.Link>
      <Nav.Link as={Link} to="/vacation-villas" className="text-light pr-4">Villas for Vacation</Nav.Link>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
    <NavDropdown title={<FontAwesomeIcon icon={faUserCircle} size="lg" className="text-light dropdown-menu-bar" spin/>}>
      {authState ? (
        <>
        <Container>
        <Nav.Link as={Link} to="/my-profile" className="text-dark">My Profile</Nav.Link>
        <Nav.Link as={Link} to="/my-bookings" className="text-dark">Bookings</Nav.Link>
        <Nav.Link as={Link} to="/my-home-bookings" className="text-dark">Host Bookings</Nav.Link>
        </Container>
        </>
        ) : (
          <>
        <Link to="/"><NavDropdown.Item>Login</NavDropdown.Item></Link>
        <Link to="/"><NavDropdown.Item>Signup</NavDropdown.Item></Link>
        <NavDropdown.Divider />
        </>
        )}
        {authState ? (
        <>
        <NavDropdown.Item><Button className="btn btn-danger" onClick={Logout}>Logout</Button></NavDropdown.Item>
        </>
        ) :""}
      </NavDropdown>

    {authState ? (
    <>
    <Navbar.Text>
      <Link to="/become-host"><Button className="btn host-btn">Become a Host</Button></Link>
    </Navbar.Text>
    </>
      ):""}

  </Navbar.Collapse>
  </Navbar.Collapse>
  {/* Error toast */}
  <ToastContainer/>
</Navbar>

    )
}
