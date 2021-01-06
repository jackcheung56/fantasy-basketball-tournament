const Router = require('express').Router()
const controller = require('../controllers/RosterController')

Router.get('/:roster_id', controller.GetRosterById)

module.exports = Router