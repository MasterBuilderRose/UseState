import React, { useState } from 'react';

function CounterSeven() {
    const [ count , setCount] = useState(0);
    
    const increment = () => {
        setCount( count + 1)
    }
    const decrement = () => {
        setCount( count - 1)
    } // Initialize state variable 'count' with 0
  return (
    <div>
        <p>Counter 7</p>
        <h3>{count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterSeven