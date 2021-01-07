const { Squad } = require('../models')

const GetSquadById = async (req, res) => {
    try{
        const squadId = parseInt(req.params.squad_id)
        const squad = await Squad.findByPk(squadId)
        res.send(squad)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetSquadById
}