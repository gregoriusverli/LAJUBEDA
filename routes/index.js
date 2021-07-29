const router = require('express').Router()
const startingpage = require('./startingpage')
const sellerpage = require('./povSeller')
const customerpage = require('./povCustomer')
const tagpage = require('./tags')

router.use('/', startingpage)
router.use('/seller', sellerpage)
router.use('/customer', customerpage)
router.use('/tag', tagpage)

module.exports = router