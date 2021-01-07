const Router = require('express').Router()
const controller = require('../controllers/ProfileController')

Router.get('/get/:user_id', controller.GetProfileByUserId)

Router.post('/create', controller.CreateProfile)

module.exports = Router