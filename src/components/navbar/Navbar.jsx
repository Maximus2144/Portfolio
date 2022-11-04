import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import '../../assets/styles/navbar.css';

const Navbarr = () => {
  return (
    <Navbar className="topNavbar sticky-md-top" fixed="top" bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#AboutMe">AboutMe</Nav.Link>
          <Nav.Link href="#Proyects">Projects</Nav.Link>
          <Nav.Link href="#ContactMe">ContactMe</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr