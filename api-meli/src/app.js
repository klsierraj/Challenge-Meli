const express = require('express');
const api = express();
const cors = require('cors');
const routes = require('./routes/index');

api.use(cors());
api.use(routes);

// No es buena practica, solo a modo de prueba para cuando se revise el proyecto no ajustar .env
api.listen(3000, () => {
    console.log('Servidor escuchando en puerto ' + 3000);
});