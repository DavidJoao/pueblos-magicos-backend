const mongoose = require('../db/connection')
const reviewSchema = require('./review')

const puebloSchema = new mongoose.Schema({
    name: String,
    location: {
        town: String,
        state: String,
        country: String
    },
    images: [String],
    reviews: [reviewSchema],
    attractions: [String]
})

const Pueblo = mongoose.model('Pueblo', puebloSchema)
module.exports = Pueblo