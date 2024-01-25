async function getWeather() {
    try {
        const response = await fetch('http://localhost:3000/weather'); // Replace with your API endpoint
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${weatherData.city}</h2>
        <p>Temperature: ${weatherData.temperature}°C</p>
        <p>Condition: ${weatherData.condition}</p>
    `;
}
