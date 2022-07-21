import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {

  const moviesToRender = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));

  return <ul>{ moviesToRender }</ul>;
}

export default MoviesList;