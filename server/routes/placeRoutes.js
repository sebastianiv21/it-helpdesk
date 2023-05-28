const express = require('express')
const router = express.Router()
const placesController = require('../controllers/placesController')
const verifyJWT = require('../middlewares/verifyJWT')

// router.use(verifyJWT)

router.route('/').get(placesController.getAllDepartamentos)
router.route('/:departamento').get(placesController.getMunicipiosByDepartamento)

module.exports = router
