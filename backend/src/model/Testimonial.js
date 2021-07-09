const {model, Schema} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    author: {
        type: Number,
        default: 0
    },
})

module.exports = model('Testimonial', schema)