const {model, Schema, ObjectId} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '#ffffff'
    },
    types: [{
        type: ObjectId,
        ref: 'Type'
    }]
})

module.exports = model('Category', schema)