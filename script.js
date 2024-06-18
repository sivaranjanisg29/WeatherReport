const weatherData = {
    "Mumbai": { temp: 30, condition: "sunny" },
    "Delhi": { temp: 35, condition: "clear sky" },
    "Bangalore": { temp: 25, condition: "cloudy" },
    "Hyderabad": { temp: 32, condition: "sunny" },
    "Ahmedabad": { temp: 38, condition: "hot" },
    "Chennai": { temp: 34, condition: "humid" },
    "Kolkata": { temp: 29, condition: "rainy" },
    "Surat": { temp: 33, condition: "clear sky" },
    "Pune": { temp: 28, condition: "moderate" },
    "Jaipur": { temp: 36, condition: "hot" }
};

function getWeather() {
    const city = document.getElementById('city-select').value;
    const weather = weatherData[city];
    if (weather) {
        displayWeather(city, weather);
    } else {
        document.getElementById('weather-result').innerHTML = `<p>City not found</p>`;
    }
}

function displayWeather(city, weather) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h2>${city}</h2>
        <p>Temperature: ${weather.temp}°C</p>
        <p>Condition: ${weather.condition}</p>
    `;
}
