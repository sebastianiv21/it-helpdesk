const express = require('express')
const router = express.Router()
const accionesController = require('../controllers/accionesController')
const verifyJWT = require('../middlewares/verifyJWT')

router.use(verifyJWT)

router
  .route('/')
  .get(accionesController.getAllAcciones)
  .post(accionesController.createNewAccion)

module.exports = router