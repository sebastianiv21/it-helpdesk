const express = require('express')
const router = express.Router()
const agentesController = require('../controllers/agentesController')
const verifyJWT = require('../middlewares/verifyJWT')

// router.use(verifyJWT)

router
  .route('/')
  .get(agentesController.getAllAgentes)
  .post(agentesController.createNewAgente)
  .patch(agentesController.updateAgente)
  .delete(agentesController.deleteAgente)

module.exports = router
