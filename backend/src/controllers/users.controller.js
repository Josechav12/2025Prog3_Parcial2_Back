// src/controllers/players.controller.js
const mysql = require('mysql2/promise');
const BackendResponse = require("../models/response");

const obtenerUsuarios = async (req, res) => {
  console.log("Llegue al controller, voy a obtener a los usuarios!!.");
  
  //Me debo conectar a la db

  //Tiro la query

  //Me desconecto

  //Si hubo error lo capturo
  if (resultadoCreacion.salioOk == true)
  {
    const respuesta = BackendResponse.generateResponse(false, "ok", []);
    return res.status(200).json({respuesta});
  }
  else
  {
    return res.status(400).json(respuesta);
  }
}

module.exports = { obtenerUsuarios };
