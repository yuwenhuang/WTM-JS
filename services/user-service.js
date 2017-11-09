const UserModel = require('../models/user-model')
const db = require('../services/db-service')
const dbPath =`${__dirname}/../userDb.json`

findAllUser = async() => await db.findAll(dbPath, UserModel)
findUser = async(userId) => await db.find(userId, dbPath, UserModel)
addUser = async(user) => await db.add(user, dbPath, UserModel)
delUser = async(userId) => await db.del(userId, dbPath, UserModel)

module.exports = {
    findAllUser,
    findUser,
    addUser,
    delUser
}
