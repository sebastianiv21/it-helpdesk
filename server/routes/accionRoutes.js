const express = require('express')
const router = express.Router()
// const usersController = require('../controllers/usersController')

router
  .route('/')
  .get(accionesController.getAllAcciones)
  .post(accionesController.createNewAccion)

module.exports = router