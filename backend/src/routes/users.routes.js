const {Router} = require("express");
const usuariosController = require('../controllers/users.controller');

const usuariosRoutes = Router();

usuariosRoutes.get('/get-users', usuariosController.obtenerUsuarios);

module.exports = usuariosRoutes;