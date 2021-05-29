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
    price: {
        type: Number,
        default: 0
    },
    amount: {
        type: Number,
        default: 0
    },
    weight: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        default: ''
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    }
})

module.exports = model('Product', schema)