const Router = require('express').Router()
const controller = require('../controllers/SquadController')

Router.get('/all', controller.GetSquadById)

module.exports = Router