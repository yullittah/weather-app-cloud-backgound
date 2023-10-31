let currentTime = new Date();
let dayIndex = currentTime.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let monthIndex = currentTime.getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let year = currentTime.getFullYear();
let dateToday = currentTime.getDate();
let daily = document.querySelector("#daily");
daily.innerHTML = ` ${days[dayIndex]} ${dateToday}  ${months[monthIndex]}  ${year}`;
//time
function updateTime() {
  let now = new Date();
  let time = document.querySelector("#time");
  let dateToday = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let seconds = now.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  time.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000); // Run updateTime() every second

// city
function displayWeatherCondition(response) {
  console.log(response);
  document.querySelector("#area").innerHTML = response.data.name;
  document.querySelector("#degrees").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

  document.querySelector("#speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function search(city) {
  let apiKey = "0122ea8bfc22a91b9d2b02a451bd5eb4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Tokyo");

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#degrees");
  temperatureElement.innerHTML = 91;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#degrees");
  temperatureElement.innerHTML = 33;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

// Let apiKey="3a0b4d774da7bac2b42ff63cadb0fc55";
//let apiUrl="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
// let apiUrlreverse="http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";
