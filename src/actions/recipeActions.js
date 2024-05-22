// Recipe Actions
export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';

// Action Creators
export const addRecipe = (recipe) => ({
    type: ADD_RECIPE,
    payload: recipe,
});

export const deleteRecipe = (recipeId) => ({
    type: DELETE_RECIPE,
    payload: recipeId,
});

export const editRecipe = (recipeId, updatedRecipe) => ({
    type: EDIT_RECIPE,
    payload: { recipeId, updatedRecipe },
});

export const fetchRecipes = () => {
    return async (dispatch) => {  // Action creator now returns a function
        dispatch({ type: FETCH_RECIPES }); // Signal the start of fetching

        try {
            const response = await fetch('/api/recipes'); // Replace with your API endpoint
            const data = await response.json();

            dispatch(fetchRecipesSuccess(data)); // Dispatch success action with data
        } catch (error) {
            dispatch(fetchRecipesFailure(error.message)); // Dispatch error action
        }
    };
};

export const fetchRecipesSuccess = (recipes) => ({
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes,
});

export const fetchRecipesFailure = (error) => ({
    type: FETCH_RECIPES_FAILURE,
    payload: error, 
});

