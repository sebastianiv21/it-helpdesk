const express = require('express')
const router = express.Router()
// const usersController = require('../controllers/usersController')

router
  .route('/')
  .get(ticketsController.getAllTickets)
  .post(ticketsController.createNewTicket)
  .patch(ticketsController.updateTicket)
  .delete(ticketsController.deleteTicket)

module.exports = router