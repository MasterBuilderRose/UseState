import React, {useState} from 'react';

function CounterSix() {
    const [ count, setCount]= useState(0);

    const increment = () => {
        setCount( count + 1)
    }

    const decrement = () => {
        setCount(count-1)
    }

  return (
    <div>
        <p> Counter 6 </p>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterSix