const express = require('express')
const router = express.Router()

const FoodService = require('../services/food-service')

router.get('/', async (req, res, next)=> {
    res.send(await FoodService.findAllFood())
})
router.get('/allfood', async (req, res, next) => {
    const foods = await FoodService.findAllFood()
    res.render('food-list',{foods})
} )
router.get('/:id', async (req, res, next) => {
    console.log("foodId:"+req.params.id);
    const food = await FoodService.findFood(req.params.id)
    console.log(food);
    res.render('food-detail', {food})
}) 

router.post('/', async(req, res, next) => {
    const food = await FoodService.addFood(req.body)
    res.send(req.body)
})

router.delete('/:id', async(req, res, next) => {
    await FoodService.delFood(req.params.id)
    res.send('delete food ok!')
})
module.exports = router