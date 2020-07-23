const customersController = {}
const Customer = require('../models/customer')


customersController.list = (req, res) => {
    Customer.find()
        .then((customers) => {
            res.json(customers)
        })
        .catch((err) => {
            res.json(err)
        })
}

customersController.show = (req, res) => {
    const id = req.params.id
    Customer.findById(id)
        .then((customer) => {
            if (customer) {
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

customersController.create = (req, res) => {
    const body = req.body
    const customer = new Customer(body)
    customer.save()
        .then((customer) => {
            console.log(customer.name)
            res.json(customer)
        })
        .catch((err) => {
            res.json(err)
        })
}

customersController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Customer.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((customer) => {
            if (customer) {
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

customersController.destroy = (req, res) => {
    const id = req.params.id
    Customer.findByIdAndDelete(id)
        .then((customer) => {
            if (customer) {
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports = customersController