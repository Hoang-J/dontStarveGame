import React, { useState, useEffect, useContext } from 'react'
import './Characters.css'
// import { NameContext } from './Home'



function Characters() {

  const [charList, setCharList] = useState([])
  // Mapping through the API array to get each character's name, nickname, and portrait
  // The image for the last survivor wasn't working so had to use slice to return back only 18 survivors (19 total characters)
  // Slice is using index values that's why its 0-13
  const listItems = charList.slice(0, 17).map(char => 
    <ul key={char.id}>
      <img
      src={char.portrait}
      />
      <p>
        <b>{char.nickname}</b>
        <p>{char.name}</p>
      </p>
    </ul>
  )

  // const name = useContext(NameContext);


  useEffect(() => {
    fetch('https://dont-starve-together-api.xyz/api/survivors')
    .then(response => (response.json()))
    .then(data => {
      setCharList(data)
    })
    
  }, [])
  
  return (
    <> 
      <div className="test">
      {listItems}
      </div>
      {/* <div>Hi, {name}</div> */}
      
    </>
    
  )
}

export default Characters