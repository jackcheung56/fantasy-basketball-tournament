const { User } = require('../models')
const { 
    hashPassword,
    passwordValid,
    createToken, } = require('../middleware/index')

const CreateUser = async (req, res) => {
    try{
        let user = await User.create({...req.body})
        res.send(user)
    } catch (error){
        throw error
    }
}

const GetUserById = async(req, res) => {
    try{
        let userId = parseInt(req.params.id)
        let user = await User.findByPk(req.params.id, {
            where: {
                id: userId
            },
            returning: true
        })
        res.send(user)
    } catch (error) {
        throw error
    }
}

const DeleteUser = async (req, res) => {
    try{
        await User.destroy({
            where :{
                id: req.params.user_id
            }
        })
        res.send({
            message: `User with the id of ${req.params.user_id} has been deleted.`
        })
    } catch (error) {
        throw error
    }
}



// const CreateUser = async (req, res) => {
//     try {
//       const { name, email, password } = req.body;
//       const passwordDigest = await hashPassword(password);
//       const user = await User.create({ name, email, passwordDigest });
//       console.log(user.id);
//       res.send(user);
//     } catch (error) {
//       throw error;
//     }
//   };

module.exports = {
    CreateUser,
    GetUserById,
    DeleteUser
}