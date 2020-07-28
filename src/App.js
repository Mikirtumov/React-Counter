import React, {useState} from 'react';
import Counter from "./Counter";
import './App.css';

function App() {
    const [counters, setCounters] = useState([10,3,22]);

    const addCounters = () => {
        setCounters([...counters, 5])
    }
  return (
    <div className="App">

        {counters.map((el, i)=> <Counter count={el} key={i}/>)}
        <button onClick={addCounters}>Add Counter</button>
    </div>
  );
}

export default App;
