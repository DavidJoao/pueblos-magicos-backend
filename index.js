// //basic config
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
app.set('port', 8000)

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//authentication
const jwt = require('jsonwebtoken')
const tokenSecret = process.env.ACCESS_TOKEN_SECRET;

//routes // redirect

app.get('/', (req, res) => {
    res.redirect('/pueblos')
});

app.get('/pueblos', (req, res) => {
    res.json(pueblos)
})

//error handling
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message);
});

//start server

app.listen(app.get('port'), () => {
    console.log(`PORT ${app.get('port')}`)
});
