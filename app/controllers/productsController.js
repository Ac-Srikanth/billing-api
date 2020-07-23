const productsController = {}
const Product = require('../models/products')

// controller actions
productsController.list = (req, res) => {
    Product.find()
        .then((products) => {
            res.json(products)
        })
        .catch((err) =>{
            res.json(err)
        })
}

productsController.show = (req, res) => {
    const id = req.params.id
    Product.findById(id)
        .then((customer) => {
            if(customer) {
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch((err) =>{
            res.json(err)
        })
}

productsController.create= (req, res) => {
    const body = req.body
    const product = new Product(body)
    product.save()
        .then((product) =>{
            console.log(product.name)
            res.json(product)
        })
        .catch((err) =>{
            res.json(err)
        })
}
productsController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Product.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((product) => {
            if (product) {
                res.json(product)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

productsController.destroy = (req, res) => {
    const id = req.params.id
    Product.findByIdAndDelete(id)
        .then((product) => {
            if (product) {
                res.json(product)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

productsController.findByName = (req, res) => {
    const id = req.params.id
}


module.exports = productsController