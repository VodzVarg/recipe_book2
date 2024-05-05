const initialState = []; // Initial state is an empty array

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, action.payload];
      case 'DELETE_RECIPE':
        return state.filter((_, i) => i !== action.payload);
    case 'EDIT_RECIPE':
      return state.map((recipe, i) => 
          i === action.payload.index ? action.payload.updatedRecipe : recipe
       );
       case 'LOAD_RECIPES':
  const existingIds = state.map(recipe => recipe.id);
  const newRecipes = action.payload.filter(recipe => !existingIds.includes(recipe.id));
  return [...state, ...newRecipes];
    default:
      return state;
  }
}