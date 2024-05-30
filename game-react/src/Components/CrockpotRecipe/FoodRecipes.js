import React, { useState, useEffect, useContext } from 'react'
import './FoodRecipes.css'
// import { Maxwell } from './Characters'


function FoodRecipes() {

  const [recipeList, setRecipeList] = useState([])
  // const [cooking, setCooking] = useState([])
  // const maxwellContext = useContext(Maxwell)
  const listItems = recipeList.map(char => 
    <ul className="food-cards" key={char.id}>
      <img src={char.asset}/>
      <p className="food-descriptions">
        <b>{char.name}</b>
        <p>{char.type}</p>
      </p>
    </ul>
  )
  

  useEffect(() => {
    fetch('https://dont-starve-together-api.xyz/api/crockpot-recipes?page=1')
    .then(response => (response.json()))
    .then(data => {
      setRecipeList(data.results)
      // console.log(data.results[0].name)
    })
  }, [])


  // console.log(recipeList.results[0].name)

  return (
    
    <>
      <div>Book of Recipes</div>
      <div className="food-container">{listItems}</div>
      {/* <p>{maxwellContext}</p> */}
      
    </>
  )
}

export default FoodRecipes