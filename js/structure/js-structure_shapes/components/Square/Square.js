export const squareElement = function Square(color) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = color();
  });
  return square;
};
