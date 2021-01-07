const Router = require('express').Router()
const controller = require('../controllers/PlayerController')

Router.get('/all', controller.GetAllPlayers)


module.exports = Router