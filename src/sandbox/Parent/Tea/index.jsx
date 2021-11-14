import React, { useState } from "react";

function Tea(props) {
  const {temperature, setTemperature} = props;
  const [classTea, setClassTea] = useState("Black");
  return (
    <div>
      <p>Tea component</p>
      <p>Температура {temperature}</p>
      <p>Вид чая {classTea}</p>
    </div>
  );
}

export default Tea;