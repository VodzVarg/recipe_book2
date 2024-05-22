import { 
    ADD_RECIPE, 
    DELETE_RECIPE, 
    EDIT_RECIPE, 
    FETCH_RECIPES, 
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE,
} from '../actions/recipeActions';

const initialState = {
    recipes: [],
    loading: false,
    error: null,
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload] 
            };
        case DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
            };
        case EDIT_RECIPE:
            return {
                ...state,
                recipes: state.recipes.map(recipe =>
                    recipe.id === action.payload.recipeId ? action.payload.updatedRecipe : recipe
                )
            };
        case FETCH_RECIPES: 
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_RECIPES_SUCCESS: 
            return {
                ...state,
                loading: false,
                recipes: action.payload,
            };
        case FETCH_RECIPES_FAILURE: 
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default recipeReducer;