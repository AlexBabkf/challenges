import { getRandomColor } from "./utils/randomColor.js";
import { circleElement } from "./components/Circle/Circle.js";
import { squareElement } from "./components/Square/Square.js";
import { pentagonElement } from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

root.append(
  circleElement(getRandomColor),
  squareElement(getRandomColor),
  pentagonElement(getRandomColor)
);
