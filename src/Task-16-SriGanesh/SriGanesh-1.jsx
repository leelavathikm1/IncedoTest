import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
function App() {
  const group = ["Ganesh", "Siva", "Mahesh", "Ramesh"];
  const [Group, setFilterList] = useState(group);
  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(group);
      return;
    }
    const values = group.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(values);
  };
  return (
    <div className="app">
      {" "}
      <div>
        {" "}
        <label>Search:</label>
        <br /> <input name="query" type="text" onChange={handleSearch} />{" "}
      </div>{" "}
      {Group && Group.map((item, index) => <div key={index}>{item}</div>)}{" "}
    </div>
  );
}
export default App;
