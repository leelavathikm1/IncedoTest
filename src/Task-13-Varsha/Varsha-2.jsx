import React, { useState } from "react";
const Test = () => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  return (
    <div>
      {" "}
      <h1>{count}</h1> <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
    </div>
  );
};
export default Test;
