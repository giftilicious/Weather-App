// let cityName = document.querySelector('.form-control');
let searchBtnEl = document.querySelector('#search-btn');
let prevSearchEl = document.querySelector('.prev-search');
let currentWeatherEl = document.querySelector('#current-weather');
let futureForecast = document.querySelector('.card');
// let forecastEl = document.querySelector('#forecast-info');
let weatherAPIKey = '0dec5f9d90212222e001cf9eff9b7150';



// let weatherData = document.getElementById("weather_data");

searchBtnEl.addEventListener('click', function (event) {
    event.preventDefault();
    let cityName = document.querySelector('.form-control').value;
    requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "=&appid=" + weatherAPIKey;
    if (cityName == "") {
        alert("Enter a city name");
    } else {
        fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const temperature = document.createElement("p");
            temperature.textContent = "Temperature: " + data.main.feels_like;
            currentWeatherEl.appendChild(temperature) 
            futureForecast.appendChild(temperature) 

            // const wind = document.createElement("p");
            // wind.textContent = "Wind: " + data.main.humidity;
            // currentWeatherEl.appendChild(wind)
            // futureForecast.appendChild(wind)

            // const humidity = document.createElement("p");
            // humidity.textContent = "Humidity: " + data.main.humidity;
            // currentWeatherEl.appendChild(humidity)
            // futureForecast.appendChild(humidity)  

            // const uvIndex = document.createElement("p");
            // uvIndex.textContent = "UV Index: " + data.main.humidity;
            // currentWeatherEl.appendChild(uvIndex) 
            // futureForecast.appendChild(uvIndex) 
            })           
    }
});

// Store weather info
//   $('.btn').on('click', function (event) {
//     let text = $(this).parent().siblings('.input-group').children('.form-control').val()
//     localStorage.setItem('Task', text);
//     event.preventDefault();
// });  



//////////////////////////////////////////////////////////

// Submit button
// function showWeather(event) {
//     // Prevent default action
//     event.preventDefault();
//     console.log(event);
//     let result = userInput.value;
//     currentWeatherEl.textContent = result;
// }

// searchBtnEl.addEventListener("click", showWeather);

// Fetch weather details
// function getCurrentAPI() {
//     let city = userInput;
//     requestUrl = "https://api.openweathermap.org/data/2.5/weather?q" + city + "=&appid=" + weatherAPIKey;
//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
            // const temperature = document.createElement("p");
            // temperature.textContent = "Temperature: " + data.main.feels_like;
            // currentWeatherEl.appendChild(temperature) 

            // const humidity = document.createElement("p");
            // humidity.textContent = "Humidity: " + data.main.humidity;
            // currentWeatherEl.appendChild(humidity)

            // const humidity = document.createElement("p");
            // humidity.textContent = "Humidity: " + data.main.humidity;
            // currentWeatherEl.appendChild(humidity)       
//         });
// }

// getCurrentAPI();

 // Weather info:
 // Temperature
 // Wind
 // Humidity
 // UV Index (with colour alert)


 // Fetch 5-day forecast details
//  function getForecastAPI() {

//  }


// User input





