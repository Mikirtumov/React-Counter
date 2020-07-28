import React, {useState} from 'react';
import Counter from "./Counter";
import './App.css';

function App() {
    const [counters, setCounters] = useState([10,3,22]);

    const addCounters = () => {
        const r = Math.round(Math.random() * 10);
        setCounters([...counters, r])
    }
    const plusMinus = (n, value) => {
        const newArr = [...counters];
        newArr[n] += value
        setCounters(newArr);
    }

  return (
    <div className="App">

        {counters.map((el, i)=> <Counter
            count={el}
            key={i}
            index={i}
            plusMinus={plusMinus}
            />)}
        <button onClick={addCounters}>Add Counter</button>
    </div>
  );
}

export default App;
