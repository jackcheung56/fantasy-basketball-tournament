const { Player } = require('../models')

const GetAllPlayers = async (req, res) => {
    try{
        const players = await Player.findAll()
        res.send(players)
    } catch (error) {
        throw error
    }
}

const GetPlayerById = async (req, res) => {
    try{
        const playerId = parseInt(req.params.player_id)
        const player = await Player.findByPk(playerId)
        res.send(player)
    } catch (error) {
        throw error
    }
}
module.exports = {
    GetAllPlayers,
    GetPlayerById
}