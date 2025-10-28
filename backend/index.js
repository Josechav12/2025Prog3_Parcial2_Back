//--- Require de las dependencias necesarias ---//
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config({path: '.env'});

//--- Require de las rutas necesarias ---//
const userRoutes = require('./src/routes/players.routes');

//---------------------- Implementacion de Express e inyeccion de depencias/middlewares -----------------------//
const app = express();

//--- Implementacion de middlewares basicos de seguridad ---//
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => 
{
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {return res.status(400).json({ error: 'JSON inválido en la solicitud.' });}
    next();
});

//------------------------------- Endpoints -------------------------------//
app.get('/', async (req, res) => {res.json({name: app.get('pkg').name, autor: app.get('pkg').author, descripcion: app.get('pkg').description, version: app.get('pkg').version,});});

app.use('/api/usuarios', userRoutes);
// app.use('/api/productos', playersRoutes);


//--- Port defined ---//
const PORT = process.env.port || 3102;
app.listen(PORT, () => console.log(`API Backend corriendo en puerto ${PORT}`));