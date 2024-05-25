import React, { useState, useEffect } from 'react'
import "./MainGame.css"
import PopUp from './PopUp'





function MainGame() {

  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    console.log("clicked!")
    setIsClicked(() => !isClicked)
    
  }

  return (
    <>
        <div className="field"></div>
        {isClicked && <PopUp />}
        <div onClick={handleClick} className="item">TEST</div>
       
    </>
    
    
  )
}

export default MainGame