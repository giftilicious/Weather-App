let searchBtnEl = document.querySelector('#search-btn');
let currentWeatherEl = document.querySelector('#current-weather');
let oldResultsEl = document.querySelector('#oldResults');
let weatherAPIKey = '0dec5f9d90212222e001cf9eff9b7150';
let storedResults =JSON.parse(localStorage.getItem('cities'))|| []

searchBtnEl.addEventListener('click', function (event) {
    event.preventDefault();
    let cityName = document.querySelector('.form-control').value;
    getCurrentWeather(cityName)
});

for (let index = 0; index < storedResults.length; index++) {
    makeList(storedResults[index])
    
}

function makeList(city) {
    let prev = document.querySelector('.prev-search')
    let p = `<p onClick="getCurrentWeather(this.textContent)">${city}</p>`
    prev.innerHTML += p
}

function getCurrentWeather(cityName) {

if(storedResults.indexOf(cityName)==-1){
    storedResults.push(cityName)
    localStorage.setItem('cities', JSON.stringify(storedResults))
    makeList(cityName)
}
    
    requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + weatherAPIKey;
    if (cityName == "") {
        alert("Enter a city name");
    } else {
        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                currentWeatherEl.innerHTML=""
                let location = document.createElement('h3');
                let weatherUrl = data.weather[0].icon;
                let icon = `https://openweathermap.org/img/w/${weatherUrl}.png`;
                location.innerHTML = `${data.name} <img src=${icon}>`;
                currentWeatherEl.appendChild(location);

                let temperature = document.createElement("p");
                temperature.textContent = "Temperature: " + data.main.feels_like + "°F";
                currentWeatherEl.appendChild(temperature);

                let wind = document.createElement("p");
                wind.textContent = "Wind: " + data.wind.gust + " MPH";
                currentWeatherEl.appendChild(wind);

                let humidity = document.createElement("p");
                humidity.textContent = "Humidity: " + data.main.humidity;
                
                currentWeatherEl.appendChild(humidity);

                weatherForecast(data.coord.lat, data.coord.lon);
            })
    }
}

function weatherForecast(lat, lon) {

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherAPIKey}`).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)

        let uvIndex = document.createElement("p");
        uvIndex.textContent = "UV Index: " + data.current.uvi;
        currentWeatherEl.appendChild(uvIndex);

        let fiveday = document.querySelector('#fiveday');

        fiveday.innerHTML=""
        //for loop to create the card element
        for (let index = 0; index < 5; index++) {
            //put the data from the api call on the element
            let card = `
            <div id="fiveday">
                <div class="card card-body" style="width: 16rem; height: 20rem;">                                   
                    <p>Temperature: ${data.daily[index].feels_like.day} °F</p>                 
                    <p>Wind: ${data.daily[index].wind_gust} MPH</p>                 
                    <p>Humidity: ${data.daily[index].humidity}</p>                 
                    <p>UV Index: ${data.daily[index].uvi}</p>                 
                </div>
            </div>
        `
            //append to an existing element on the html
            fiveday.innerHTML += card
        }
    });
}


