// let cityName = document.querySelector('.form-control');
let searchBtnEl = document.querySelector('#search-btn');
// let prevSearchEl = document.querySelector('.prev-search');
// let prevSearchEl = document.querySelector('#city-list');
let currentWeatherEl = document.querySelector('#current-weather');
let futureForecast = document.querySelector('.card');
let oldResultsEl = document.querySelector('#oldResults');
// let forecastEl = document.querySelector('#forecast-info');
let weatherAPIKey = '0dec5f9d90212222e001cf9eff9b7150';



// let weatherData = document.getElementById("weather_data");

searchBtnEl.addEventListener('click', function (event) {
    event.preventDefault();
    let cityName = document.querySelector('.form-control').value;
    requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + weatherAPIKey;
    if (cityName == "") {
        alert("Enter a city name");
    } else {
        fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let location = document.createElement('h3');
            let weatherUrl = data.weather[0].icon;
            let icon = `https://openweathermap.org/img/w/${weatherUrl}.png`
            location.innerHTML = `${data.name} <img src=${icon}>`;
            currentWeatherEl.appendChild(location);
            // futureForecast.appendChild(city);
            
            let temperature = document.createElement("p");
            temperature.textContent = "Temperature: " + data.main.feels_like;
            currentWeatherEl.appendChild(temperature); 
            // futureForecast.appendChild(temperature); 

            let wind = document.createElement("p");
            wind.textContent = "Wind: " + data.wind.gust + " km/hr";
            currentWeatherEl.appendChild(wind)
            // futureForecast.appendChild(wind)

            let humidity = document.createElement("p");
            humidity.textContent = "Humidity: " + data.main.humidity;
            currentWeatherEl.appendChild(humidity)
            // futureForecast.appendChild(humidity)  

            let uvIndex = document.createElement("p");
            uvIndex.textContent = "UV Index: " + data.main.humidity;
            currentWeatherEl.appendChild(uvIndex) 
            // futureForecast.appendChild(uvIndex) 
            })   
        .then(function (data) {
            let weatherUrl = data.weather[0].icon;
            let icon = `https://openweathermap.org/img/w/${weatherUrl}.png`
            location.innerHTML = `${data.name} <img src=${icon}>`;

            let temperature = document.createElement("p");
            temperature.textContent = "Temperature: " + data.main.feels_like + "°C";
            futureForecast.appendChild(temperature); 
        })        
    }
});



// let cityList = [];

// function renderCity() {
//     // Clear todoList element and update todoCountSpan
//     // prevSearchEl.innerHTML = "";
//     // oldResultsEl.textContent = cityList.length;
  
//     // Render a new li for each todo
//     for (let i = 0; i < cityList.length; i++) {
//       let city = cityList[i];
  
//       let li = document.createElement("li");
//       li.textContent = city;
//       li.setAttribute("data-index", i);
  
//     //   let button = document.createElement("button");
//     //   button.textContent = "Complete ✔️";
  
//     //   li.appendChild(button);
//     prevSearchEl.appendChild(li);
//     }
//   }

//////////////////////////////////////////////////////////

// Store weather info
//   $('#search-btn').on('click', function (event) {
//     let text = $(this).parent().siblings('.card').children('.city-list').val()
//     // localStorage.setItem('Task', text);
//     event.preventDefault();
// });  

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





