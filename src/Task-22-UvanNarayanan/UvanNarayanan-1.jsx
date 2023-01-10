import React, { useState } from "react";
function SearchFil() {
  const [array, setArray] = useState([
    "India",
    "America",
    "Canada",
    "Australia",
    "New Zealand",
  ]);
  const [copyArr, setCopyArr] = useState([]);
  const [searchCon, setSearchCon] = useState("");
  const handleChange = (e) => {
    setSearchCon(e.target.value);
    let newArr = array.filter((word, i) => {
      return word.includes(e.target.value);
    });
    console.log(newArr);
    setCopyArr(newArr);
  };
  return (
    <div>
      {" "}
      <input
        type="search"
        placeholder="Search Country"
        onChange={(e) => handleChange(e)}
      />{" "}
      {copyArr.map((word, i) => {
        return <p key={i}> {word} </p>;
      })}{" "}
    </div>
  );
}
export default SearchFil;
