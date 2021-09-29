let userInput = document.querySelector('.form-control');
let prevSearchEl = document.querySelector('.prev-search');
let currentWeatherEl = document.querySelector('#current-weather');
let forecastEl = document.querySelector('#forecast-info');

// Fetch weather details

function getAPI() {
    requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=0dec5f9d90212222e001cf9eff9b7150';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                let listItem = document.createElement('li');
                currentWeatherEl.textContent = data[i];
                console.log(data);
            }            
        });
}

getAPI();

    // renderInfo(city, data);



// Store weather info
//   $('.btn').on('click', function (event) {
//     let text = $(this).parent().siblings('.input-group').children('.form-control').val()
//     localStorage.setItem('Task', text);
//     event.preventDefault();
// });  