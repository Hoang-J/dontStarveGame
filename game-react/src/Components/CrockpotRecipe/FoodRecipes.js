import React, { useState, useEffect } from "react";
import "./FoodRecipes.css";

function FoodRecipes() {

  // State is set to empty array since API data is in an array
  // We can use map on arrays to get specific parts of the data
  const [recipeList, setRecipeList] = useState([]);
  
  useEffect(() => {
    fetch("https://dont-starve-together-api.xyz/api/crockpot-recipes?page=4")
      .then((response) => response.json())
      .then((data) => {
        // Updating the recipe list state with the data to make the data
        // a global variable to use
        // Had to save the data as this since cannot map through an object
        // data.results will give back an array to parse through
        setRecipeList(data.results);
      });
      // Empty square brackets to make sure will useEffect does not keep running
      // Will only run one time and stop until state is updated
  }, []);

  return (
    <>
      <div className="main"></div>
      <div className="Recipe-List">
        {recipeList.map(food => (
          <div className="food-cards" key={food.id}>
            <img className="food-item" src={food.asset} alt="" />
            <p className="food-descriptions">
              <b>{food.name}</b>
              <p>{food.type}</p>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodRecipes;
