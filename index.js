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

const pueblos = [
    {
        name: 'Nochistlan',
        state: 'Zacatecas'
    },
    {
        name: 'Jerez',
        state: 'Zacatecas'
    }
]

app.get('/pueblos', authenticateToken, (req, res) => {
    res.json(pueblos)
})

app.post('/login', (req, res) => {
    //User authentication
    const username = req.body.username
    const user = { name: username }
    
    const accessToken = jwt.sign(user, tokenSecret)
    res.json({ accessToken: accessToken })

})

//error handling
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message);
});


//authentication function
function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, tokenSecret, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

//start server

app.listen(app.get('port'), () => {
    console.log(`PORT ${app.get('port')}`)
});
