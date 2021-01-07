const Router = require('express').Router()
const controller = require('../controllers/RosterController')

Router.get('/:profile_id', controller.GetRosterByProfileId)
Router.delete('/:roster_id/:player_id', controller.DeletePlayerFromRoster)
Router.post('/create', controller.CreateRoster)

module.exports = Router