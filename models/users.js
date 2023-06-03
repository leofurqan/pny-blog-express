const mongoose = require('../db/db')
const userSchema = require('../schema/users')

const userModel = mongoose.model('users', userSchema)

module.exports = userModel