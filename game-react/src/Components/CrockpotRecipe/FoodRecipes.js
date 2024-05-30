import React, { useState, useEffect } from "react";
import "./FoodRecipes.css";
// import { Maxwell } from './Characters'

function FoodRecipes() {
  const [recipeList, setRecipeList] = useState([]);
  
  useEffect(() => {
    fetch("https://dont-starve-together-api.xyz/api/crockpot-recipes?page=4")
      .then((response) => response.json())
      .then((data) => {
        setRecipeList(data.results);
        // console.log(data.results[0].name)
      });
  }, []);

  // console.log(recipeList.results[0].name)

  return (
    <>
      <div>Book of Recipes</div>
      {/* <div className="food-container">{listItems}</div> */}
      {/* <p>{maxwellContext}</p> */}
      <ul className="Recipe-List">
        {recipeList.map(food => (
          <li className="food-cards" key={food.id}>
            <img className="food-item" src={food.asset} alt="" />
            <p className="food-descriptions">
              <b>{food.name}</b>
              <p>{food.type}</p>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FoodRecipes;
