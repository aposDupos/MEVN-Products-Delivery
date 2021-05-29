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
    products: [{
        type: ObjectId,
        ref: 'Product'
    }]
})

module.exports = model('Category', schema)