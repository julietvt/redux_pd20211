import React, { useState } from "react";

function Tea() {
  const [temperature, setTemperature] = useState(90);
  const [type, setType] = useState("Black");
  return (
    <div>
      <p>Tea component</p>
      <p>Температура {temperature}</p>
      <p>Вид чая {type}</p>
    </div>
  );
}

export default Tea;