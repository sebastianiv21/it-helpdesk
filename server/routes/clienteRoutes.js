const express = require('express')
const router = express.Router()
// const usersController = require('../controllers/usersController')

router
  .route('/')
  .get(clientesController.getAllClientes)
  .post(clientesController.createNewCliente)
  .patch(clientesController.updateCliente)
  .delete(clientesController.deleteCliente)

module.exports = router