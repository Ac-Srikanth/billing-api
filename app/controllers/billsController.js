const billsController = {}
const Bill = require('../models/bills')

billsController.list = (req, res) => {
    Bill.find()
        .then((bills) => {
            res.json(bills)
        })
        .catch((err) =>{
            res.json(err)
        })
}

billsController.show = (req, res) => {
    const id = req.params.id
    Bill.findById(id).populate('customer').populate('orderItems.product')
        .then((bill) => {
            if(bill) {
                res.json(bill)
            } else {
                res.json({})
            }
        })
        .catch((err) =>{
            res.json(err)
        })
}

billsController.create = (req, res) => {
    const body = req.body
    const bill = new Bill(body)
    bill.save()
        .then((bill) => {
            res.json(bill)
        })
        .catch((err) =>{
            res.json(err)
        })
}

billsController.destroy = (req, res) => {
    const id = req.params.id
    Bill.findByIdAndDelete(id)
        .then((bill) => {
            if(bill) {
                res.json(bill)
            } else {
                res.json({})
            }
        })
        .catch((err) =>{
            res.json(err)
        })
}

module.exports = billsController