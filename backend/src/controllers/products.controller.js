const mysql = require("sql2/promise")
const BackendResponse = require("../models/response")


const obtenerProductos = async (req, res) => {
    console.log("Obteniendo todos los productos para listar.")
    // Conectar base de datos

    // Obtener productos

    // Cerrar conexion
    
    if(resultado == true){
        const respuesta = BackendResponse.generateResponse(false, "ok", []);
        return res.status(200).json({respuesta});
    }else {
        const respuesta = BackendResponse.generateResponse(false, "ok", []);
        return res.status(200).json({respuesta});
    }
}

module.exports = {obtenerProductos};