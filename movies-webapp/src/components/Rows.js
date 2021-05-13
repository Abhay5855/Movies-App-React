import React from "react";
import "./Rows.css";
import axios from "../axios";

import { useState, useEffect } from "react";

const base_url = "https://image.tmdb.org/t/p/original/";

function Rows({title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }

    fetchData();
  },[fetchUrl]);

  return (
    <div className="row">

        <h2>{title}</h2>
      <div className="row__poster">
        {movies.map((movie) => {
          return (
            <img className="row__images"
              key={movie.id}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            ></img>
          );
        })}

        {/* {props.movies.map((movie) => (
          <img className="row__images" src={movie.Poster} alt="movie"></img>
        ))} */}
      </div>
    </div>
  );
}

export default Rows;
