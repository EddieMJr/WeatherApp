const request = require('request')

//
const forecast = (lat, long, callback) => {
    // grabs weatherstack info and inputs latitude and longitude into link
    const url = 'http://api.weatherstack.com/current?access_key=1334b08065a665f41774198abef5b616&query=' + lat + ',' + long + '&units=f'
    request({ url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
            // if no errors, show this message
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' currently. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

// allows this file to be imported by other files
module.exports = forecast