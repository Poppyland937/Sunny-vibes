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
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  weatherDataDiv.innerHTML = `
        <p>Location: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Sunrise: ${sunrise}</p>
        <p>Sunset: ${sunset}</p>
    `;
}

getWeather();

function displayWeather(data) {
  const weatherDataDiv = document.getElementById("weather-data");
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  const weatherDescription = data.weather[0].description;

  weatherDataDiv.innerHTML = `
        <p>Location: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${weatherDescription}</p>
        <p>Sunrise: ${sunrise}</p>
        <p>Sunset: ${sunset}</p>
    `;

  changeTheme(weatherDescription);
}

function changeTheme(description) {
  const body = document.body;
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("section");

  if (description.includes("sunny") || description.includes("clear")) {
    body.style.backgroundColor = "#ffeb3b";
    body.style.color = "#333";
    header.style.backgroundColor = "#ffc107";
  } else if (description.includes("cloud")) {
    body.style.backgroundColor = "#90a4ae";
    body.style.color = "#fff";
    header.style.backgroundColor = "#607d8b";
  } else if (description.includes("rain") || description.includes("drizzle")) {
    body.style.backgroundColor = "#4fc3f7";
    body.style.color = "#fff";
    header.style.backgroundColor = "#03a9f4";
  } else {
    body.style.backgroundColor = "#bdbdbd";
    body.style.color = "#fff";
    header.style.backgroundColor = "#757575";
  }

  sections.forEach((section) => {
    section.style.backgroundColor = body.style.backgroundColor;
    section.style.color = body.style.color;
  });
}

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
const activities = [
  "Go for a walk in the park",
  "Have a picnic",
  "Read a book outside",
  "Do some gardening",
  "Ride a bike",
  "Practice yoga outdoors",
  "Take photos of nature",
  "Go for a hike",
  "Play a sport",
  "Have a barbecue",
];

function displayActivities() {
  const activitiesList = document.getElementById("activities-list");
  activities.forEach((activity) => {
    const activityElement = document.createElement("div");
    activityElement.textContent = activity;
    activitiesList.appendChild(activityElement);
  });
}

displayActivities();
const affirmations = [
  "You are capable of amazing things.",
  "Believe in yourself and all that you are.",
  "Every day is a second chance.",
  "You are stronger than you think.",
  "Positive mind. Positive vibes. Positive life.",
  "You are enough just as you are.",
  "Start each day with a grateful heart.",
  "You are doing great.",
  "Believe in the power of yet.",
  "You are your only limit.",
];

function displayAffirmation() {
  const affirmationText = document.getElementById("affirmation-text");
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  affirmationText.textContent = affirmations[randomIndex];
}

displayAffirmation();
document
  .getElementById("share-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const experience = document.getElementById("experience").value;
    const photoUrl = document.getElementById("photo-url").value;

    const sharedExperiencesDiv = document.getElementById("shared-experiences");
    const experienceElement = document.createElement("div");
    experienceElement.className = "shared-experience";
    experienceElement.innerHTML = `
        <h3>${name} from ${location}</h3>
        <p>${experience}</p>
        <img src="${photoUrl}" alt="Sunny Day Photo" style="max-width: 100%;">
    `;
    sharedExperiencesDiv.appendChild(experienceElement);

    document.getElementById("share-form").reset();
  });
