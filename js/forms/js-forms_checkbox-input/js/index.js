const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

showTosError();
success.setAttribute("hidden", "");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!tos.checked) {
    success.setAttribute("hidden", "");
    alert("Form submitted");
    showTosError();
  } else {
    hideTosError();
    success.removeAttribute("hidden");
  }

  // --^-- write your code here --^--
  // alert("Form submitted");
  // eslint-disable-next-line no-alert
});
