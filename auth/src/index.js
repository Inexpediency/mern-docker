const express = require('express')
const { connectDb } = require('./helpers/db')
const { port, db } = require('./configuration')

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
