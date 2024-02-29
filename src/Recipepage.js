import React from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {
    const { id } = useParams();
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipe = recipes.find(recipe => recipe.id === id);
  
    if (!recipe) {
      return <div>Рецепт не найден</div>;
    }
  
    // Преобразуйте ingredients и instructions в массивы, разделив строки по запятым
    const ingredients = recipe.ingredients.split(',');
    const instructions = recipe.instructions.split(',');
  
    return (
      <div className="content">
        <h1>{recipe.title}</h1>
        <h2>Ингредиенты:</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Инструкции:</h2>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    );
  }
  
  export default RecipePage;
  