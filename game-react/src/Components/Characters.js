import React, { useState, useEffect } from 'react'
import './Characters.css'

function Characters() {

  const [charList, setCharList] = useState([])
  const listItems = charList.map(char => 
    <ul key={char.id}>
      <img
      src={char.portrait}
      />
      <p>
        <b>{char.nickname}</b>
        <p>{char.name}</p>
      </p>
    </ul>
  // <>

    // {/* <div className='char-div'> {char.nickname}: {char.name} <img className="image" src={char.portrait}></img></div> */}
    
  // {/* </> */}
  

  )
  


  useEffect(() => {
    fetch('https://dont-starve-together-api.xyz/api/survivors')
    .then(response => (response.json()))
    .then(data => {
      // list = data
      setCharList(data)
      // console.log(list)
    })
    
  }, [])

  
// console.log("outside of effect", list)
// charCard.set('name', charList[0].name)
// console.log(charCard.get('name'))

  return (
    <>
      <div>Characters</div>
      <div className="test">
      {listItems}
      </div>
    </>
    
  )
}

export default Characters