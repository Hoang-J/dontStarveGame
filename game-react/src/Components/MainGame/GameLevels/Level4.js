import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Levels.css'
import webber from '../../../Images/webbers.gif'

function Level4() {
// creating a state for show which will dictate when the modal shows and closes
  const [show, setShow] = useState(false)
// function to close the modal because the use state is updated to false
  function handleClose() {
    setShow(() => false) 
  }
// function to show the modal because the use state is updated to true
  function handleShow() {
    setShow(() => true)
  }

  return (
    <>
    {/* the picture of the map for this "level" is in the css */}
      <div className="spider-forest"></div>
      {/* the mystery item */}
      <div className="item4" onClick={handleShow}></div>
      {/* the character showing on the text box and their riddle for the game */}
      <img className="game-char" src={webber}></img>
      <div className="game-riddle">I'm going to stay beautiful even in this unoptimal environment.</div>
      
      {/* Bootstrap Modal Codes */}
      <Modal
      // if show state is true then modal will show
      show={show}
      // if show state is false then modal will not show
      onHide={handleClose}
      // setting this prevents user from clicking outside the modal to exit
      backdrop="static"
      // setting this allows the user to tap on any key to exit out of the modal
      keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>You're Too Good!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The next one is the last map. Think you can do it?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="secondary" href="/level5">Next Map</Button>
        </Modal.Footer>
      </Modal>
      {/* This button is for user to return to game menu if they give up on finding the mystery item */}
      <Button className="map-button" variant="secondary" href='/game'>Select Level</Button>
    </>
  )
}

export default Level4