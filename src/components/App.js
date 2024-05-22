import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; 
import Counter from './Counter';

const store = createStore(rootReducer); 

const App = () => {
  return (
    <Provider store={store}> 
      <Counter />
    </Provider>
  );
};

export default App;

// 2. Counter.js
import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { increment, decrement } from './actions';

class Counter extends Component {
  render() {
    const { count, increment, decrement } = this.props;
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter); 

// 3. actions.js 
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// 4. reducers.js 
const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}