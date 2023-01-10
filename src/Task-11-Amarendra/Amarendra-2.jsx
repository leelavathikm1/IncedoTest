import React, { useEffect } from "react";
import { useState, useRef } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>{" "}
      {count}{" "}
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>{" "}
    </div>
  );
};
export default App;
