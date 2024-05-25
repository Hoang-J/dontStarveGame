import React from 'react'
import Button from 'react-bootstrap/Button';
import "./PopUp.css"
import MiniGame from './MiniGame';

function PopUp() {
  return (
    <>
      <div className="found-item">
        <h2>Good job! You found the hidden item!</h2>
        <p>See if you can find the next item.</p>
        <Button variant="outline-light">Next Level</Button>
      </div> 
      
    </>
    
    
  )
}

export default PopUp