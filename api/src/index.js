const express = require('express')
const app = express()
const { connectDb } = require('./helpers/db')
const { host, port, db } = require('./configuration')

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api service on
            port: ${port}
            host: ${host}`)
        console.log(`Our database is ${db}`)
    })
}

app.get('/test', (req, res) => {
    res.send('Our api server is working correctly :3')
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)
