import React from "react";
import { movies } from "../data";


function Movies() {

  // console.log(movies)

  
  const movieList =
    movies.map((mo) =>
      <div key={mo.title}>
        <h3>{mo.title}</h3>
        <p>{mo.time}</p>
        <ul>
          {mo.genres.map((gen) => {
            return (
              <li key={gen}>
                {gen}
              </li>
            )
          })}
        </ul>
      </div>
    );
  

  return (
    <div>
      <h1>
        Movies Page
      </h1>
    {movieList}
    </div>
  );
}

export default Movies;
