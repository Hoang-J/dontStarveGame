import React, { useState } from 'react'
import "./Levels.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import glommer from '../../../Images/glommer-fly.gif'

function Level2() {

  const [show, setShow] = useState(false)

  function handleClose() {
    setShow(() => false)
  }

  function handleShow() {
    setShow(() => true)
  }

  return (
    <>
      <div className="glommer"></div>
      <div onClick={handleShow} className="item2"></div>
      <img className="game-char" src={glommer}></img>
      <div className="game-riddle">I really like the song by Owl City.</div>

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={true}
      >
        <Modal.Header>
          <Modal.Title>You're on roll!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You're too good! Let's make it more challenging.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>Close</Button>
          <Button varient='secondary' href='/level3'>Next Map</Button>
        </Modal.Footer>
      </Modal>
      
      <Button className="map-button" variant="secondary" href='/game'>Select Level</Button>
    </>
    
  )
}

export default Level2