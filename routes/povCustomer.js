const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')

router.get('/', customerController.getItems)
router.get('/checkout/:id', customerController.getCheckOutItem)
router.get('/checkout/:id/buy', customerController.getBuyCheckOutItem)
router.get('/checkout/:id/delete', customerController.getDeleteCheckOutItem)

module.exports = router