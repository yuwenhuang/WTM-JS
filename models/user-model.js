const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String
    }
})

UserSchema.plugin(AutoIncrement, {id:'user_seq', inc_field: 'id'})

module.exports = mongoose.model('User', UserSchema)