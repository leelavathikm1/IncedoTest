import React from "react";
import { useState } from "react";
const SearchFilter = () => {
  const [searchItem, setSearchItem] = useState([
    "mango",
    "banana",
    "apple",
    "orange",
  ]);
  const [item, setItem] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const handleChange = (event) => {
    setSearchWord(event.target.value);
    let newItem = searchItem.filter((itm, i) => {
      return itm.includes(event.target.value);
    });
    setItem(newItem);
  };
  return (
    <div>
      {" "}
      <input
        type="search"
        placeholder="Search Item"
        onChange={(e) => handleChange(e)}
      />{" "}
      {item.map((itm, i) => {
        return <p key={i}>{itm}</p>;
      })}{" "}
    </div>
  );
};
export default SearchFilter;
