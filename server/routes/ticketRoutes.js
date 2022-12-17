const express = require('express')
const router = express.Router()
const ticketsController = require('../controllers/ticketsController')
const verifyJWT = require('../middlewares/verifyJWT')

//router.use(verifyJWT)

router
  .route('/')
  .get(ticketsController.getAllTickets)
  .post(ticketsController.createNewTicket)
  .patch(ticketsController.updateTicket)
  .delete(ticketsController.deleteTicket)

module.exports = router