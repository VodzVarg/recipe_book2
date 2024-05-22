import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer'; // Import your recipe reducer
// Import other reducers if you have them (e.g., for user authentication)

const rootReducer = combineReducers({
    recipes: recipeReducer, 
    // ... other reducers
});

export default rootReducer;