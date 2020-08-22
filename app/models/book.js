const mongoose  = require('mongoose');
const { string } = require('joi');
const BookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    issueDate :{
        type: Date,
        required: true
    },
    returnDate :{
        type: Date
    },
    customerId :{
        type:String,
        ref:'Customer'
    },
    bookType: {
        type:String
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Book',BookSchema);