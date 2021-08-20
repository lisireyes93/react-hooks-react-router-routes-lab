import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList =
    actors.map((act) =>
      <div key={act.name}>
        <h3>{act.name}</h3>
        <ul>
          {act.movies.map((mov) => {
            <li key={mov}>{mov}</li>
          })}
        </ul>
    </div>
    )
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
}

export default Actors;
