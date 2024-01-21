//async await

const form = document.querySelector('form')
const searchField= document.querySelector('.searchField')

const temperatureField = document.querySelector(".temperature")
const cityField = document.querySelector(".time_location p")
const dateField = document.querySelector(".time_location span")
const logoField = document.querySelector(".weather_condition img")
const weatherField = document.querySelector(".weather_condition span")
 

//let target = 'Milan'

form.addEventListener('submit',search)

function search(e) {
    e.preventDefault()
    let target = searchField.value
    fetchData(target)
    
}

async function fetchData(target) {
    let endpoint = `http://api.weatherapi.com/v1/current.json?key=5b0f0e2f414641b78c1103058232312&q=${target}&aqi=no`

    const respose = await fetch(endpoint)
    let data = await respose.json()
    console.log(data)

    let currentTemp = data.current.temp_c
    let locationName = data.location.name
    let localTime = data.location.localtime

    let currentCondition = data.current.condition.text
    let conditionLogo = data.current.condition.icon

    updateWeatherData(locationName, currentTemp, localTime, currentCondition, conditionLogo);
}

function updateWeatherData(cityName,temp,time,condition,logo){
    cityField.innerText = cityName
    temperatureField.innerText = temp 
    dateField.innerText = time
    weatherField.innerText = condition
    logoField.src = logo
}