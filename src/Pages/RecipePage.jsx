import React, { useEffect, useState } from 'react';
import Recipe from '../Component/Recipie.jsx';
import "../RecipePage.css"

const RecipePage = () => {
  const APP_ID = '';
  const APP_KEY = '';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Mango");
  const [error, setError] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    setError("");
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    if(data.hits.length == 0) {
      setError("No recipes found. Please enter valid variety of item");
    } else {
      setRecipes(data.hits);
    }
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className='Recipe-Page'> 
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <div className='r-card'>
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            MealType={recipe.recipe.mealType}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
