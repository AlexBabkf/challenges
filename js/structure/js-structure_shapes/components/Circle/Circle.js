const circleElement = function Circle(color) {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = color();
  });
  return circle;
};

export { circleElement };
