const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        default: 1
    },
    price: {
        type: Number
    },
    subtotal: {
        type: Number
    }
})

const OrderItem = mongoose.model('OrderItem', orderItemSchema)

module.exports = {
    orderItemSchema,
    OrderItem
}