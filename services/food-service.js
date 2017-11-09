const FoodModel = require('../models/food-model')
const db = require('../services/db-service')
const dbPath =`${__dirname}/../foodDb.json`

findAllFood = async() => await db.findAll(dbPath, FoodModel)
findFood = async(foodId) => await db.find(foodId, dbPath, FoodModel)
addFood = async(food) => await db.add(food, dbPath, FoodModel)
delFood = async(foodId) => await db.del(foodId, dbPath, FoodModel)

module.exports = {
    findAllFood,
    findFood,
    addFood,
    delFood
}
