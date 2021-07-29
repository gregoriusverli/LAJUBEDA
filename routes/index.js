const router = require('express').Router()
const startingpage = require('./startingpage')
const sellerpage = require('./povSeller')
const customerpage = require('./povBuyer')
const tagpage = require('./tags')

router.use('/', startingpage)
router.use('/seller', sellerpage)
router.use('/buyer', customerpage)
router.use('/tag', tagpage)

module.exports = router