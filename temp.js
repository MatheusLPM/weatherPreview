

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


    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(result => result.json())

    displayData(data)
    console.log(data)

}

button.addEventListener('click', (buttonClick) = () =>{

    const input = document.querySelector('.info-input').value
    const display = document.querySelector('.content')
    const logo = document.querySelector('#logo')

    console.log(input)

    if(input == " "){
        document.querySelector('.text-image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        return 0

    }else{
        searchCity(input)

        logo.style.display = 'none'
        display.style.display ='flex'
    }

})








