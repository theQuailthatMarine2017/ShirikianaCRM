const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const projectsSchema = new mongoose.Schema({  
    title: {
        type:String,
        unique:true
    },
    client:{
        type:String
    },
    budget:{
        type:Number
    },
    description:{
        type:String,
        max:255,
        min:6
    }
}, {timestamps: true});

projectsSchema.plugin(uniqueValidator, {message: 'Project Exists.'});


module.exports = mongoose.model('Project', projectsSchema);