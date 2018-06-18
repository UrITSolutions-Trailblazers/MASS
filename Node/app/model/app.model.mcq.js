const mongoose = require('mongoose');
const { Option, optionSchema } = require('./app.model.option');

const mcqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        minlength: 20
    },
    options: {
        type: [optionSchema],
        required: true
    },
    answer: {
        type : Number,
        required : true 
    }
});

const Mcq = mongoose.model('Mcq',mcqSchema);

module.exports.mcqSchema = mcqSchema;
module.exports.Mcq = Mcq;