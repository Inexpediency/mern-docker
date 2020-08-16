const express = require('express')
const { connectDb } = require('./helpers/db')
const { host, port, db } = require('./configuration')
const dbOperationsTest = require('./tests/db-operations')

const app = express()

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Started auth service on
            port: ${port}
            host: ${host}`)
        console.log(`Our database is ${db}`)
    })
}

app.get('/test', (req, res) => {
    res.send('Our auth server is working correctly :3')
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)

