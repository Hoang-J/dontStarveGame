import React, { useState, useEffect } from 'react'
import './Characters.css'

function Characters() {

  // State is set to empty array since API data is in an array
  // We can use map on arrays to get specific parts of the data
  const [charList, setCharList] = useState([])

  useEffect(() => {
    fetch('https://dont-starve-backend.vercel.app/survivors')
    .then(response => (response.json()))
    .then(data => {
      // Updating the char list state with the data to make the data
      // a global variable to use
      setCharList(data)
    })
  // Putting [] to make sure useEffect is not constantly running, will run one time and thats it
  }, [])
  
  return (
    <> 
    {/* This div will be where the border background will be */}
      <div className="main"></div>
      {/* This div is where the characters are appearing in */}
      <div className="char-container">
      {/* Mapping through the API array to get each character's name, nickname, and portrait
      The image for the last survivor wasn't working so had to use slice to return back only 18 survivors (19 total characters)
      Slice is using index values that's why its 0-17 */}
        {charList.map(char => 
          <div className="char-card" key={char.id}>
            
            <img src={"https://cdn.forums.klei.com/monthly_2019_04/Willow_DST.png.745f49fc24051caafd4805c1f2c15dbc.png"}/>
            <p>
              <b>{char.nickname}</b>
              <p>{char.name}</p>
            </p>
          </div>
        )}
      </div>
    </>
    
  )
}

export default Characters