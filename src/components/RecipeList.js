import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { deleteRecipe } from '../actions/recipeActions'; // Import your delete action

const RecipeList = () => {
    const recipes = useSelector(state => state.recipes.recipes); // Access the recipes from your Redux state
    const dispatch = useDispatch(); 

    const handleDelete = (recipeId) => {
        dispatch(deleteRecipe(recipeId)); 
    };

    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    {/* Render recipe details here */}
                    <button onClick={() => handleDelete(recipe.id)}>Delete</button> 
                </div>
            ))}
        </div>
    );
}

export default RecipeList;