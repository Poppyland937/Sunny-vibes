function findCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let city = document.querySelector("#weather-city");
  city.innerHTML = searchInputElement.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", findCity);
