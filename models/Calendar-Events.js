const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({  
    title: {
        type:String
    },
    eventType:{
        type:String
    },
    memberAttached:{
        type:Boolean
    },
    membersAttached:{
        type:Array
    },
    startdate: {
        type: Array
    },
    finaldate: {
        type: Date
    },
    urgency: {
        type:String
    }
}, {timestamps: true});


module.exports = mongoose.model('Tasks', tasksSchema);