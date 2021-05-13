import React from "react";
import "./Rows.css";
import axios from "../axios";

import { useState, useEffect } from "react";

const base_url = "https://image.tmdb.org/t/p/original/";

function Rows({title, fetchUrl , isImageBigger}) {
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

       <h2 className="row__heading">{title}</h2>
      <div className= "row__poster">
        {movies.map((movie) => {
          return (
            <img className={`row__images ${isImageBigger && "row__imagesLarger"}`}
              key={movie.id}
              src={`${base_url}${isImageBigger? movie.poster_path: movie.backdrop_path}`}
              alt={movie.name}
            ></img>
          );
        })}

       
      </div>
    </div>
  );
}

export default Rows;
