import React, { useState, useEffect } from 'react';

function Recipepage({ recipeId }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const loadRecipe = () => {
      try {
        const storedRecipes = localStorage.getItem('recipes');
        if (storedRecipes) {
          const recipes = JSON.parse(storedRecipes);
          const selectedRecipe = recipes.find((r) => r.id === recipeId);
          setRecipe(selectedRecipe);
        }
      } catch (error) {
        console.error('Error loading recipe:', error);
      }
    };
    loadRecipe();
  }, [recipeId]);

  const handleDeleteRecipe = () => {
    try {
      const storedRecipes = localStorage.getItem('recipes');
      if (storedRecipes) {
        let recipes = JSON.parse(storedRecipes);
        recipes = recipes.filter((r) => r.id !== recipeId);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        setRecipe(null);
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div className="content">
      {recipe ? (
        <>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} />
          <h2>Ингредиенты:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2>Инструкции:</h2>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>

          <button onClick={handleDeleteRecipe}>Удалить рецепт</button>
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </div>
  );
}

export default Recipepage;