const { Roster } = require('../models')

const GetRosterByProfileId = async (req, res) => {
    try{
        const rosterId = parseInt(req.params.profile_id)
        const roster = await Roster.findByPk(req.params.profile_id, {
            where: {
                id: rosterId
            },
            returning: true
        })
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

const CreateRoster = async (req, res) => {
    try{
        const roster = await Roster.create({...req.body})
        res.send(roster)
    } catch (error){
        throw error
    }
}
module.exports = {
    GetRosterByProfileId,
    DeletePlayerFromRoster,
    CreateRoster
}