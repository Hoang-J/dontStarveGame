import React from 'react'
import "./MainGame.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




function MainGame() {

  return (
    <>

       <div>Main Game Screen</div>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="/level1">Level 1</Dropdown.Item>
          <Dropdown.Item href="/level2">Level 2</Dropdown.Item>
          <Dropdown.Item href="/level3">Level 3</Dropdown.Item>
          <Dropdown.Item href="/level4">Level 4</Dropdown.Item>
          <Dropdown.Item href="/level5">Level 5</Dropdown.Item>
        </DropdownButton>

        
    </>
    

    
  )
}

export default MainGame