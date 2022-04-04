//dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
require('dotenv').config()
const Links = require('./models/LinkModel.js')

//db connect
const connectionURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PW}@dapptree.ciuqv.mongodb.net/DappTree?retryWrites=true&w=majority`
mongoose.connect(connectionURI)

//static files
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('views', './views')

//endpoint

app.get('/' , (req,res) => {
    Links.find((err,data) => {
        res.render('index', {
            links: data
        })
    })
})



// CORS
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}))

//exporting app
module.exports = app;