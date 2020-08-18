const express = require('express')
const axios = require('axios')
const { connectDb } = require('./helpers/db')
const { port, db, apiURL } = require('./configuration')

const app = express()

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Started auth service on
            port: ${port}`)
        console.log(`Our database is ${db}`)
    })
}

app.get('/test', (req, res) => {
    res.send('Our auth server is working correctly :3')
})

app.get('/test_with_api_data', (req, res) => {
    axios.get(`${apiURL}/test_api_data`).then(apiResponse => {
        res.json({
            testAPIData: apiResponse.data.testWithAPI,
        })
    })
})

app.get('/api/current_user', (req, res) => {
    res.json({
        id: "ythosa",
        email: "ythosa@github.io"
    })
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)
