import React from "react";
import "./Rows.css";
function Rows(props) {
  return (
    <div className="row">
      <div className="row__poster">
        {props.movies.map((movie, idx) => (
          <img className="row__images" src={movie.Poster} alt=""></img>
        ))}
      </div>
    </div>
  );
}

export default Rows;
