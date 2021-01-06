const { Roster } = require('../models')

const GetRosterById = async (req, res) => {
    try{
        const rosterId = parseInt(req.params.roster_id)
        const roster = await Roster.findByPk(rosterId)
        res.send(roster)
    } catch (error) {
        throw error
    }
}

const DeletePlayerFromRoster = async (req, res) => {
    try{
        await Roster.destroy({
            where:{
                id: req.params.player_id
            }
        })
        res.send({
            message: `Player with id of ${req.params.player_id} is deleted` ,
            data: {
                id: req.params.player_id
            }
        })
    } catch (error) {
        throw error
    }
}
module.exports = {
    GetRosterById,
    DeletePlayerFromRoster
}