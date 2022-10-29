const mongoose = require('../db/connection')

const puebloSchema = new mongoose.Schema({
    name: String,
    description: String,
    state: String,
    country: String,
    images: [String]
})

const Pueblo = mongoose.model('Pueblo', puebloSchema)
module.exports = Pueblo