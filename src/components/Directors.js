import React from "react";
import { directors } from "../data";

function Directors() {

  const directorList =
    directors.map((dir) =>
      <div key={dir.name}>
        <h3>{dir.name}</h3>
        <ul>
          {dir.movies.map((mo) => {
            return (
              <li key={mo}>{mo}</li>
            )
          })}
        </ul>
    </div>
    )

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors;
