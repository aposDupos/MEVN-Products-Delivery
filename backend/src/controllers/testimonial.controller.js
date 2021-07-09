const genericCrud = require('./generic.controller')
const {Testimonial} = require('../model')

module.exports = {
    ...genericCrud(Testimonial)
}