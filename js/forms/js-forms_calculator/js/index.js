console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result;
  const option = event.target;

  // let a = parseInt(option.numberA.value);
  // let b = parseInt(option.numberB.value);

  // const formData = new FormData(event.target);
  // formData.get("value");
  // cl = Object.fromEntries(formData);
  // console.log(cl.operator);
  // console.log(cl);

  // --v-- write your code here --v--
  console.log(option.elements);
  if (option.addition.checked) {
    result = add(a, b);
  } else if (option.subtraction.checked) {
    result = subtract(a, b);
  } else if (option.multiplication.checked) {
    result = multiply(a, b);
  } else if (option.division.checked) {
    result = divide(a, b);
  }
  // --^-- write your code here --^--
  resultOutput.textContent = result;
});
