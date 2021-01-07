const { Profile } = require('../models')

const CreateProfile = async (req, res) => {
    try{
        const profile = await Profile.create({ ...req.body })
        res.send(profile)
    } catch (error) {
        throw error
    }
}

const GetProfileByUserId = async(req, res) => {
    try{
        const profileId = parseInt(req.params.user_id)
        const profile = await Profile.findByPk(req.params.user_id, {
            where: {
                id: profileId
            },
            returning: true
        })
        res.send(profile)
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateProfile,
    GetProfileByUserId
}