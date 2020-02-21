const mongoose = require('mongoose');

const invoicesSchema = new mongoose.Schema({  
    client: {
        type:String
    },
    cost:{
        type:String
    },
    project:{
        type:String
    },
    filePath: {
        type:String
    },
    fileName: {
        type:String,
        required:true
    }
}, {timestamps: true});


module.exports = mongoose.model('Invoices', invoicesSchema);