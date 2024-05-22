import { SET_FILTER } from '../actions/filterActions';

const initialState = {
  filter: null, 
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;