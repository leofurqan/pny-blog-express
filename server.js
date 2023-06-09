const express = require('express')
const exphb = require('express-handlebars')
const router = require('./routes/routes')
const path = require('path')
require('dotenv').config()
require('./db/db')
const bcrypt = require('bcrypt')

const app = express()
app.use(router)

app.use(express.static(path.join(__dirname, 'public')))

app.engine('.hbs', exphb.engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './views')

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`)
})


