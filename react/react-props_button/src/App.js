import React from "react";
import "./styles.css";

// function Button() {
//   return function handleClick() {
//     console.log("It clicks");
//   };
// }

export default function App({
  onClick,
  color,
  disabled,
  text,
  backgroundColor,
}) {
  return (
    <button
      onClick={onClick}
      style={{ height: "100px" }}
      color={color}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
