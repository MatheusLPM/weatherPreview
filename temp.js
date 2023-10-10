

const key = "a159c742cc5691720d1b8c5d23df11fd"


const button = document.querySelector('.button')

function displayData(data){

    document.querySelector('.name-city').innerHTML = `${data.name}, ${data.sys.country}`
    document.querySelector('.minTemp').innerHTML = `${Math.floor(data.main.temp_min)}° min`
    document.querySelector('.maxTemp').innerHTML = `${Math.floor(data.main.temp_max)}° max`
    document.querySelector('.weather-info').innerHTML = data.weather[0].description
    document.querySelector('.text-image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    if(Math.floor(data.main.temp_min) < 0){

        document.querySelector('.min-grau').innerHTML = '<i class="bi bi-thermometer-snow"></i>'

    }else if(Math.floor(data.main.temp_min) > 0 && Math.floor(data.main.temp_min) < 20 ){

        document.querySelector('.min-grau').innerHTML = '<i class="bi bi-thermometer-low"></i>'

    }else{

        document.querySelector('.min-grau').innerHTML = '<i class="bi bi-thermometer-high"></i>'
    }

    

    if(Math.floor(data.main.temp_max) < 0){

        document.querySelector('.max-grau').innerHTML = '<i class="bi bi-thermometer-snow"></i>'

    }else if(Math.floor(data.main.temp_max) > 0 && Math.floor(data.main.temp_max) < 20 ){

        document.querySelector('.max-grau').innerHTML = '<i class="bi bi-thermometer-low"></i>'

    }else{
        document.querySelector('.max-grau').innerHTML = '<i class="bi bi-thermometer-high"></i>'
    }


}

async function searchCity(cidade){

    console.log(cidade)
    const display = document.querySelector('.info')
    const weather = document.querySelector('.weather')

    try {

        if(cidade == ""){

            document.querySelector('.name-city').innerHTML = `Região vazia`
            display.style.display = 'none'
            weather.style.display = 'none'
            console.log(true)
            return 0
    
        }else{
    
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(result => result.json())

            display.style.animation = 'reveal 5s'
            display.style.display = 'flex'
            weather.style.display = 'flex'
            displayData(data)
            console.log(data)
        }

    } catch (error) {

        document.querySelector('.name-city').innerHTML = `Não encontrado`
        display.style.display = 'none'
        weather.style.display = 'none'

    }

}

button.addEventListener('click', (buttonClick) = () =>{

    const input = document.querySelector('.info-input').value
    const display = document.querySelector('.content')
    const logo = document.querySelector('#logo')

    searchCity(input)

    logo.style.display = 'none'
    display.style.display ='flex'
    
})








