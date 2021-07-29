const { User } = require('../models/index')

class Controller {
    static home(req, res){
        res.render('pages/home')
    }
    static about(req, res){
        res.render('pages/about')
    }
    static getLoginPage(req, res) {
        res.render('login')
    }
    static postLoginPage(req, res) {
        User.findOne({
            where: {
                username: req.body.username
            }
        })
            .then((data) => {
                if(data && req.body.password === data.password) {
                    res.redirect('/')
                } else {
                    res.send('Invalid username/password')
                }
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static getRegister(req, res) {
        res.render('register')
    }
    static postRegister(req, res) {
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            homeAddress: req.body.homeAddress,
            role: req.body.role
        }
        User.create(data)
            .then(() => {
                res.redirect('/login')
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = Controller