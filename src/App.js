
import './App.css'
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';








function App() {

  const [query,setquery] = useState("")
  const [recipes,setrecipes] = useState([])
  // const [healthLabels, sethealthLabels] = useState("vegan")
  
  
  var url = `https://api.edamam.com/search?q=${query}&app_id=780a53b2&app_key=b14ab14da28c11bc547d542cf0353a74`
  
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault(); // to prevent the page from getting reloaded
    getRecipes();
  }


  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Plaza 🍿</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input 
          type="text"
          className="app__input"
          placeholder="Enter Ingredients"
          value={query}
          onChange={(e) => setquery(e.target.value)} // to get the value of the input
        />
      <input className="app__submit" type="Submit" value="Search" />

      {/* <select className="app_healthLabels">
        <option 
          onClick={() => sethealthLabels("vegan")} >Vegan</option>
        <option 
          onClick={() => sethealthLabels("vegetarian")} >Vegetarian</option>
        <option 
          onClick={() => sethealthLabels("paleo")} >Paleo</option>
        <option 
          onClick={() => sethealthLabels("dairy-free")} > Dairy-free </option>
        <option 
          onClick={() => sethealthLabels("egg-free")} >Egg-Free</option>
        <option 
          onClick={() => sethealthLabels("soy-free")} >Soy-Free</option>
        <option 
          onClick={() => sethealthLabels("fish-free")} >Fish-Free</option>
        <option 
          onClick={() => sethealthLabels("wheat-free")} >Wheat Free</option>

      </select> */}
   

      </form>

      <div className="app__recipes">
        
          {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe}/>
          })}
        
      </div>
      
    </div>
  );
}

export default App;
