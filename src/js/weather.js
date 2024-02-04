const userInfoIcon = document.querySelector("#header__user-info");
const CityInfo = document.querySelector("#weather-info span:first-child");
const weatherInfo = document.querySelector("#weather-info span:last-child");

const API = "7b61241328783779761bdbfb72ae440c";

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric&lang=en`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      CityInfo.innerHTML = `지역 : ${data.name}`;
      weatherInfo.innerHTML = `날씨 : ${data.weather[0].main}`;
    });
};

const onGeoError = () => {
  alert("Can't find you. No weather for you");
};

const getWeather = () => {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
};

userInfoIcon.addEventListener("click", getWeather);
