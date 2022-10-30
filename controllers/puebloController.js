const express = require('express')
const router = express.Router()
const Pueblo = require('../schemas/pueblo')


// get all pueblos 
router.get('/', (req, res, next) => {
    Pueblo.find({})
    .then((pueblos) => res.json(pueblos))
    .catch(next)
    console.log('GET all pueblos')
})


//post pueblo
router.post('/', (req, res, next) => {
    Pueblo.create(req.body)
    .then((pueblo) => res.status(201).json(pueblo))
    .catch(next)
    console.log('POST Pueblo')
})

//delete pueblo
router.delete('/:id', (req, res, next) => {
    Pueblo.findByIdAndDelete(req.params.id)
    .then((pueblo) => res.json(pueblo))
    .catch(next)
    console.log('DELETE Pueblo')
})
module.exports = router;