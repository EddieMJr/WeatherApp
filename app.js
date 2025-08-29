// grabs export from geocode and forecast js pages ans imports them here
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

// all code to catch errors that may come through when finding location
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