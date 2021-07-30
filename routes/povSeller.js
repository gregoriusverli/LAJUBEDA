const express = require('express')
const router = express.Router()
const sellerController = require('../controllers/sellerController')

router.get('/:id', sellerController.dashboard)
router.get('/:id/upload', sellerController.uploadItemGet)
router.post('/:id/upload', sellerController.uploadItemPost)
router.get('/:id/edit', sellerController.getEditUploadedItem)
router.post('/:id/edit', sellerController.postEditItem)
router.get('/:id/delete', sellerController.getDeleteItem)




module.exports = router