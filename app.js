const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address) {
    console.log('please provide an address')
} else {
    geocode(address, (error, {lat, long, location} = {}) => {
    if (error) {
        return console.log(error)
    }

    forecast(lat, long, (error, forecastData) => {
        if (error) {
        return console.log(error)
    }
        console.log(location)
        console.log(forecastData)
    })
})
}

console.log(process.argv)