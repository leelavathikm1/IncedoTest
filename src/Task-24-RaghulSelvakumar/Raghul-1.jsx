import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
function App() {
  const a = ["India", "Pakistan", "Srilanka", "Korea", "USA"];
  const [items, setFilterList] = useState(a);
  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(a);
      return;
    }
    const b = a.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(b);
  };
  return (
    <div className="app">
      {" "}
      <div>
        {" "}
        <label>Search:</label>{" "}
        <input name="query" type="text" onChange={handleSearch} />{" "}
      </div>{" "}
      {items && items.map((item, index) => <div key={index}>{item}</div>)}{" "}
    </div>
  );
}
export default App;
