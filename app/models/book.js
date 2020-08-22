const mongoose  = require('mongoose');
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
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Book',BookSchema);