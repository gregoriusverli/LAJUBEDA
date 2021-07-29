const express = require('express')
const router = express.Router()
const sellerController = require('../controllers/sellerController')

router.get('/', sellerController.dashboard)
router.get('/upload', sellerController.uploadItem)


module.exports = router