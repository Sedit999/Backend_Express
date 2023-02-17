const { Router } = require('express')
const router = Router()
const {getPeliculas, createPelicula, updatePelicula, deletePelicula} = require('../controllers/peliculas.controllers')

//READ
router.get('/', getPeliculas )

//CREATE
router.post('/', createPelicula)

//Update
router.put('/:id', updatePelicula)

//DELETE
router.delete('/:id', deletePelicula)

module.exports = router