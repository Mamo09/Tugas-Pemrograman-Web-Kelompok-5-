const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    FirstName: {
        required: true,
        type: String
    },
    LastName: {
        required: true,
        type: String
    },
    Email: {
        required: true,
        type: String
    },
    Address: {
        required: true,
        type: String
    },
    Phone: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)