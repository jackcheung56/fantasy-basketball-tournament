const { User } = require('../models')
/** const { 
    hashPassword,
    passwordValid,
    createToken, } = require('../middleware/index')
*/
// const CreateUser = async (req, res) => {
//     try{
//         const user = await User.create({...req.body})
//         res.send(user)
//     } catch (error){
//         throw error
//     }
// }

const CreateUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const passwordDigest = await hashPassword(password);
      const user = await User.create({ name, email, passwordDigest, picture, phone });
      console.log(user.id);
      res.send(user);
    } catch (error) {
      throw error;
    }
  };

module.exports = {
    CreateUser
}