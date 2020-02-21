const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({  
    title: {
        type:String
    },
    project:{
        type:String
    },
    members: {
        type: Array
    },
    duedate: {
        type: Date
    },
    urgency: {
        type:String
    },
    completed: {
        type: Date
    }
}, {timestamps: true});


module.exports = mongoose.model('Tasks', tasksSchema);