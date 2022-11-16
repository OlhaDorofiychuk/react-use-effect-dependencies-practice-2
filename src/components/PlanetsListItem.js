import { useState, useEffect } from "react";

function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState("");

  console.log("Planet", planet);

  useEffect(() => {
    if (planet.films.length === 0) return;

    fetch(planet.films[0])
      .then((res) => res.json())
      .then((dataFilm) => setFirstFilm(dataFilm.title));
  }, [planet]);

  return (
    <li>
      <b>{planet.name}</b>- <u>First Film</u> <i>{firstFilm}</i>
    </li>
  );
}

export default PlanetsListItem;
