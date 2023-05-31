import React from "react";
import "./styles.css";

function Sum(valueA, valueB) {
  return valueA + valueB;
}

export default function App({props}) {
  return (
    <h1>
      {props.valueA} + {props.valueB} = {Sum(props.valueA, props.valueB)}
    </h1>
  );
}
