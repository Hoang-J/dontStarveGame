import React from 'react'
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/dont-starve-logo.jpeg'

function NavBar() {

  return (
    <>
      <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
        {/* the dont starve logo for the brand picture */}
          <img className="nav-logo" src={logo} alt=''></img>
          <Nav className="me-auto">
            <Button variant="secondary"><NavLink className="link-line" to="/home">Home</NavLink></Button>
            <Button variant="secondary"><NavLink className="link-line" to="/game">Game</NavLink></Button>
            <Button variant="secondary"><NavLink className="link-line" to="/characters">Characters</NavLink></Button>
            <Button variant="secondary"><NavLink className="link-line" to="/food-recipes">Crockpot</NavLink></Button>
            <Button variant="secondary"><NavLink className="link-line" to="/shop">Shop</NavLink></Button>
          </Nav>
          <Navbar.Toggle />
          {/* puts the log in button all the way to the right of the nav bar */}
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="secondary"><NavLink className="link-line" to="/login">Log In</NavLink></Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar