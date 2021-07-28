const router = require('express').Router()
const loginpage = require('./loginpage')
const sellerpage = require('./povSeller')
const customerpage = require('./povBuyer')
const tagpage = require('./tags')

router.use('/', loginpage)
router.use('/seller', sellerpage)
router.use('/buyer', customerpage)
router.use('/tag', tagpage)

module.exports = router