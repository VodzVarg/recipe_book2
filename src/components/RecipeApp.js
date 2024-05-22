import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecipeList from './RecipeList'; // Import your connected component
import { fetchRecipes } from '../actions/recipeActions'; 

const RecipeApp = () => {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes.recipes);
    const loading = useSelector(state => state.recipes.loading); 
    const error = useSelector(state => state.recipes.error); 

    useEffect(() => {
        dispatch(fetchRecipes()); // Fetch recipes when the component mounts
    }, [dispatch]); 

    // ... handle adding new recipes, etc.

    if (loading) {
        return <div>Loading recipes...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div> 
            {loading && <div>Loading recipes...</div>}
            {error && <div>Error: {error}</div>}

            <RecipeList recipes={recipes} />  {/* Pass recipes to the list component */}
        </div>
    );
};

export default RecipeApp;

