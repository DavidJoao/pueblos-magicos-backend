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

//get pueblo by ID
router.get('/:_id', async (req, res, next) => {
   try{
    const pueblo = await Pueblo.findById(req.params._id)
    res.json(pueblo)
   } catch(err) {
    next(err)
   }
})

//post pueblo
router.post('/', (req, res, next) => {
    Pueblo.create(req.body)
    .then((pueblo) => res.status(201).json(pueblo))
    .catch(next)
    console.log('POST Pueblo')
})

//delete pueblo
router.delete('/:_id', (req, res, next) => {
    Pueblo.findByIdAndDelete(req.params._id)
    .then((pueblo) => res.json(pueblo))
    .catch(next)
    console.log('DELETE Pueblo')
})
module.exports = router;