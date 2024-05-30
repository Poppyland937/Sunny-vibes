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
const spotifyClientId = "0933722a01c94041a5197d5a9ce5bf0d"; // Replace with your Spotify Client ID
const spotifyClientSecret = "900e9ae7f50747f4a51aa77b13027574"; // Replace with your Spotify Client Secret
const spotifyTokenUrl = "https://accounts.spotify.com/api/token";
const spotifyPlaylistsUrl =
  "https://api.spotify.com/v1/browse/categories/sunny/playlists?limit=5";

async function getSpotifyToken() {
  const response = await fetch(spotifyTokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + btoa(spotifyClientId + ":" + spotifyClientSecret),
    },
    body: "grant_type=client_credentials",
  });
  const data = await response.json();
  return data.access_token;
}

async function getPlaylists() {
  try {
    const token = await getSpotifyToken();
    const response = await fetch(spotifyPlaylistsUrl, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    displayPlaylists(data.playlists.items);
  } catch (error) {
    console.error("Error fetching playlists:", error);
  }
}

function displayPlaylists(playlists) {
  const playlistsDiv = document.getElementById("playlists");
  playlists.forEach((playlist) => {
    const playlistElement = document.createElement("div");
    playlistElement.innerHTML = `
            <img src="${playlist.images[0].url}" alt="${playlist.name}">
            <p>${playlist.name}</p>
            <a href="${playlist.external_urls.spotify}" target="_blank">Listen on Spotify</a>
        `;
    playlistsDiv.appendChild(playlistElement);
  });
}

getPlaylists();
