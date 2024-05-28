import React, { useState } from 'react'
import "./Levels.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
      <div>Level 2</div>
      <div className="glommer"></div>
      <div onClick={handleShow} className="item2"></div>

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
          You're too good! Let's make it more challenging 〵⎝`︽´⎠ 〳
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>Close</Button>
          <Button varient='primary' href='/level3'>Next Level</Button>
        </Modal.Footer>
      </Modal>
      
      <Button variant="primary" href='/game'>Select Level</Button>
    </>
    
  )
}

export default Level2