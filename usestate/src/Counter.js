import React, {useState} from "react"; // useState is a hook that uses the virtual dom and the new value and compare it and then updates the UI
import "./Counter.css"; // Assuming you have a CSS file for styling

function Counter() {
  const [count, setCount] = useState(0); // 3rd useState is a hook that allows you to add state to functional components,
  // count is the current state, setCount is the function to update the state variable [currentState, setter] = useState(initialState); that means initialState = currentState initially
  // useState takes an initial value as an argument, in this case, 0
  // the [] is also ES6 destructuring

  const increment = () => {
    setCount(count + 1); // this uses the setter as a function to update the state variable, it takes the current value and adds 1 to it)
  }; // 2nd. This is an ES6 Arrow Function to increment the count, functions are always hoisted at the top as a rule,
  const decrement = () => {
    setCount(count -1); // this uses the setter as a function to update the state variable, it takes the current value and subtracts 1 from it
  }; // 2nd. This is an ES6 Arrow Function to decrement the count, functions are always hoisted at the top as a rule

  return (
    <div className="counter">
      <h1>Using UseState</h1>
      <p>
        The count is: {count} the count is destructured so that i can use a
        simplier term. This is what the useState will track
      </p>
      <button onClick={increment}>
        - This Value will change the number of the "count" by subtracting
      </button>
      /* onClick is a prop you pass to an element, and you assign it a function
      that should run when that element is clicked */
      <button onClick={decrement}>
        + This Value will change the number of the "count" by adding
      </button>
      /* onClick is a prop you pass to an element, and you assign it a function
      that should run when that element is clicked */
    </div>
  );
}

export default Counter;
