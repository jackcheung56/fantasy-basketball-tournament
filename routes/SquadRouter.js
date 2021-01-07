const Router = require('express').Router()
const controller = require('../controllers/SquadController')

Router.get('/:roster_id', controller.GetSquadByRosterId)

Router.post('/create', controller.CreateSquad)

module.exports = Router