import React, { useState, useContext } from 'react'
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NameContext } from './Home'
import Button from 'react-bootstrap/esm/Button';



function NavBar() {

  const name = useContext(NameContext)
  // const [logOut, setLogOut] = useState()

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Don't Starve</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/characters">Characters</Nav.Link>
            <Nav.Link href="/game">iSpy</Nav.Link>
            <Nav.Link href="/minigame">Crockpot</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
          </Nav>
          {/* <Navbar.Toggle /> */}
          {/* <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <span>{name}</span>
            </Navbar.Text>
            <Button>Log Out</Button>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>

      
    </>
    

  )
}

export default NavBar