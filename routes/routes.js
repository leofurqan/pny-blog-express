const express = require('express')
const bodyParser = require('body-parser')
const userController = require('../controllers/userController')
const method = require('method-override')

const router = express.Router()
const jsonParser = bodyParser.json()
const encodedParser = bodyParser.urlencoded({ extended: false })

router.use(method('_method'))

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

router.delete('/delete-user/:id', (req, res) => {
    userController.deleteUser(req, res)
})

router.get('/update-user/:id', (req, res) => {
    userController.getUserById(req, res)
})

router.patch('/update-user/:id', encodedParser, (req, res) => {
    userController.updateUser(req, res)
})

module.exports = router