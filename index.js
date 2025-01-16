const express = require('express');
require('dotenv').config();
const cors = require('cors');

// crear el server de express
const app = express();

// CORS
app.use(cors())

// directorio publico
app.use( express.static('public') )

// lectura y parseo del body
app.use( express.json() )

// rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

// evita error de rutas al desplegar junto al front
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/index.html')
})

// escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})