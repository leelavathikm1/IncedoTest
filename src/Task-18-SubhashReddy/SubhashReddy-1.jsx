import React, { useState } from "react";
import "./styles.css";
function App() {
  const Countries = [
    "America",
    "India",
    "Australia",
    "Britain",
    "France",
    "Spain",
  ];
  const [filterCountries, setFilterCountries] = useState(Countries);
  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = Countries.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="app">
      {" "}
      <div>
        {" "}
        Search: <input name="query" type="text" onChange={handleSearch} />{" "}
      </div>{" "}
      {filterCountries &&
        filterCountries.map((item, index) => (
          <div key={index}>{item}</div>
        ))}{" "}
    </div>
  );
}
