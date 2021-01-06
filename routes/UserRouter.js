const Router = require('express').Router()
const controller = require('../controllers/UserController')
const { readtoken, verifyJwt } = require('../middleware/index')

Router.post('/add', controller.CreateUser)

module.exports = Router