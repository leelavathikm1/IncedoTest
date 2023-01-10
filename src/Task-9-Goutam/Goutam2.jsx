import React from "react";
import { useState } from "react";
function Q18() {
  const [count, setcount] = useState(0);
  const Increment = () => {
    setcount((Val) => {
      return count + 1;
    });
  };
  const Decrement = () => {
    setcount((Val) => {
      return count - 1;
    });
  };
  return (
    <div>
      {" "}
      <button onClick={Increment}> Increment </button>{" "}
      <button onClick={Decrement}> Decrement </button>{" "}
      <h1>The total count is : {count}</h1>{" "}
    </div>
  );
}
export default Q18;
