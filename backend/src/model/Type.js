const {model, Schema, ObjectId} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    categories: [{
        type: ObjectId,
        ref: 'Category'
    }]
})

module.exports = model('Type', schema)