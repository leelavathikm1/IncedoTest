import "./App.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import SearchBox from "./components/SearchBox";
import MovieList from "./components/MovieList";
import $ from "jquery";
const App = () => {
  const [value, setValue] = useState([]);
  const reference = useRef(null);
  const [search, setSearch] = useState("");
  const getMovieRequest = async (search) => {
    const url = "http://www.omdbapi.com/?s=${search}&apikey=263d22d8";
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setValue(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(search);
  }, [search]);
  return (
    <div className="container-fluid movie-app">
      {" "}
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />{" "}
      <div className="image-container">
        {" "}
        {value.map((movie, index) => (
          <div>
            {" "}
            <img src={movie.Poster} alt="movie"></img>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default App;
