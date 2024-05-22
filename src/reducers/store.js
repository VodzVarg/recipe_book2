import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import Redux Thunk
import rootReducer from './reducers'; 

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk] // Apply Redux Thunk middleware
});

export default store;