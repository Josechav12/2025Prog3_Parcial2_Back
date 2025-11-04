import express from "express";
import environments from "./src/api/config/environments.js";

const app = express();
const PORT = environments.port;

import connection from "./src/api/database/db.js"; // Importamos la conexion a la BBDD para poder enviarle sentencias SQL
import cors from "cors";


app.use(cors()); //Middleware CORS basico que permite todas las solicitudes


app.get("/", (req, res) => {
    res.send("Holis mundo desde Express.js");
});


// Traer todos los productos
app.get("/products", async (req, res) => { 

    try {
        const sql = "SELECT * FROM productos";
    
        // Con rows extraemos exclusivamente los datos que solicitamos en la consulta
        const [rows] = await connection.query(sql);

        console.log(rows);
        
        res.status(200).json({
            payload: rows
        });
        
    
    } catch (error) {
        console.error("Error obteniendo productos", error.message);

        res.status(500).json({
            message: "Error interno al obtener productos"
        });
    }

});

// Traer un producto por ID
app.get("/products/:id", async (req, res) => {

    try {
        let { id } = req.params;

        // Gracias al uso de los placeholders -> ? evitamos ataques de inyeccion SQL
        let sql = "SELECT * FROM productos WHERE productos.id = ?";

        let [rows] = await connection.query(sql, [id]); // Este id reemplazara el placeholder ?
        console.log(rows);

        res.status(200).json({
            payload: rows
        });

        /*
        Los placeholders en SQL son marcadores especiales, como el carácter ? o nombres como :nombre, que se utilizan en consultas SQL 
        para indicar dónde se insertarán los valores reales durante la ejecución de la consulta.
        
        Su uso principal es prevenir inyecciones SQL al separar el código de la consulta del contenido de los datos, 
        ya que los valores se vinculan de forma segura a los placeholders en lugar de ser incrustados directamente en la cadena de consulta.

        // Gracias al destructuring, en rows guardamos y devolvemos especificamente los datos del producto, el resultado especifico de la consulta
        ]*/

    } catch(error) {
        console.error(`Error obteniendo productos con id ${id}`, error.message);

        res.status(500).json({
            message: "Error interno al obtener producto con id"
        })
    }


})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});