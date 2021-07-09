const {model, Schema, ObjectId} = require('mongoose')

const schema = new Schema({
    street: {
        type: String,
        default: ''
    },
    city: {
        type: ObjectId,
        ref: 'City'
    }
})

module.exports = model('Street', schema)