const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')

router.get('/', customerController.getItems)
router.get('/checkout/:id', customerController.getCheckOutItem)
router.get('/checkout/:id/buy', customerController.getBuyCheckOutItem)
// router.get('/checkout/', customerController.getCheckOut)

module.exports = router