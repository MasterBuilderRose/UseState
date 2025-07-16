import React from 'react';
import { useState } from 'react';

function CounterThree() {
    const [count, setCount] = useState(0)

    const increment =() => {
     setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <div className="bem__naming__convention">
        <h1>Counter Number 3 with Self explanation</h1>
        <p>first i have to add the basic HTML</p>
        <p>That includes the increment and decrement as buttons</p>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <p> These buttons manupulate the Dom by changing the count inside the P element</p>
        <p>{count}</p>
        <p>count is not yet defined so i must make the state that will keep the count</p>
    </div>
  )
}

export default CounterThree