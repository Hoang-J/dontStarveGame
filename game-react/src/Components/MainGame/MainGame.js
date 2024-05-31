import React from 'react'
import "./MainGame.css"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function MainGame() {

  return (
    <>
      {/* the game menu screen */}
       <div className="main">
        <h2 className="game-title">Look for the mystery item in each map</h2>
        <p className="game-description">This game is similar to I Spy. A riddle will be given to help you (hopefully). <br/> Select your map to begin!</p>
        
       </div>
       {/* Dropdown menu for user to select whichever map they want to play */}
        <div>
          <DropdownButton className="drop-down" id="dropdown-basic-button" title="Dropdown button" variant="secondary">
            <Dropdown.Item href="/level1">Deciduous Forest</Dropdown.Item>
            <Dropdown.Item href="/level2">Glommer Statue</Dropdown.Item>
            <Dropdown.Item href="/level3">Snowy Forest</Dropdown.Item>
            <Dropdown.Item href="/level4"> Spider Forest</Dropdown.Item>
            <Dropdown.Item href="/level5">Swamp</Dropdown.Item> 
          </DropdownButton>
        </div>
        
    </>
    
  )
}

export default MainGame