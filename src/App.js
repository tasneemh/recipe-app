import './App.css';
import axios from "axios";
import {useState} from "react";
import { useForm } from 'react-hook-form';
import Recipe from "./components/Recipe";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;
  
  const { register, handleSubmit, errors, reset } = useForm();
  const [recipes, setRecipes] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const clearErrors = () =>{
    setTimeout(() => {
      setErrorMsg("");
    }, 7000);
  }
  const clearReactHookErrors = () =>{
    setTimeout(() => {
      reset();
    }, 7000);
  }
  const onSubmit = (data, event) =>{
  console.log("data: ", data);
  getData(data.item);
  event.target.reset();
  }
  const getData = (item) =>{   
    if (item !== ""){
      const url = `https://api.edamam.com/search?q=${item}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      axios.get(url).then(response =>{
      console.log("response: ", response.data)
      console.log("response.data.more: ",response.data.more);
      if (response.data.more===false){
        setErrorMsg("No such food available");
        clearErrors();
      }
      setRecipes(response.data.hits);
      }).catch(error=>{
      console.log(error);
      });
    }    
  }
  
  return (
    <div className="App">
      <h1 onClick={getData}>Recipe App</h1>
      <form className="search-form"
      onSubmit={handleSubmit(onSubmit)}>
        <input type="text" autoComplete="off"
        placeholder="Search Recipe"
        name="item"
        ref={register({ required: true })}/>
        {errors.item && 
          <div className="alert">
          <h3>Please fill the form.</h3>
          {clearReactHookErrors()}
          </div>
        }
        
        {errorMsg && 
          <div className="alert">
          <h3>{errorMsg}</h3>
          </div>
        }
        <input type="submit" value="SUBMIT"/>
      </form>
      <div className="recipes">
      {recipes && recipes.map(recipe=>
       <Recipe key={uuidv4()} recipe = {recipe}/>
      )}
      </div>
    </div>
  );
}

export default App;
