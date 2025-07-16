import React, {useState} from 'react';

function CounterTen() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount( count + 1 );
    }

    const decrement = () => {
        setCount( count -1 );
    }

  return (
    <div>
        <p>Counter 10</p>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default CounterTen