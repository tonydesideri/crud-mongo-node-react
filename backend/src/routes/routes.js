const express = require ('express')

const routes = express.Router()

const cursoController = require('../controllers/cursoController')

routes.post('/cursos', cursoController.insert)
routes.get('/cursos', cursoController.selectAll)
routes.get('/cursos/:id', cursoController.selectOne)
routes.put('/cursos/:id', cursoController.update)
routes.delete('/cursos/:id', cursoController.delete)

module.exports = routes