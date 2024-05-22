import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// Removed: import { useSelector, useDispatch } from 'react-redux';
// Removed: import { handleDeleteRecipe, addRecipe } from './actions/actions';

function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const [recipe, setRecipe] = useState(null); // State for the selected recipe

  useEffect(() => {
    const loadRecipesFromLocalStorage = () => {
      try {
        const storedRecipes = localStorage.getItem('recipes');
        if (storedRecipes) {
          const recipes = JSON.parse(storedRecipes);
          const foundRecipe = recipes.find(r => r.id === id);
          if (foundRecipe) {
            setRecipe(foundRecipe);
          } 
        }
      } catch (error) {
        console.error('Error loading recipes:', error);
      }
    };

    loadRecipesFromLocalStorage();
  }, [id]); // Run whenever 'id' changes

  const handleDelete = () => {
    // Update localStorage directly
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      const recipes = JSON.parse(storedRecipes).filter(r => r.id !== id);
      localStorage.setItem('recipes', JSON.stringify(recipes));
      setRecipe(null); // Clear the recipe state
      navigate('/');
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
          <button onClick={handleDelete}>Удалить рецепт</button>
          <Link to="/">
            <button>Вернуться</button>
          </Link>
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </div>
  );
}

export default RecipePage;