import React, {useState} from 'react';
import Counter from "./Counter";
import './App.css';

function App() {
    const [counters, setCounters] = useState([10,3,22]);
  return (
    <div className="App">

        {counters.map(el => <Counter count={el} key={el}/>)}
        <button>Add Counter</button>
    </div>
  );
}

export default App;
