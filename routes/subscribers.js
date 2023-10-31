const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')
const subscriber = require('../models/subscriber')

//getting all
router.get('/', async(req, res) =>{
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    }catch(err){
      res.status(500).json({message: err.message})  
    }
})
//getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
//creating one
router.post('/', async(req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch(err){
        res.status(400).json({message: err.message}) //400 error, something wrong with user input
    }
})
//updating one... patch updates specific parts while put updates all
router.patch('/:id', (req, res) => {
    
})
//deleting one
router.delete('/:id', (req, res) => {
    
})

module.exports = router