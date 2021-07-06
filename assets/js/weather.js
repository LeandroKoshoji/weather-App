const APIKey = 'M9KC3X1PIXLsrJ2uInSv8KXTMAvfAVMV'

const fetchData = async url=> {
    try{
        const response = await fetch(url)

        if(!response.ok) {
            throw new Error ('Não foi possivel completar a requisição')
            
        }

        return response.json()
    } catch(error) {
        console.log(error.message)
    }
}

const getCityUrl = inputValue => 
    `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${inputValue}`

const getWeatherUrl = key => 
    `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKey}&language=pt-br`