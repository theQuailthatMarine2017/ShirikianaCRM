const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const memberSchema = new mongoose.Schema({  
    email: {
        type:String,
        max:255,
        min: 6,
        unique:true
    },
    fullnames:{
        type:String
    },
    accountType:{
        type:String,
        required:true
    },
    password:{
        type:String
    }
}, {timestamps: true});

memberSchema.plugin(uniqueValidator, {message: 'Member Exists.'});


module.exports = mongoose.model('Member', memberSchema);