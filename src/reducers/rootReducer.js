import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer'; 
import authReducer from './authReducer';
import filterReducer from './filterReducer'; 

const rootReducer = combineReducers({
    recipes: recipeReducer, 
    auth: authReducer, 
    filters: filterReducer, 
    // ... other reducers
});

export default rootReducer;