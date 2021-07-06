const mongoose = require('mongoose');
require('mongoose-type-url');

const MeetupSchema = mongoose.Schema({
    image: {
        type: mongoose.SchemaTypes.Url,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    favorite: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Meetups', MeetupSchema);