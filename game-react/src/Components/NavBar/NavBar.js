import React from 'react'
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

function NavBar() {

  return (
    <>
    {/* <div id="navbar">
        <div><NavLink to= "/minesweeper">Minesweeper</NavLink></div>
        <div><NavLink to= "/">Home</NavLink></div>  
        <div><NavLink to= "/jokes">Jokes</NavLink></div> 
    </div> */}
    
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Don't Starve</Navbar.Brand>
          <Nav className="me-auto">
            <Button><NavLink className="link-line" to="/home">Home</NavLink></Button>
            <Button><NavLink className="link-line" to="/characters">Characters</NavLink></Button>
            <Button><NavLink className="link-line" to="/game">iSpy</NavLink></Button>
            <Button><NavLink className="link-line" to="/food-recipes">Crockpot</NavLink></Button>
            <Button><NavLink className="link-line" to="/shop">Shop</NavLink></Button>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button><NavLink className="link-line" to="/login">Log In</NavLink></Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar