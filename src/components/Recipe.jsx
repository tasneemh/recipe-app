import React,{useState} from 'react'
import RecipeDetails from "./RecipeDetails";

function Recipe(props) {
  const [show, setShow] = useState(false);
  const {recipe} = props;
  const {label, image, url, ingredients} = recipe.recipe;
  //console.log("url: ", url);
  
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image}/>
      <a href={url} target="_blank"
      rel="noopener noreferrer"
      >URL</a>
      <button onClick={()=>setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients}/>}
    </div>
  )
}

export default Recipe
