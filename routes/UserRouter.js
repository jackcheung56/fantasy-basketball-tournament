const Router = require('express').Router()
const controller = require('../controllers/UserController')
const { readtoken, verifyJwt } = require('../middleware/index')

Router.post('/add', controller.CreateUser)

Router.get('/:id', controller.GetUserById)

Router.delete('/delete/:user_id', controller.DeleteUser)

module.exports = Router