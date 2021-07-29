const express = require('express')
const router = express.Router()
const Controller = require('../controllers')
const session = require('express-session')

router.use(session({
    secret: 'oke mantap',
    resave: false,
    saveUninitialized: true,
  }))
  

router.get('/', Controller.home)
router.get('/about', Controller.about)
router.get('/login', Controller.getLoginPage)
router.post('/login', Controller.postLoginPage)
router.get('/register', Controller.getRegister)
router.post('/register', Controller.postRegister)
router.get('/logout', Controller.logout)

module.exports = router