import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(10);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counterContainer">
      <h1>Counter App: {counter}</h1>
      <hr />

      <button onClick={() => handleClick()}>+1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleDecrement}>-1</button>
    </div>
  );
};

export default Counter;
