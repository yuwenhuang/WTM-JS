const FoodModel = require('../models/food-model')
const db = require('../services/db-service')

findAllFood = async() => await db.findAll(FoodModel)
findFood = async(foodId) => await db.find(FoodModel, foodId)
addFood = async(food) => await db.add(FoodModel, food)
delFood = async(foodId) => await db.del(FoodModel, foodId)

module.exports = {
    findAllFood,
    findFood,
    addFood,
    delFood
}
