const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const PlayerRouter = require('./PlayerRouter')
const RosterRouter = require('./RosterRouter')
const SquadRouter = require('./SquadRouter')
const ProfileRouter = require('./RosterRouter')

Router.get('/', (req, res) => res.send('This is working!'))

Router.use('/users', UserRouter)
Router.use('/players', PlayerRouter)
Router.use('/rosters', RosterRouter)
Router.use('/squads', SquadRouter)
Router.use('/profiles', ProfileRouter)

module.exports = Router