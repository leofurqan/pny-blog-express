const express = require('express')
const bodyParser = require('body-parser')
const userController = require('../controllers/userController')

const router = express.Router()
const jsonParser = bodyParser.json()
const encodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.render('dashboard', {title: 'Dashboard', isDashboard: true})
})

router.get('/users', (req, res) => {
    userController.getUsers(req, res)
})

router.get('/add-user', (req, res) => {
    res.render('add-user', {title: 'Add User', isUsers: true})
})

router.post('/add-user', encodedParser, (req, res) => {
    userController.insertUser(req, res)
})

module.exports = router