const express = require('express')
const bodyParser = require('body-parser')

const food = require('./routes/food')
const user = require('./routes/user')
require('./database-connection')
const app = express()

app.use(bodyParser.json())
app.use('/food', food)
app.use('/user', user)
app.set ('view engine', 'pug')

app.get('/',(req, res, next) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('Server listening...')
})