import React from 'react';
import './App.css';

function Counter(props) {
  return (
    <div className="App">
      <button onClick={() => props.plusMinus(props.index, -1)}>-1</button>
      <button onClick={() => props.plusMinus(props.index, -2)}>-2</button>
      <button onClick={() => props.plusMinus(props.index, -3)}>-3</button>
      {props.count}
      <button onClick={() => props.plusMinus(props.index, 3)}>+3</button>
      <button onClick={() => props.plusMinus(props.index, 2)}>+2</button>
      <button onClick={() => props.plusMinus(props.index, 1)}>+1</button>

    </div>
  );
}

export default Counter;
