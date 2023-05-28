const express = require('express')
const router = express.Router()
const placesController = require('../controllers/placesController')
const verifyJWT = require('../middlewares/verifyJWT')

// router.use(verifyJWT)

router.route('/').get(placesController.getAllDepartamentos)
router.route('/:idDepartamento').get(placesController.getMunicipios)

module.exports = router
