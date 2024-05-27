import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Levels.css'

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
      <div>Level 4</div>
      <div className="spider-forest"></div>
      <div className="item4" onClick={handleShow}>TEST</div>

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
          The next one is the last level. Think you can do it?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" href="/level5">Next Level</Button>
        </Modal.Footer>
      </Modal>
      <Button variant="primary" href='/game'>Select Level</Button>
    </>
  )
}

export default Level4