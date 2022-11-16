import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState("");

  console.log("person", person);

  useEffect(() => {
    fetch(person.homeworld)
      .then((res) => res.json())
      .then((dataPlanet) => setHomeworld(dataPlanet.name));
  }, [person]);
  return (
    <ul>
      <li>
        <b></b>
        {person.name} - <u>Homeworld</u>: <i>{homeworld}</i>
      </li>
    </ul>
  );
}

export default PeopleListItem;
