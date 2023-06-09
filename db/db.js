const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.db).then(() => {
    console.log('DB connection established')
}).catch((err) => {
    console.log(`Error connecting to MongoDB: ${err}`);
})

module.exports = mongoose