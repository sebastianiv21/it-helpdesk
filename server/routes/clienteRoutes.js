const express = require('express')
const router = express.Router()
const clientesController = require('../controllers/clientesController')
const verifyJWT = require('../middlewares/verifyJWT')

// router.use(verifyJWT)

router
  .route('/')
  .get(clientesController.getAllClientes)
  .post(clientesController.createNewCliente)
  .patch(clientesController.updateCliente)
  .delete(clientesController.deleteCliente)

module.exports = router