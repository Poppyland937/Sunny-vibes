function findCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-city");
  let city = (cityElement.innerHTML = searchInputElement.value);
  fetchWeather(city);
}
function fetchWeather(city) {
  let apiKey = "c48264o7b5ff7a9343004et42e6b4c41";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(url).then(displayTemperature);
  console.log(url);
}
function displayTemperature(response) {
  let cityTemperature = document.querySelector("#weather-temperature");
  let temperature = Math.round(response.data.temperature.current);
  cityTemperature.innerHTML = temperature;
}
function handleError(error) {
  console.log("Error fetching weather data:", error);
  alert("Unable to retrieve weather data. Please try again later.");
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", findCity);
