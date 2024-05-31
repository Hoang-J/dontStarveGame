import React, { useState } from 'react'
import "./Levels.css"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import wormwoods from '../../../Images/wormwoods.gif'

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
        <img className="game-char" src={wormwoods}></img>
        <div className="game-riddle">I am orange but not an orange.</div>

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
            See if you can find the next one.
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
            <Button varient='secondary' href='/level2'>Next Map</Button>
          </Modal.Footer>

        </Modal>

        <Button className="map-button" variant="secondary" href='/game'>Select Map</Button>
    </>
    
    
  )
}

export default Level1