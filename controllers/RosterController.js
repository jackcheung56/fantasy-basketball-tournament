const { Roster } = require('../models')

const GetRosterById = async (res, res) => {
    try{
        const rosterId = parseInt(req.params.roster_id)
        const roster = await Roster.findByPk(rosterId)
        res.send(roster)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetRosterById
}