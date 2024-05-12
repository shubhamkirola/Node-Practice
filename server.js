const fs = require ("fs");
const os = require('os');
const _ = require('lodash')
const example = require("./example.js");
const express = require("express");
const app = express();
const db = require('./db.js')
require('dotenv').config();

const bodyParser = require('body-parser')
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const menuRoutes = require('./Routesfile/MenuRoutes.js')
app.use('/Menu', menuRoutes)
const personRoutes = require('./Routesfile/PersonRoutes.js')
app.use('/Person', personRoutes)



// const name = os.userInfo();
// console.log(name.username);

// fs.appendFile("new.text", "Oh hi i am going to become a software engineer soon", ()=>{
//     console.log("file created");
// });

// fs.appendFile("name.txt", "username:shubham", ()=> {console.log("ban gyi file")})

app.get("/", (req, res) => {
    res.send("You will get one in the tech as a software dev soon")
})

app.get("/recession", (req, res) => {
    let market = {
        situation : "bad",
        hiring : "freezed",
        yourjob : "will get soon"
    }
    res.send(market)
    res.send(market.hiring) // ek hi response jata h
})

app.listen(PORT, () => {
    console.log("working")
})