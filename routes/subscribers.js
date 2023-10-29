const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//getting all
router.get('/', (req, res) =>{
    res.send('Hello World')
})
//getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
//creating one
router.post('/', (req, res) => {
    
})
//updating one... patch updates specific parts while put updates all
router.patch('/:id', (req, res) => {
    
})
//deleting one
router.delete('/:id', (req, res) => {
    
})

module.exports = router