import React from "react";
import { useState } from "react";
function ArrayIter() {
  const [searchArray, setSearchArray] = useState([
    "Virat",
    "Mahi",
    "ABD",
    "Bumrah",
    "Maxi",
  ]);
  return (
    <div>
      {" "}
      <ul>
        {" "}
        {searchArray.map((playr, i) => {
          return <li key={i}> {playr} </li>;
        })}{" "}
      </ul>{" "}
    </div>
  );
}
export default ArrayIter;
