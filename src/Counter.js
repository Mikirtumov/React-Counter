import React from 'react';
import './App.css';

function Counter(props) {
  return (
    <div className="App">
      <button type="button" className="btn btn-outline-danger" onClick={() => props.plusMinus(props.index, -1)}>-1</button>
      <button type="button" className="btn btn-outline-danger" onClick={() => props.plusMinus(props.index, -2)}>-2</button>
      <button type="button" className="btn btn-outline-danger" onClick={() => props.plusMinus(props.index, -3)}>-3</button>
      {props.count}
      <button type="button" className="btn btn-outline-success" onClick={() => props.plusMinus(props.index, 3)}>+3</button>
      <button type="button" className="btn btn-outline-success" onClick={() => props.plusMinus(props.index, 2)}>+2</button>
      <button type="button" className="btn btn-outline-success" onClick={() => props.plusMinus(props.index, 1)}>+1</button>

    </div>
  );
}

export default Counter;
