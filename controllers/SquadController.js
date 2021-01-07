const { Squad } = require('../models')

const GetSquadByRosterId = async (req, res) => {
    try{
        const squadId = parseInt(req.params.roster_id)
        const squad = await Squad.findByPk(req.params.roster_id, {
            where: {
                id: squadId
            },
            returning: true
        })
        res.send(squad)
    } catch (error) {
        throw error
    }
}

const CreateSquad = async (req, res) => {
    try{
        let squad = await Squad.create({...req.body})
        res.send(squad)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetSquadByRosterId,
    CreateSquad
}