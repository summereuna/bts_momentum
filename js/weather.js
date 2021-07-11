const API_KEY = "8062c6a17475c912b5f37f2c203695b2";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherIcon = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        const { icon } = data.weather[0];
        weatherIcon.innerHTML = `<img src="icons/${icon}.png">`;
        weather.innerText = `${data.weather[0].main}, ${data.main.temp}°C 📍${data.name}`;
});
}

function onGeoError(){
alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);