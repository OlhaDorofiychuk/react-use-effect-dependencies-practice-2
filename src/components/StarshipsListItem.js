import { useState, useEffect } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState("");

  console.log({ starship });

  useEffect(() => {
    if (starship.pilots.length === 0) {
      setFirstPilot("unknown");
    }
    fetch(starship.pilots[0])
      .then((res) => res.json())
      .then((dataPilot) => setFirstPilot(dataPilot.name));
  }, [starship]);

  return (
    <li>
      <b>{starship.name}</b> - <u>First Pilot :</u> <i>{firstPilot}</i>
    </li>
  );
}

export default StarshipsListItem;
