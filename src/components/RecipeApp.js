import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecipeList from './RecipeList';
import { fetchRecipes } from '../actions/recipeActions';

const RecipeApp = () => {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes.recipes);
    const loading = useSelector(state => state.recipes.loading);
    const error = useSelector(state => state.recipes.error);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    return (
        <div>
            {loading && <div>Loading recipes...</div>}
            {error && <div>Error fetching recipes: {error}</div>} 
            {!loading && !error && recipes.length === 0 && <div>No recipes found.</div>}
            {!loading && !error && recipes.length > 0 && <RecipeList />} 
        </div>
    );
};

export default RecipeApp;

