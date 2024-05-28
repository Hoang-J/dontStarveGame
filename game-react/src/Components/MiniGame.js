import React, { useState, useEffect } from 'react'
import './MiniGame.css'

function MiniGame() {

  const [recipeList, setRecipeList] = useState('')
  const [cooking, setCooking] = useState('')

  useEffect(() => {
    fetch('https://dont-starve-together-api.xyz/api/crockpot-recipes?page=2')
    .then(response => (response.json()))
    .then(data => {
      setRecipeList(data)
    })
  }, [])



  // function handleClick() {
  //   setCooking()
  // }
  // console.log(recipeList.results)
  return (
    
    <>
      <div>MiniGame goes here</div>
      <div className="ingredients-container">
        <div className="ingredients">1</div>
        <div className="ingredients">2</div>
        <div className="ingredients">3</div>
        <div className="ingredients">4</div>
      </div>
      
    </>
  )
}

export default MiniGame