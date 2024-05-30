import React, { useState, useEffect } from 'react'
import './FoodRecipes.css'
// import { Maxwell } from './Characters'


function FoodRecipes() {

  const [recipeList, setRecipeList] = useState([])
  // const [cooking, setCooking] = useState([])
  // const maxwellContext = useContext(Maxwell)
  const listItems = recipeList.map(food => 
    <ul className="food-cards" key={food.id}>
      <img src={food.asset}/>
      <p className="food-descriptions">
        <b>{food.name}</b>
        <p>{food.type}</p>
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