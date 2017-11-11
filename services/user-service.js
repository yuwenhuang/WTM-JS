const UserModel = require('../models/user-model')
const db = require('../services/db-service')

findAllUser = async() => await db.findAll(UserModel)
findUser = async(userId) => await db.find(UserModel, userId)
addUser = async(user) => await db.add(UserModel, user)
delUser = async(userId) => await db.del(UserModel, userId)

module.exports = {
    findAllUser,
    findUser,
    addUser,
    delUser
}
