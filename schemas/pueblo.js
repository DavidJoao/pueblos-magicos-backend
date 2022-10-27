const mongoose = require('../db/connection')
const reviewSchema = require('./review')

const puebloSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: {
        state: String,
        country: String
    },
    images: [String]
})

const Pueblo = mongoose.model('Pueblo', puebloSchema)
module.exports = Pueblo