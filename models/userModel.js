const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        default:'24A/2'
    },
    age:{
        type:Number,
        default:undefined
    }
},
{
    timestamps:true
})


module.exports = mongoose.model('User',userSchema)