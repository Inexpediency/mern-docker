const express = require('express')
const { connectDb } = require('./helpers/db')
const { host, port, db } = require('./configuration')
const dbOperationsTest = require('./tests/db-operations')

const app = express()

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Started api service on
            port: ${port}
            host: ${host}`)
        console.log(`Our database is ${db}`)
    })

    const { ok, err } = await dbOperationsTest()
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(ok)
}

app.get('/test', (req, res) => {
    res.send('Our api server is working correctly :3')
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)
