import React, { useState } from 'react';

function CounterFive() {
    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount( count + 1)
    }
    const decrement = () => {
        setCount( count - 1)
    }
  return (
    <div>
        <p>Counter Five</p>
        <h3>{count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
  )
}

export default CounterFive