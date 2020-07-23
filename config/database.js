const mongoose = require('mongoose')

const configureDb = () => {
    mongoose.connect('mongodb://localhost:27017/billing-app-march', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Connected to database')
    })
    .catch((err)=>{
        console.log('ERROR', err)
    })
}

module.exports = configureDb