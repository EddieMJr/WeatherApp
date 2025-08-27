const https = require('https')
const url = 'http://api.weatherstack.com/current?access_key=1334b08065a665f41774198abef5b616&query=35.2270,-80.8431'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()