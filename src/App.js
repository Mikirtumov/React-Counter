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

    const delCounter = (index) => {
        const updatedCounter = counters.filter((el, i) => i !== index)
        setCounters(updatedCounter)
    }
    const resAll = (index) => {
        const updatedCounter = counters.map((el, i) => index = 0)
        setCounters(updatedCounter)
    }

    const delAll = () => {
        setCounters([])
    }

    const  resCounter = (index) => {
        const updatedCounter = [...counters];
        updatedCounter[index] = 0;

        setCounters(updatedCounter)
    }


  return (
    <div className="App">

        {counters.map((el, i)=> <Counter
            count={el}
            key={i}
            index={i}
            plusMinus={plusMinus}
            delCounter={delCounter}
            resCounter={resCounter}
            />)}
            <br/>
        <button type="button" className="btn btn-outline-primary btn-lg ml-2 mr-2" onClick={addCounters}>Add Counter</button>
        <button type="button" className="btn btn-outline-danger btn-lg ml-2 mr-2" onClick={delAll}>Del All</button>
        <button type="button" className="btn btn-outline-warning btn-lg ml-2 mr-2" onClick={resAll}>RES</button>
    </div>
  );
}

export default App;
