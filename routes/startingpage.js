const express = require('express')
const router = express.Router()
const Controller = require('../controllers')


router.get('/login', Controller.getLoginPage)
router.post('/login', Controller.postLoginPage)
router.get('/register', Controller.getRegister)
router.post('/register', Controller.postRegister)
router.get('/', Controller.home)
router.get('/about', Controller.about)

module.exports = router