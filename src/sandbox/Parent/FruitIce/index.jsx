import React, { useState } from "react";

function FruitIce() {
  const [temperature, setTemperature] = useState(0);
  const [type, setType] = useState("Fruit multi Ice");
  return (
    <div>
      <p>FruitIce component</p>
      <p>Температура {temperature}</p>
      <p>Вид {type}</p>
    </div>
  );
}

export default FruitIce;