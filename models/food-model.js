const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const FoodSchema = mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    country:{
        type: String
    },
    type:{
        type: String
    }
})

FoodSchema.plugin(AutoIncrement, {id: 'food_seq', inc_field: 'id'})
module.exports = mongoose.model('Food', FoodSchema)
