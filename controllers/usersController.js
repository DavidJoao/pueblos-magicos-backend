const express = require('express');
const app = express()
const router = express.Router();
const User = require('../schemas/user')
const Pueblo = require('../schemas/pueblo')
const bcrypt = require('bcrypt')
// const { requireToken, createUserToken } = require('../middleware/auth')

//user crud
// index
const users = ['David', 'Daniel']
// get /users
router.get('/', (req, res) => {
    res.json(users)
})

module.exports = router