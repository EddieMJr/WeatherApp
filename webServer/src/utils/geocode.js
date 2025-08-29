const request = require('request')

const geocode = (address, callback) => {
    // makes geocode accurate for accurate weather info
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZWRkaWVtanIiLCJhIjoiY21ldDh1eDFuMGJiOTJtcTNvYXNyNGdtbCJ9.B4WyVNxox-HHLZQH3VYMXw'

    request({ url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

// allows this file to be imported by other files
module.exports = geocode