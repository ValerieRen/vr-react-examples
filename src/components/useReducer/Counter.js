import React, {useReducer} from "react";
import {init, reducer} from "./reducer";

const Counter = () => {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div className="counter">
      <span>Count: {state.count}</span>
      <button onClick={() => dispatch({type: 'reset', payload: initialState})}>Reset</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default Counter;