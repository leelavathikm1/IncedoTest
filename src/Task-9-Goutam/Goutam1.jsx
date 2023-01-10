import React from "react";
import { useState } from "react";
function Q17() {
  const [search, setSearch] = useState([
    "Gowtham",
    "nibras",
    "murali",
    "uvan",
    "raj",
  ]);
  const [duparr, setduparr] = useState([]);
  const [searching, setSearching] = useState("");
  const handleChange = (event) => {
    setSearching(event.target.value);
    let newarr = search.filter((word, i) => {
      return word.includes(event.target.value);
    });
    console.log(duparr);
    setduparr(newarr);
  };
  return (
    <div>
      {" "}
      <input type="text" onChange={(e) => handleChange(e)} />{" "}
      {duparr.map((word, i) => {
        return <p key={i}> {word} </p>;
      })}{" "}
    </div>
  );
}
export default Q17;
