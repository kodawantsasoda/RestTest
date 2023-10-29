const mongoose = require('mongoose') //creating a model to interact with database


const subscriberSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscriberToChannel:{
        type: String,
        required: true
    },
    subscribeDate: {
        type: String,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)