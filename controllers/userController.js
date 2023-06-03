const userModel = require('../models/users')

exports.insertUser = (req, res) => {
    const user = userModel(req.body)
    user.save().then(() => {
        res.redirect('users')
    }).catch(err => {
        res.send(err)
    })
}

exports.getUsers = (req, res) => {
    userModel.find().lean().then(users => {
        res.render('users', {title: 'Users', isUsers: true, 'users': users})
    }).catch(err => {
        console.log(`get users error ${err}`)
    })
}