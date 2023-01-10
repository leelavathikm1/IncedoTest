import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Search() {
  const [InputData, setInputData] = useState([]);
  const [SearchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setInputData(response.data);
    });
  }, []);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = InputData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setSearchResults(filteredData);
    } else {
      setSearchResults(InputData);
    }
  };
  return <div> onChange={(e) => searchItems(e.target.value)} </div>;
}
