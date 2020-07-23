const mongoose = require('mongoose')
const axios = require('axios')

// customer schema
const Schema = mongoose.Schema // const { Schema } = mongoose 
const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    businessInfo: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String
        },
        gstn: {
            type: String
        }
    }
})
customerSchema.pre('save', function(next){
   console.log('name', this.name)
   let customer = this
   axios.get(`https://api.genderize.io?name=${this.name}`)
    .then((response) => {
        console.log(response.data)
        customer.gender = response.data.gender
        console.log(customer.gender)
        next()
    })
    .catch((err) =>{
        console.log(err)
        next()
    })
   
})

// customer model
const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer