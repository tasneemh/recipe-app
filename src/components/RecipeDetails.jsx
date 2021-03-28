import React from 'react'
import Ingredient from "./Ingredient";
import { v4 as uuidv4 } from 'uuid';

function RecipeDetails(props) {
  const {ingredients} = props;
  return (
    <div>
      {ingredients.map(ingredient=><Ingredient key={uuidv4} ingredient={ ingredient }/>)}
    </div>
  )
}

export default RecipeDetails
