const mongoose =require('mongoose')

const signupSchema = new mongoose.Schema({
    fname: mongoose.Schema.Types.String,
    lname: mongoose.Schema.Types.String,
    id: mongoose.Schema.Types.String,
    pwd: mongoose.Schema.Types.String
})

module.exports = mongoose.model('Signup',signupSchema)