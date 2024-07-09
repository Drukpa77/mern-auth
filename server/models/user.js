const mongoose = require('mongoose')
const {Schema} = mongoose
const userShema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

const UserModel = mongoose.model('User', userShema)

module.exports = UserModel;