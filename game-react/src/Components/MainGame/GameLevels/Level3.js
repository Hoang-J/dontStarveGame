import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Levels.css'
import ModalBody from 'react-bootstrap/esm/ModalBody'
import willow from '../../../Images/willow-animation.gif'

function Level3() {
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
      <div className="snowy-trees"></div>
      {/* the mystery item */}
      <div className="item3" onClick={handleShow}></div>
      {/* the character showing on the text box and their riddle for the game */}
      <img className="game-char" src={willow}></img>
      <div className="game-riddle">I'm naked but not the drink.</div>
      
      {/* Bootstrap Modal Codes */}
      <Modal
      // if show state is true then modal will sho
      show={show}
      // if show state is false then modal will not show
      onHide={handleClose}
      // setting this prevents user from clicking outside the modal to exit
      backdrop="static"
      // setting this allows the user to tap on any key to exit out of the modal
      keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Very Nice!</Modal.Title>
        </Modal.Header>
        <ModalBody>
          I can't believe you got it! Onto the next.
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="secondary" href='/level4'>Next Map</Button>
        </Modal.Footer>
      </Modal>
      {/* This button is for user to return to game menu if they give up on finding the mystery item */}
      <Button className="map-button" variant="secondary" href='/game'>Select Level</Button>
    </>
    
  )
}

export default Level3