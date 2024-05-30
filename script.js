const apiKey = "c48264o7b5ff7a9343004et42e6b4c41";
const weatherUrl = `https://api.shecodes.io/weather/v1/current?query={sydney}&key=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayWeather(data) {
  const weatherDataDiv = document.getElementById("weather-data");
  weatherDataDiv.innerHTML = `
        <p>Location: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

getWeather();
