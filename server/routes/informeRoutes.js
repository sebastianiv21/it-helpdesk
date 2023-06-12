const express = require('express')
const router = express.Router()
const informeController = require('../controllers/informeController')
const verifyJWT = require('../middlewares/verifyJWT')

// router.use(verifyJWT)

router.route('/').get(informeController.getTicketsByDateRange)

module.exports = router
