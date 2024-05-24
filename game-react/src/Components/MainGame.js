import React, { useState, useEffect } from 'react'
import "./MainGame.css"




function MainGame() {

  const [mysteryItem, setMysteryItem] = useState('Test Item')
  const [foundItem, setFoundItem] = useState('Found item')

  // useEffect(() => {
    
  // })

  function handleClick() {
    console.log("clicked!")
    


  }

  return (
    <>
        <div className="field"></div>
        <div onClick={handleClick} className="item">{mysteryItem}</div>
        <div>{foundItem}</div>
    </>
    
    
  )
}

export default MainGame