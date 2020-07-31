import React, {useState} from 'react';
import Counter from "./Counter";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

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
    const delAll = () => {
        setCounters([])
    }


  return (
    <div className="App">

        {counters.map((el, i)=> <Counter
            count={el}
            key={i}
            index={i}
            plusMinus={plusMinus}
            />)}
        <button type="button" className="btn btn-secondary" onClick={addCounters}>Add Counter</button>
        <button type="button" className="btn btn-dark" onClick={delAll}>Del All</button>
    </div>
  );
}

export default App;
