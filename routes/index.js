const router = require('express').Router()
const startingpage = require('./startingpage')
const sellerpage = require('./povSeller')
const customerpage = require('./povCustomer')
const tagpage = require('./tags')
const checkLogin = require('../middleware/checkLogin')

router.use('/', startingpage)
router.use('/seller', checkLogin, sellerpage)
router.use('/customer', checkLogin, customerpage)
router.use('/seller',checkLogin, sellerpage)
router.use('/seller', sellerpage)
router.use('/customer',checkLogin, customerpage)
router.use('/customer', customerpage)
router.use('/tag', tagpage)

module.exports = router