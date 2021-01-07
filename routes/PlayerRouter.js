const Router = require('express').Router()
const controller = require('../controllers/PlayerController')

Router.get('/all', controller.GetAllPlayers)

Router.get('/:squad_id', controller.GetPlayerBySquadId)


module.exports = Router