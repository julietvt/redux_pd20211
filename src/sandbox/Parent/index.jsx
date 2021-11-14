import React, { useState } from "react";
import Tea from './Tea';
import FruitIce from "./FruitIce";

function Parent() {
  const [temperature, setTemperature] = useState(0);
  return (
    <div>
      <Tea temperature={temperature + 90} setTemperature={setTemperature} />
      <FruitIce temperature={temperature} setTemperature={setTemperature} />
    </div>
  );
}

export default Parent;