const express = require('express')
const router = express.Router()
const Pueblo = require('../schemas/pueblo')

//
router.get('/', (req, res, next) => {
    Pueblo.find({})
        .then((pueblos) => res.json(pueblos))
        .catch(next)
    console.log('GET all pueblos')
})

module.exports = router;