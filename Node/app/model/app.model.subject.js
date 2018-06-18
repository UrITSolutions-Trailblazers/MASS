const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minlength : 3
    },
    description : {
        type : String,
        required : true,
        minlength : 80
    },
    keyContents : {
        type : String,
        required : false,
        maxlength : 255
    },
    selftest : {
        
    }
});