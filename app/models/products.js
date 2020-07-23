const mongoose = require('mongoose')

//products schema
const Schema = mongoose.Schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    }
})
//Product Model
const Product = mongoose.model('Product', productSchema)
module.exports = Product