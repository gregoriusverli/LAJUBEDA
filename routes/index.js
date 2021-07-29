const router = require('express').Router()
const loginpage = require('./loginpage')
const sellerpage = require('./povSeller')
const customerpage = require('./povBuyer')
const Controller = require('../controllers/controller')
const tagpage = require('./tags')

router.get('/', Controller.home)
router.get('/about', Controller.about)
router.use('/login', loginpage)
router.use('/seller', sellerpage)
router.use('/buyer', customerpage)
router.use('/tag', tagpage)

module.exports = router