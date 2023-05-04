console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let i = 1; i < 6; i++) {
    img = document.createElement("img");
    img.setAttribute("name", i);
    if (i <= filledStars) {
      img.setAttribute("src", "assets/star-filled.svg");
    } else {
      img.setAttribute("src", "assets/star-empty.svg");
    }
    starContainer.append(img);
  }

  //--^-- your code here --^--
}
renderStars();

starContainer.addEventListener("click", (event) => {
  const num = event.target.name;
  renderStars(num);
});
