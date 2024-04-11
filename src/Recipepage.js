import React from 'react';
import { useParams } from 'react-router-dom';

function RecipePage({ isAdmin }) {
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const index = parseInt(id, 10);
  const recipe = recipes[index];

  if (!recipe) {
    return (
      <div className="content">
        <h2>Рецепт не найден</h2>
      </div>
    );
  }

  const handleDeleteRecipe = () => {
    recipes.splice(index, 1);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    window.location.href = '/recipeapp'; // Redirect to the recipe app page
  };

  // Преобразуйте ingredients и instructions в массивы, разделив строки по запятым
  const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : recipe.ingredients.split(',');
  const instructions = Array.isArray(recipe.instructions) ? recipe.instructions : recipe.instructions.split(',');

  return (
    <div className="content">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} /> {/* Display the image */}
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
      {isAdmin && (
        <button onClick={handleDeleteRecipe}>Удалить рецепт</button>
      )}
    </div>
  );
}

export default RecipePage;