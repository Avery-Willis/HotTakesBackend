const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const takeSchema = new Schema({
    text:{
        type:String,
        required:true
    },
    upvotes:0,
    downvotes:0,
    userid:{
        type:String
    }
});


const Exercise = mongoose.model('take', takeSchema);

module.exports = Exercise;