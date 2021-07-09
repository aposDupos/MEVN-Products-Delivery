const {model, Schema, ObjectId} = require('mongoose')

const schema = new Schema({
    city: {
        type: String,
        default: ''
    },
    streets: [{
        type: ObjectId,
        ref: 'Street'
    }]
})

module.exports = model('City', schema)