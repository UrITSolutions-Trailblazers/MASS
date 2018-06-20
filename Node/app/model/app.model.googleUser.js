const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    google: {
        id: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: false
        },
        name: {
            type: String,
            require: false
        },
        email: {
            type: String,
            require: false
        }
    },
    phone: {
        type: String,
        required: false,
        maxlength: 10,
        minlength: 10,
        match: /[0-9]/
    }
});

module.exports.googleUserSchema = userSchema;
module.exports.User = mongoose.model('GoogleUser', userSchema);