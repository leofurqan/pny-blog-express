const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blog').then(() => {
    console.log('DB connection established')
}).catch((err) => {
    console.log(`Error connecting to MongoDB: ${err}`);
})

module.exports = mongoose