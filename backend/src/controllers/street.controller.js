const genericCrud = require('./generic.controller')
const {Street} = require('../model')

module.exports = {
    ...genericCrud(Street)
}