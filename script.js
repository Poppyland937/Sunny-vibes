function findCity(event) {
  event.preventDefault;
  let searchInputElemet = document.querySelector("#search-form-input");
  let city = document.querySelector("#weather-city");
  city.innerHTML = searchInputElemet.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", findCity);
