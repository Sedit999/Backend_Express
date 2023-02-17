const { peliculas } = require('../database/db')
const {v4: uuid} = require('uuid')

const getPeliculas = (req, res)=>{
    return res.json({
        ok: true,
        msg: 'Usuarios Obtenidos',
        data: peliculas,
    })
}

const createPelicula =  (req, res)=>{
    const {title, year, price}=req.body
    const pelicula = {
        id: uuid(),
        title,
        year,
        price
    }
    peliculas.push(pelicula)
    return res.json({
        ok:true,
        msg: 'Pelicula Agregada',
        data: pelicula
    })
}

const updatePelicula =  (req, res)=>{
    const {id} = req.params
    const {title, year, price}=req.body
    const pelicula = peliculas.find((pelicula) => pelicula.id === id)
   
    pelicula.title = title
    pelicula.year = year
    pelicula.price = price

    return res.json({
        ok:true,
        msg: 'Pelicula Actualizada',
        data: pelicula
    })
}

const deletePelicula =  (req, res)=>{
    const {id} = req.params
   
    const pelicula = peliculas.find((pelicula) => pelicula.id === id)
   
    peliculas.splice(peliculas.indexOf(pelicula), 1)

    return res.json({
        ok:true,
        msg: 'Pelicula Eliminada',
        data: pelicula
    })
}

module.exports = {getPeliculas, createPelicula, updatePelicula, deletePelicula}