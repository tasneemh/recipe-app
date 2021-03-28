import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Ingredient(props) {
  const {ingredient} = props;
  return (
    <ul className="ingredient-list"
    key={uuidv4()}>
      <li className="ingredient-text">{ingredient.text}</li>
      <li className="ingredient-weight">Weight- {ingredient.weight}</li>
    </ul>
  )
}

export default Ingredient
