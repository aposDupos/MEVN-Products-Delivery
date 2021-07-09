const genericCrud = require('./generic.controller')
const {Type} = require('../model')

module.exports = {
    ...genericCrud(Type)
}