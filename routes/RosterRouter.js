const Router = require('express').Router()
const controller = require('../controllers/RosterController')

Router.get('/:roster_id', controller.GetRosterById)
Router.delete('/:roster_id/:player_id', controller.DeletePlayerFromRoster)

module.exports = Router