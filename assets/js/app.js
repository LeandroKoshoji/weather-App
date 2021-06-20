const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const cityNameContainer = document.querySelector('.city-name-container')
const weatherIcon = document.querySelector('.weather-icon')
const cityTemperature = document.querySelector('.city-temperature')
const weatherTextInfo = document.querySelector('.weather-text-info')


const showCityWeatherInfo = async cityName => {
    const [{Key, LocalizedName}] = await fetchData(getCityUrl(cityName))
    const [{ IsDayTime , Temperature, WeatherIcon, WeatherText}] = await fetchData(getWeatherUrl(Key))
    
    if(IsDayTime) {
        card.classList.remove('night')
        card.classList.add('day')
    } else {
        card.classList.remove('day')
        card.classList.add('night')
    }
    card.style.display = 'flex'
    cityNameContainer.textContent = LocalizedName
    weatherIcon.src = `assets/src/icons/${WeatherIcon}.svg`
    cityTemperature.textContent = Temperature.Metric.Value
    weatherTextInfo.textContent = WeatherText
}

const showLocalStorageCity = ()=> {
    const city = localStorage.getItem('city')
    
    if(city) {
        showCityWeatherInfo(city)
    }
}

cityForm.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.getCity.value.trim()
    
    showCityWeatherInfo(inputValue)
    localStorage.setItem('city', inputValue)
    cityForm.reset()
})

showLocalStorageCity()