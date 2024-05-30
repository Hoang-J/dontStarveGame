import React, { useState, useEffect, useContext } from 'react'
import './MiniGame.css'
// import { Maxwell } from './Characters'


function MiniGame() {

  const [recipeList, setRecipeList] = useState([])
  const [cooking, setCooking] = useState([])
  // const maxwellContext = useContext(Maxwell)
  

  useEffect(() => {
    fetch('https://dont-starve-together-api.xyz/api/crockpot-recipes?page=1')
    .then(response => (response.json()))
    .then(data => {
      setRecipeList(data)
      // console.log(data.results[0].name)
    })
  }, [])


  // console.log(recipeList.results[0].name)

  return (
    
    <>
      <div>MiniGame goes here</div>
      {/* <p>{maxwellContext}</p> */}
      
    </>
  )
}

export default MiniGame