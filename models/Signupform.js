const mongoose = require('mongoose')
const { type } = require('os')
const Schema = mongoose.Schema

const signupformschema = new Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    emailid:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    },
},{timestamps:true})

const form = mongoose.model('Signupform',signupformschema)
module.exports=form