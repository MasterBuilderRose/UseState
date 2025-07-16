import React, {useState} from 'react';


function CounterTwo() {

const [count, setCount] = useState(0);
 const increment = () => {
setCount(count + 1) // this uses the setter as a function to update the state variable, it takes the current value and adds 1 to it
 }

 const decrement = () => {
setCount(count - 1) // this uses the setter as a function to update the state variable, it takes the current value and subtracts 1 from it
 }

return (
    <div className="counterTwo">
        <h1>Using CounterTwo My attemp #1</h1>
        <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
)
}

export default CounterTwo