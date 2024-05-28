import React, { useState, useEffect } from 'react'

function Characters() {

  const [charList, setCharList] = useState('')

  useEffect(() => {
    fetch('https://dont-starve-together-api.xyz/api/survivors')
    .then(response => (response.json()))
    .then(data => {
      setCharList(data)
    })
    
  }, [])



  return (
    <>
      <div>Characters</div>
      {/* <div>{charList}</div> */}
    </>
    
  )
}

export default Characters