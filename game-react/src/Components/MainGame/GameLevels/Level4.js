import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Levels.css'
import webber from '../../../Images/webbers.gif'

function Level4() {

  const [show, setShow] = useState(false)

  function handleClose() {
    setShow(() => false) 
  }

  function handleShow() {
    setShow(() => true)
  }

  return (
    <>
      <div className="spider-forest"></div>
      <div className="item4" onClick={handleShow}></div>
      <img className="game-char" src={webber}></img>
      <div className="game-riddle">I'm going to stay beautiful even in this unoptimal environment.</div>

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
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
      <Button className="map-button" variant="secondary" href='/game'>Select Level</Button>
    </>
  )
}

export default Level4