import React, { useEffect } from "react";
import { useState, useRef } from "react";
const App = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      {" "}
      {arr.map((item) => {
        return <h1>{item}</h1>;
      })}{" "}
    </div>
  );
};
export default App;
