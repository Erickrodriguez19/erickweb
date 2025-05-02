const express = require('express')
const app = express()

// Motor de plantillas
app.set('view engine', 'ejs')

//Enrutador
//El carácter / representa la raíz de tu Web https://miweb.com
app.use('/', require('./router'))

//Crear servidor
app.listen(5000, () => {
    console.log("Servidor ejecutándose en http://localhost:5000")
})
