const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');


// const mongoose = require('mongoose')
const configureDb = require('./config/database')
const router = require('./config/routes')
// const router = require('./config/routes')
const app = express();
const port = 3055

app.use(express.json())
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined', { stream: accessLogStream }))
app.use(router)

//database configuration (asynchronous)
configureDb()


//router()
//customer schema -name, email, mobile
// const Schema = mongoose.Schema //built in constructor //schema is a blueprint
// const customerSchema =new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     mobile: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,        
//     }
// })

// //customer model
// const Customer = mongoose.model('Customer', customerSchema) //customer is a constructor function

// app.get('/api/customers', (req, res) => {
//     Customer.find()
//        .then((customers) => {
//         res.json(customers)
//        })
//        .catch((err) =>{
//            res.json(err)
//        })
// })

// //POST
// app.post('/api/customers', (req, res) => {
//     const body = req.body
//     const customer = new Customer(body)
//     customer.save()
//         .then((customer) =>{
//             res.json(customer)
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
//         //customer.name = body.name Internally all this is happening(LINE 57)
//         //customer.email = body.email
//        // customer.mobile = body.mobile
// })
// app.get('/api/customers/:id', (req, res)=> {
//     const id = req.params.id
//     Customer.findById(id)
//         .then((customer) => {
//             res.json(customer)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// })

// //PUT /api/customers/:id
// app.put('/api/customers/:id', (req, res) => {
//     const id = req.params.id
//     const body = req.body
//     Customer.findByIdAndUpdate(id, body, {new: true, runValidators: true})
//     .then((customer) => {
//         res.json(customer)
//     })
//     .catch((err) =>{
//         res.json(err)
//     })
// })

// // Delete a customer
// app.delete('/api/customers/:id', (req, res) =>{
//     const id = req.params.id
//     Customer.findByIdAndDelete(id)
//     .then((customer) =>{
//         res.json(customer)
//     })
//     .catch((err) =>{
//         res.json()
//     })
// })

app.get('/', (req, res) => {
    res.send('Billing APP API')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})