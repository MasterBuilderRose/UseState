import React, {useState} from 'react';

function CounterEight() {
    const [ count, setCount] = useState(0)

    const increment = () => {
    setCount( count +1)
    }

    const decrement = () => {
        setCount(count - 1);}
  
    
    return (
    <div>
        <h1>Counter 8</h1>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterEight