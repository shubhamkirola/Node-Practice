const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = process.env.DB_URL_LOCAL //Person database will be created in the mongo server
const mongoURL1 = process.env.DB_URL

mongoose.connect(mongoURL1);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to the server')
})

db.on('error', (err) => {
    console.log('connection error ' + err)
})

db.on('disconnected', () => {
    console.log('disconnected to the server')
})

module.exports = db;