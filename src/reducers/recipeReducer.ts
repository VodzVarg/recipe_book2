import { ADD_RECIPE, DELETE_RECIPE } from '../constants/recipeConstants';
import { Recipe } from '../types';

const initialState: Recipe[] = []; // Initial state is an empty array

export default function recipesReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_RECIPE:
      return [...state, action.payload];
    case DELETE_RECIPE:
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
}