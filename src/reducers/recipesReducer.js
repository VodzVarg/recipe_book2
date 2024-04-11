const initialState = []; // Initial state is an empty array

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, action.payload];
    case 'DELETE_RECIPE':
      return state.filter((_, index) => index !== action.payload);
    case 'EDIT_RECIPE':
      return state.map((recipe, i) => 
          i === action.payload.index ? action.payload.updatedRecipe : recipe
       );
    default:
      return state;
  }
}