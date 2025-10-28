const {Router} = require("express");
const playersController = require('../controllers/players.controller');

const userRoutes = Router();

userRoutes.get('/get-users', playersController.getUsuarios);

module.exports = userRoutes;