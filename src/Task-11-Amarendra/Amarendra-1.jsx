import React, { useEffect } from "react";
import { useState, useRef } from "react";
const App = () => {
  const list = ["Amar", "Manju", "Ganesh", "Subhash", "Pragathi"];
  const [filterList, setFilterList] = useState(list);
  const handleChange = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div>
      {" "}
      <input type="text" onChange={handleChange} />{" "}
      {filterList && filterList.map((item, i) => <h2 key={i}>{item}</h2>)}{" "}
    </div>
  );
};
export default App;
