const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.set ('view engine', 'pug')

const food = require('./routes/food')
const user = require('./routes/user')

app.use('/food', food)
app.use('/user', user)


app.get('/',(req, res, next) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('Server listening...')
})