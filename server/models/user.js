var mongoose = require('mongoose');
var bcrypt = require('bcrypt');  
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    score:{
        type: String
    },
    percentage:{
        type:Number
    }
}, {timestamps:true});

var User = mongoose.model("User", UserSchema);