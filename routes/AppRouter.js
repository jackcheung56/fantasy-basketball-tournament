const Router = require('express').Router()

Router.get('/', (req, res) => res.send('This is working!'))

module.exports = Router