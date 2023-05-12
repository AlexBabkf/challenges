import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  // const foundCountry = countries.find((dict) =>
  //   dict.name.toLowerCase().startsWith(searchString)
  // );

  // if (foundCountry) {
  //   const countryElement = Country(foundCountry);
  //   container.append(countryElement);
  // }
  const foundCountries = countries.filter((dict) =>
    dict.name.toLowerCase().startsWith(searchString)
  );

  foundCountries.forEach((country) => {
    if (country) {
      const countryElement = Country(country);
      container.append(countryElement);
    }
  });
});
