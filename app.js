const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const signupHandler = require('./routes/signup')
const loginHandler = require('./routes/login')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGOOSE)
    .then(console.log('Connection Successful'))
    .catch(err=>console.log(err))

app.use('/signup',signupHandler)
app.use('/login',loginHandler)

app.use((req,res)=>{
    res.status(404).json({msg:'No resource found!'})
})

module.exports = app