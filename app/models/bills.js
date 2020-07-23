const mongoose = require('mongoose')
const {orderItemSchema} = require('./orderItem')
const Product = require('./products')
const Customer = require('./customer')
const Schema = mongoose.Schema
const billSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customer'
    },
    date: {
        type: Date
    },
    orderItems: [orderItemSchema],
    total: {
        type: Number
    }
})

billSchema.pre('save', function(next){
    const bill = this
    let total = 0
    const productIds = bill.orderItems.map(item => item.product)
    Product.find().where('_id').in(productIds)
        .then((products) => {
            bill.orderItems.forEach((item) => {
                const product = products.find(product => String(product._id) === String(item.product))
                item.price = product.price
                item.subTotal = product.price * item.quantity
                total+= item.subTotal
            })
            bill.total = total
            next()
        })
})

const Bill = mongoose.model('Bill', billSchema)

module.exports = Bill