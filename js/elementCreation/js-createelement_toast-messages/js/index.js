console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Exercise: Append a new entry to the toast messages container
  const newEntry = document.createElement("li");
  newEntry.classList.add("toast-container__message");
  console.log(newEntry);
  newEntry.textContent = "A new message";

  toastContainer.append(newEntry);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
