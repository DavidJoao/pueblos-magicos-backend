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

//routes // redirect

app.get('/', (req, res) => {
    res.redirect('/pueblos')
});
//controllers
const usersControllers = require('./controllers/usersController');
app.use('/users', usersControllers);

const pueblosControllers = require('./controllers/pueblosController')
app.use('/pueblos', pueblosControllers);

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
