const Place = require('../models/Place')
const asyncHandler = require('express-async-handler')

// @desc Get all Places
// @route GET /Places
// @access Private
const getAllDepartamentos = asyncHandler(async (req, res) => {
  const departamentos = await Place.aggregate([
    {
      $group: {
        _id: '$idDepartamento',
        departamento: { $first: '$departamento' }
      }
    }
  ])
  res.json(departamentos)
})

const getMunicipiosByDepartamento = asyncHandler(async (req, res) => {
  const municipios = await Place.find(
    { departamento: req.params.departamento },
    'idMunicipio municipio'
  ).exec()
  res.json(municipios)
})

module.exports = {
  getAllDepartamentos,
  getMunicipiosByDepartamento
}
