console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   elements = event.target.elements;
  //   console.log(elements.firstName.value);
  //   console.log(elements.firstName.value);
  const formData = new FormData(event.target);
  console.log(Object.fromEntries(formData));

  const firstName = event.target.elements.firstName.value;
  const age = event.target.elements.age.value;
  const badness = event.target.elements.badness.value;

  console.log(`The age-badness-sum of ${firstName} is ${age + badness}`);
});
