import React from "react";
import { useParams } from "react-router-dom";

function MovieShow( { movies }){
  const params = useParams()
  // let param = parseInt(params.movieID)
  console.log(params.movieId)
  return (
    <div>
      <h3>{ movies[params.movieId].title}</h3>
    </div>
  )
}

export default MovieShow; 