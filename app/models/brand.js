const mongoose = require('mongoose')


//brand schema
const Schema = mongoose.Schema
const brandSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

//Brand schema
const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand