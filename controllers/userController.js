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

exports.deleteUser = (req, res) => {
    const id = req.params.id
    userModel.findByIdAndDelete(id).then(() => {
        res.redirect('/users')
    }).catch(err => {
        res.send(err)
    })
}

exports.getUserById = (req, res) => {
    const id = req.params.id
    userModel.findById(id).lean().then(user => {
        res.render('update-user', {title: 'Edit User', isUsers: true, 'user': user})
    }).catch(err => {
        res.send(err)
    })
}

exports.updateUser = (req, res) => {
    const id = req.params.id
    userModel.findByIdAndUpdate(id, req.body).then(() => {
        res.redirect('/users')
    }).catch(err => {
        res.send(err)
    })
}