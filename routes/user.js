const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')



router.get('/', async (req, res, next) => {
    res.send(await UserService.findAllUser())
})

router.get('/all', async (req, res, next) => {
    const users = await UserService.findAllUser()
    res.render('user-list', {users})
})

router.get('/:id', async (req, res, next) => {
    const user = await UserService.findUser(req.params.id)
    res.render('user-detail', {user})
})

router.post('/', async (req, res, next) => {
    const user = await UserService.addUser(req.body)
    res.send(user)
})

router.delete('/:id', async (req, res, next) => {
    await UserService.delUser(req.params.id)
    res.send('ok')
})

module.exports = router