const Router = require('express').Router()

const UserRouter = require('./UserRouter')
//const PlayerRouter = require('./PlayerRouter')
//const RosterRouter = require('./RosterRouter')

Router.get('/', (req, res) => res.send('This is working!'))

Router.use('/users', UserRouter)
//Router.use('/player', PlayerRouter)
//Router.use('/roster', RosterRouter)

module.exports = Router