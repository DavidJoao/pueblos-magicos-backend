const express = require('express');
const app = express()
const router = express.Router();
const User = require('../schemas/user')
const Pueblo = require('../schemas/pueblo')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { JsonWebTokenError } = require('jsonwebtoken');
// const { requireToken, createUserToken } = require('../middleware/auth')

tokenSecret = process.env.ACCESS_TOKEN_SECRET

//user crud
// index
const users = ['David', 'Daniel']
// get /users
router.get('/', (req, res) => {
    res.json(users)
})


//login user
app.post('/login', (req, res) => {
    const useranme = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, tokenSecret)
    res.json({ accessToken })
})
module.exports = router