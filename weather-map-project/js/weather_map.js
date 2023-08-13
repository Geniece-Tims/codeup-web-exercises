'use strict';
// accessing the map using key
let accessToken = mapboxgl.accessToken = myMapboxToken;
accessToken = mapboxgl.accessToken;
// modifying map with center and zoom
let weatherMap = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-96.7970, 32.7767],
    zoom: 5
});
// adding marker on map. Set to Dallas, TX by default
let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-96.7970, 32.7767])
    .addTo(weatherMap);

// Weather info for location
function weatherInfo(lat, lon) {
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherMapKey,
        lat: lat,
        lon: lon,
        units: "imperial"
    })
        .done(function (data) {
            console.log('5 day forecast', data);
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            for (let i = 0; i < 5; i++) {
                let dayIndex = i * 8;
                let currentData = data.list[dayIndex];
                let todayDate = new Date(currentData.dt * 1000);
                let currentDay = days[todayDate.getDay()];
                let currentMonth = months[todayDate.getMonth()];
                let cardHTML = `
                  <div class="card">
                    <div class="container">
                      <div class="date">${currentDay}, ${currentMonth} ${todayDate.getDate()}</div>
                      <div class="temperature">${currentData.main.temp_max} °F / ${currentData.main.temp_min} °F</div>
                      <div class="wi wi-owm-${currentData.weather[0].id}"></div>
                      <div class="description">Description: ${currentData.weather[0].description}</div>
                      <div class="humidity">Humidity: ${currentData.main.humidity}</div>
                      <div class="wind">Wind: ${currentData.wind.gust}</div>
                      <div class="pressure">Pressure: ${currentData.main.pressure}</div>
                    </div>
                  </div>
                `;
                $(`#card-${i + 1}`).html(cardHTML);
            }
            $("#current-city").html(`Current Location: ${data.city.name}, ${data.city.country}`);
        });
}

//Weather info based on lng and lat
function updateWeatherInfo(lngLat) {
    let lat = lngLat.lat;
    let lon = lngLat.lng;
    weatherInfo(lat, lon);
}

// Using onDragEnd function in order to have draggable marker and print lon and lat value on webpage
function onDragEnd() {
    let lngLat = marker.getLngLat();
    updateWeatherInfo(lngLat);
}

marker.on('dragend', onDragEnd);

//weather info based on search
function searchLocation(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    let input = document.getElementById("search-box").value;
    console.log("input is:" + input);
    //Remove the existing marker if it exists
    if (marker) {
        marker.remove();
    }
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherMapKey,
        q: input,
        zip: input,
        units: "imperial"
    })
        .done(function (data) {
            console.log('5 day forecast', data);
            console.log(data.city.coord.lat);
            console.log(data.city.coord.lon);
            geocode(input, accessToken).then(function (result) {
                console.log(result);
                var newMarker = new mapboxgl.Marker({
                    draggable: true
                }).setLngLat(result);
                newMarker.addTo(weatherMap);
                weatherMap.panTo({lon: data.city.coord.lon, lat: data.city.coord.lat}, {duration: 5000});
                // Update the marker variable to the new marker
                marker = newMarker;
                // Make the marker draggable
                marker.on('dragend', function () {
                    onDragEnd(marker.getLngLat());
                });
                // Fetch weather information for the new location
                updateWeatherInfo(marker.getLngLat());
            });
        });
}

var inputSubmit = document.querySelector('#search');
inputSubmit.addEventListener('click', searchLocation);
weatherMap.on('click', function (e) {
    // Remove the existing marker if it exists
    if (marker) {
        marker.remove();
    }
    // Create a new marker at the clicked coordinates
    var newMarker = new mapboxgl.Marker({
        draggable: true
    }).setLngLat(e.lngLat);
    newMarker.addTo(weatherMap);
    // Update the marker variable to the new marker
    marker = newMarker;
    // Make the marker draggable
    marker.on('dragend', function () {
        onDragEnd(marker.getLngLat());
    });
    // Fetch weather information for the clicked location
    updateWeatherInfo(marker.getLngLat());
});
// Fetch weather information for the initial location
updateWeatherInfo(marker.getLngLat());

