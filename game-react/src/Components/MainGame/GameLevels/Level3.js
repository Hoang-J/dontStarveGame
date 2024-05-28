import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Levels.css'
import ModalBody from 'react-bootstrap/esm/ModalBody';

function Level3() {

  const [show, setShow] = useState(false)

  function handleClose() {
    setShow(() => false)
  }

  function handleShow() {
    setShow(() => true)
  }

  return (
    <>
      <div>Level 3</div>
      <div className="snowy-trees"></div>
      <div className="item3" onClick={handleShow}></div>

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Very Nice!</Modal.Title>
        </Modal.Header>
        <ModalBody>
          I can't believe you got it! Onto the next 
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" href='/level4'>Next Level</Button>
        </Modal.Footer>
      </Modal>
      <Button variant="primary" href='/game'>Select Level</Button>
    </>
    
  )
}

export default Level3