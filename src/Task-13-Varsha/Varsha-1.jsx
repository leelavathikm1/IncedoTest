import React, { useState } from "react";
function Test() {
  const fruits = ["apple", "mango", "pineapple", "watermelon", "orange"];
  const [searchList, setSearchList] = useState(fruits);
  const SearchingText = (event) => {
    const filterValues = fruits.filter(
      (item) => item.indexOf(event.target.value) !== -1
    );
    if (event.target.value === "") {
      setSearchList(fruits);
      return;
    }
    setSearchList(filterValues);
  };
  return (
    <div>
      {" "}
      <input type="text" name="search" onChange={SearchingText} />{" "}
      {searchList && searchList.map((item, i) => <div key={i}>{item}</div>)}{" "}
    </div>
  );
}
export default Test;
