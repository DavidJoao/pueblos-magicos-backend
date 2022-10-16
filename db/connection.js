require('dotenv').config();
const mongoose = require('mongoose')

//mongourl and connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

//connection to mongo
mongoose.connect(mongoURI, { autoIndex: false })

//Connection error or success
db.on('error', (err) => console.log(err.message + " is Mongod not running?"));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

//open connection
db.on('open', () => console.log('✅ mongo connection made!'))

module.exports = mongoose;