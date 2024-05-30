import React, { useState } from 'react'
import "./Levels.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Level1() {

  const [show, setShow] = useState(false)

  function handleClose() {
    setShow(() => false)
  }

  function handleShow() {
    setShow(() => true)
  }



  return (
    <>
        <div className="field"></div>
        <div onClick={handleShow} className="item1"></div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
        >

          <Modal.Header closeButton>
            <Modal.Title>You Found It!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            See if you can find the next one. :3
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
            <Button varient='primary' href='/level2'>Next Level</Button>
          </Modal.Footer>

        </Modal>

        <Button variant="primary" href='/game'>Select Level</Button>
    </>
    
    
  )
}

export default Level1