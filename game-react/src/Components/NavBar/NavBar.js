import React from 'react'
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

function NavBar() {

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Don't Starve</Navbar.Brand>
          <Nav className="me-auto">
            <Button><Nav.Link href="/home">Home</Nav.Link></Button>
            <Button><Nav.Link href="/characters">Characters</Nav.Link></Button>
            <Button><Nav.Link href="/game">iSpy</Nav.Link></Button>
            <Button><Nav.Link href="/food-recipes">Crockpot</Nav.Link></Button>
            <Button><Nav.Link href="/shop">Shop</Nav.Link></Button>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button><Nav.Link href="/login">Log In</Nav.Link></Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar