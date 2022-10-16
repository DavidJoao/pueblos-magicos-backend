const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    profileimg: String,
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User