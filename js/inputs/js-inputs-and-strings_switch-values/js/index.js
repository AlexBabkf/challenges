/*

Switch the input values of the two input fields when clicking the button

- [ ] Add a second input element to the index.html
- [ ] Assign the second input element to a variable
- [ ] Add a third button (a switch button) to the index.html
- [ ] Assign the third button to a variable
- [ ] Make sure that when the switch button is clicked,
 the values of the two input fields are being switched
- [ ] Make sure that all three buttons work on both 
input fields

Hint: the HTML entity for the switch button is: &updownarrow

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

const second = document.querySelector('[data-js="second-input"]');
const upDown = document.querySelector('[data-js="up-down"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  second.value = second.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  second.value = second.value.toLowerCase();
});

upDown.addEventListener("click", () => {
  switchToSnd = firstInput.value;
  switchToFst = second.value;
  firstInput.value = switchToFst;
  second.value = switchToSnd;
});
