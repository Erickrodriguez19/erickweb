const express = require('express') // Framework
const router = express.Router()    // Objeto para rutas
const conexion = require('./database/db') // Conexión

/*
Peticiones  : request / req / entrada
Respuesta   : results / res / salida
*/

// Ruta principal
router.get('/', (req, res) => {
    res.send("SENATI Ingeniería de Software con IA")
})

// Ruta para desarrollador
router.get('/desarrollador', (req, res) => {
    res.send("Jhon Erick Rodriguez Monja")
})

// Ruta para carrera
router.get('/carrera', (req, res) => {
    //res.send("Ingeniería de Sistemas y Computación")
    res.render("index")//plantilla
})

// Exportar el router
module.exports = router
