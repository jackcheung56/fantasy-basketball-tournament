const { Player } = require('../models')

const GetAllPlayers = async (req, res) => {
    try{
        const players = await Player.findAll()
        res.send(players)
    } catch (error) {
        throw error
    }
}

const GetPlayerBySquadId = async (req, res) => {
    try{
        const playerId = parseInt(req.params.squad_id)
        const player = await Player.findByPk(req.params.squad_id, {
            where: {
                id: playerId
            },
            returning: true
        })
        res.send(player)
    } catch (error) {
        throw error
    }
}
module.exports = {
    GetAllPlayers,
    GetPlayerBySquadId
}