export const pentagonElement = function Pentagon(color) {
  let pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = color();
  });
  return pentagon;
};
