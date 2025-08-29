console.log('Client side js file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messOne = document.querySelector('#errorMess')
const messTwo = document.querySelector('#location')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messOne.textContent = 'loading...'
    messTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then ((response) => {
    response.json().then((data) => {
        if (data.error) {
            messOne.textContent = data.error
        } else {
            messOne.textContent = data.location
            messTwo.textContent = data.forecast
        }
    })
})
})