import React from "react";
import { useState } from "react";
function Counter() {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue((newVal) => {
      return newVal + 1;
    });
  };
  const handleDecrement = () => {
    setValue((newVal) => {
      return newVal - 1;
    });
  };
  return (
    <div>
      {" "}
      <button onClick={handleIncrement}> Increment +</button> <p> {value} </p>{" "}
      <button onClick={handleDecrement}> Decrement -</button>{" "}
    </div>
  );
}
export default Counter;
