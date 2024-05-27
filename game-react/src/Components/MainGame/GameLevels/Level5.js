import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import './Levels.css'

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
      <div>Level 5</div>
      <div className="swamp"></div>
      <div className="item5" onClick={handleShow}>TEST</div>

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
          I knew you could do it! That's all from this game. Thanks for playing!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" href="/home">Home</Button>
        </Modal.Footer>
      </Modal>
      <Button variant="primary" href='/game'>Main Menu</Button>
    </>
  )
}

export default Level5