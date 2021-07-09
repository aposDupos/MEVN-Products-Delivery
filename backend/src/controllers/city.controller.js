const genericCrud = require('./generic.controller')
const {City} = require('../model')

module.exports = {
    ...genericCrud(City)
}