const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    optionNumber : {
        type : Number,
        required : true
    },
    option : {
        type : String,
        required : true,
    }
});

const option = mongoose.model('Option',optionSchema);

module.exports.optionSchema = optionSchema;
module.exports.Option = option;