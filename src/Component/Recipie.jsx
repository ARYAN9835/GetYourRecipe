import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, MealType }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, key) => (
          <li key={key}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
	  <p>MealType: {MealType}</p>
      <img className={style.image} src={image} alt={title} />
    </div>
  );
};

export default Recipe;
