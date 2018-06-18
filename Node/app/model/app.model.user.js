const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        match : /[a-zA-Z]/,
        minlength : 2  
    },
    lastName : {
        type : String,
        required : false,
        match : /[a-zA-Z]/
    },
    email : {
        type : String,
        required : true,
        match : /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    },
    password : {
        type : String,
        required : false
    },
    phone : {
        type : String,
        required : true,
        maxlength : 10,
        minlength : 10,
        match : /[0-9]/
    }
});

module.exports.userSchema = userSchema;
module.exports.User = mongoose.model('User',userSchema);