const API_KEY = `495cbe3e14128037147233dc5c8f2189`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
//const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
const getWeather = async(city) => {
    weather.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h2>City Not Found !</h2>`
        return;
    }
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} ℃</h2>
        <h3>${data.weather[0].main}</h3>
    </div>`
}


form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)