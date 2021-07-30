const { User } = require('../models/index')


class Controller {
    static home(req, res){
        res.render('pages/home')
    }
    static about(req, res){
        res.render('pages/about')
    }
    static getLoginPage(req, res) {
        req.session.isLogin = false
        res.render('pages/login')
    }
    static postLoginPage(req, res) {
        User.findOne({
            where: {
                username: req.body.username
            }
        })
            .then((data) => {
                console.log(data.role);
                if(data && req.body.password === data.password) {
                    req.session.isLogin = true
                    if(data.role === "Customer"){
                        res.redirect('/customer')
                    }
                    if (data.role === "Seller"){
                        res.redirect(`/seller/${data.id}`)
                    }
                } else {      
                    req.session.isLogin = false
                    res.send('Invalid username/password')
                }
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static getRegister(req, res) {
        res.render('pages/register')
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

    static logout(req, res){
        User.findAll()

        .then(data =>{
            req.session.isLogin = false
            res.redirect('/')
        })

        .catch(err =>{
            res.send(err)
        })
    }
}

module.exports = Controller