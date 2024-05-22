import { ADD_RECIPE, DELETE_RECIPE } from '../constants/recipeConstants';
import { Recipe } from '../types';

// Action Creators
export const addRecipe = (recipe: Recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

export const deleteRecipe = (recipeId: string) => ({
  type: DELETE_RECIPE,
  payload: recipeId,
});