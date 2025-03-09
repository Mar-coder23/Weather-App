// elements for input, search btn, container, the images, hiddenweather
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherContainer = document.querySelector('.weather-container');
const weatherIcon = document.querySelector('.weather-icon');
const hiddenWeather = document.querySelector('.content-container');

// API Url & API key from Openweathermap
const apiKey = "42a1dea9fa2d0a2c8c91f8d91d13f229";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
// the start of the weather container height
weatherContainer.style.height = '12em';

// async to fetch API data
async function checkWeather(city) {
    // getting the response from the url, the city and the key
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // If the response is 404 display alert error
    if(response.status === 404){
        alert('Wrong Input, Type in correctly.');
    }
    // else do all of this
    else{
        // the data is getting the response from json file
        let data = await response.json();

        console.log(data);
        // grab from object the data which is the awating response from API
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + '°F';
        document.querySelector(".humidity-percent").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind-speed").innerHTML = Math.round( data.wind.speed) + " mp/h";

        // if the object data in array class key main is equal to certain type, then change image
        if(data.weather[0].main === "Clouds"){
                weatherIcon.src = "images/clouds.png"
            }
            else if(data.weather[0].main === "Clear"){
                weatherIcon.src = "images/clear.png"
            }
            else if(data.weather[0].main === "Drizzle"){
                weatherIcon.src = "images/drizzle.png"
            }
            else if(data.weather[0].main === "Mist"){
                weatherIcon.src = "images/mist.png"
            }
            else if(data.weather[0].main === "Rain"){
                weatherIcon.src = "images/rain.png"
            }
            else if(data.weather[0].main === "Snow"){
                weatherIcon.src = "images/snow.png"
            }
            // to hide the weather when it's before input
            hiddenWeather.style.display = 'block';

        }
    // when input is correct, it will display with height of 50em now
    weatherContainer.style.height = '50em';
}

// when you click the search icon, it will call the above function and do whatever the input value is
searchBtn.addEventListener('click', () => {
    
    checkWeather(cityInput.value);
});





