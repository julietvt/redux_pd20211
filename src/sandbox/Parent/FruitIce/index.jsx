import React, { useState } from "react";

function FruitIce(props) {
  const [type, setType] = useState("Fruit multi Ice");
  const {temperature, setTemperature} = props;
  return (
    <div>
      <p>FruitIce component</p>
      <p>Температура {temperature}</p>
      <p>Вид {type}</p>
    </div>
  );
}

export default FruitIce;