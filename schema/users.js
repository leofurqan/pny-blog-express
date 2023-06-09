const mongoose = require('../db/db')
const bcrypt = require('bcrypt')

const userScehema = new mongoose.Schema({
    name: 'String',
    email: 'String',
    phone: 'String',
    password: 'String',
    status: 'Boolean',
    date: { type: Date, default: Date.now }
})

userScehema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

module.exports = userScehema