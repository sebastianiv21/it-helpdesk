const express = require('express')
const router = express.Router()
const accionesController = require('../controllers/accionesController')

router
  .route('/')
  .get(accionesController.getAllAcciones)
  .post(accionesController.createNewAccion)

module.exports = router