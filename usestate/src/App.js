
import './App.css';
import React from 'react';
import Counter from './Counter'; // Importing the Counter component
import CounterTwo from './CounterTwo'; // Importing the CounterTwo component
import CounterThree from './CounterThree'; // Importing the CounterThree component
import CounterFour from './CounterFour'; // Importing the CounterFour component
import CounterFive from './CounterFive'; // Importing the CounterFive component     
import CounterSix from './CounterSix'; // Importing the CounterSix component
import CounterSeven from './CounterSeven'; // Importing the CounterSeven component
import CounterEight from './CounterEight'; // Importing the CounterEight component
import CounterNine from './CounterNine'; // Importing the CounterNine component
import CounterTen from './CounterTen'; // Importing the CounterTen component

function App() {
  return (
    <div className="app">
      <Counter /> {/* This is a placeholder for the Counter component */}
      <CounterTwo />
      <CounterThree />
      <CounterFour />
      <CounterFive />
      <CounterSix />
      <CounterSeven />
      <CounterEight />
      <CounterNine />
      <CounterTen />
    </div>
  );
}

export default App;
