// 1. require mongoose
const mongoose = require('mongoose')

// 2. create Schema
const Schema = mongoose.Schema

const inventorySchema = new Schema ( {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    fragile: {
        type: Boolean,
        required: false
    }
}, {timestamps: true})


module.exports = mongoose.model('Item', inventorySchema)