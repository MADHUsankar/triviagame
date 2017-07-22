var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength:15
    },
    correctAns:{
        type: String,
        required: true
    },
    fakeAnsa:{
        type:String,
        required:true
    },
    fakeAnsb:{
        type:String,
        required:true
    }
}, {timestamps:true});

var Question = mongoose.model("Question", questionSchema);