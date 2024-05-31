import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Levels.css'
import wendy from '../../../Images/wendy-abigal2.gif'

function Level5() {

  const [show, setShow] = useState(false)

  function handleClose() {
    setShow(() => false)
  }

  function handleShow() {
    setShow(() => true)
  }

  return (
    <>
      <div className="swamp"></div>
      <div className="item5" onClick={handleShow}></div>
      <img className="game-char" src={wendy}></img>
      <div className="game-riddle">I love being the center of attention.</div>

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>You found them all!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I knew you could do it! Thanks for playing!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="secondary" href="/home">Home</Button>
        </Modal.Footer>
      </Modal>
      <Button className="map-button" variant="secondary" href='/game'>Main Menu</Button>
    </>
  )
}

export default Level5