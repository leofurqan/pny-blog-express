const mongoose = require('../db/db')

const userScehema = new mongoose.Schema({
    name: 'String',
    email: 'String',
    phone: 'String',
    password: 'String',
    status: 'Boolean',
    date: { type: Date, default: Date.now }
})

module.exports = userScehema