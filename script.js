// Get API key from OpenWeatherMap
const apiKey = '496eee187ec824d75f2ef8a09ac68553' // Replace with your actual OpenWeatherMap API key

// Get references to DOM elements
const cityInput = document.getElementById('city');
const searchBtn = document.getElementById('search');
const locationElem = document.getElementById('location');
const temperatureElem = document.getElementById('temperature');
const descriptionElem = document.getElementById('description');

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

// Function to fetch weather data
async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.cod === 200) {
            // Update the DOM with weather data
            locationElem.textContent = `Location: ${data.name}, ${data.sys.country}`;
            temperatureElem.textContent = `Temperature: ${data.main.temp}°C`;
            descriptionElem.textContent = `Weather: ${data.weather[0].description}`;
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data');
    }
}
