require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const inventoryRoutes = require('./routes/inventory_routes_script')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/inventory/', inventoryRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`connected to database and listening on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
