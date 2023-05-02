console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

console.log(likeButton);
// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement("article");
article.classList.add("post");

const p = document.createElement("p");
p.classList.add("post__content");
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username";

// footer.textContent(span);

const button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "post__button");
button.setAttribute("data-js", "like-button");
button.textContent = " ♥ Like";
button.addEventListener("click", handleLikeButtonClick);

footer.append(span, button);
article.append(p, footer);
document.body.append(article);
document.body.append(article);
document.body.append(article);


