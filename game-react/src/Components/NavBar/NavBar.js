import React from 'react'
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Don't Starve</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/characters">Characters</Nav.Link>
            <Nav.Link href="/game">iSpy</Nav.Link>
            <Nav.Link href="/food-recipes">Crockpot</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar