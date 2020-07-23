const express = require('express')
const router = express.Router()
const customersController = require('../app/controllers/customersController')
const productsController = require('../app/controllers/productsController')
const billsController = require('../app/controllers/billsController')
// const customersController = require('../app/controllers/customersController')

router.get('/api/customers', customersController.list)
router.post('/api/customers', customersController.create)
router.get('/api/customers/:id', customersController.show)
router.put('/api/customers/:id', customersController.update)
router.delete('/api/customers/:id', customersController.destroy)


router.get('/api/products', productsController.list)
router.post('/api/products', productsController.create)
router.get('/api/products/:id', productsController.show)
router.put('/api/products/:id', productsController.update)
router.delete('/api/products/:id', productsController.destroy)

router.get('/api/bills', billsController.list)
router.post('/api/bills', billsController.create)
router.get('/api/bills/:id', billsController.show)
router.delete('/api/customers/:id', billsController.destroy)

module.exports = router