const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = `79f30ac35084c81c2f7e869d5d395932`;

function geoOk (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API_KEY}&units=metric`;

    fetch (url)
    .then((response) => response.json())
    .then((data) => {
    weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)} ℃`;
    // city.innerText = data.name;    
    });
    
}

function geoError () {
    alert ("We don't have a weather information");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);