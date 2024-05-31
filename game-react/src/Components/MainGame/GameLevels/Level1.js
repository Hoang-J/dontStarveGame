import React, { useState } from 'react'
import "./Levels.css"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import wormwoods from '../../../Images/wormwoods.gif'

function Level1() {
  // creating a state for show which will dictate when the modal shows and closes
  const [show, setShow] = useState(false)

  // function to close the modal because the use state is updated to false
  function handleClose() {
    setShow(false)
  }

  // function to show the modal because the use state is updated to true
  function handleShow() {
    setShow(true)
  }

  return (
    <>
        {/* the picture of the map for this "level" is in the css */}
        <div className="field"></div>
        {/* the mystery item */}
        <div onClick={handleShow} className="item1"></div>
        {/* the character showing on the text box and their riddle for the game */}
        <img className="game-char" src={wormwoods}></img>
        <div className="game-riddle">I am orange but not an orange.</div>

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
            <Modal.Title>You Found It!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            See if you can find the next one.
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
            <Button varient='secondary' href='/level2'>Next Map</Button>
          </Modal.Footer>

        </Modal>
        {/* This button is for user to return to game menu if they give up on finding the mystery item */}
        <Button className="map-button" variant="secondary" href='/game'>Select Map</Button>
    </>
    
    
  )
}

export default Level1