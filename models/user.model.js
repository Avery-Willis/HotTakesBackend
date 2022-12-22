const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    //need to fix this... dont want object id type, want Take type
    posts:[
        // {
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"take"
        // }
    ]
});

const User = mongoose.model('User', userSchema)

module.exports = User;