import React, {useState} from 'react';

function CounterNine() {
    const [ count, setCount] = useState(0);

    const increment = () => {
     setCount( count +1);
    }

    const decrement = () => {
     setCount( count - 1)
    }

  return (
    <div>
        <p> Counter #9 </p>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default CounterNine